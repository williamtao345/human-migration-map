import { useMemo, useCallback } from "react";
import Map, { Source, Layer, Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { routes } from "@/data/routes";
import { events } from "@/data/events";
import type { MigrationRoute, MigrationEvent } from "@/data/types";
import type { LineLayerSpecification } from "maplibre-gl";

// Catmull-Rom spline: smooths waypoints into a curve
// phantomBefore/phantomAfter provide tangent continuity at junctions with other routes
function catmullRom(
  points: [number, number][],
  phantomBefore?: [number, number],
  phantomAfter?: [number, number],
  numPerSegment = 16,
): [number, number][] {
  if (points.length < 2) return points;
  const result: [number, number][] = [points[0]];

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : (phantomBefore ?? points[0]);
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i + 2 < points.length ? points[i + 2] : (phantomAfter ?? points[points.length - 1]);

    for (let j = 1; j <= numPerSegment; j++) {
      const t = j / numPerSegment;
      const t2 = t * t;
      const t3 = t2 * t;

      const lng =
        0.5 * (
          (2 * p1[0]) +
          (-p0[0] + p2[0]) * t +
          (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 +
          (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3
        );
      const lat =
        0.5 * (
          (2 * p1[1]) +
          (-p0[1] + p2[1]) * t +
          (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 +
          (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3
        );
      result.push([lng, lat]);
    }
  }

  return result;
}

// Build phantom point lookups so connected routes have smooth tangents at junctions
function coordKey(c: [number, number]) { return `${c[0]},${c[1]}`; }

// Match on raw coordinates, but return normalized phantom points relative to the matched route
function buildPhantomMaps(): { beforeMap: globalThis.Map<string, [number, number]>; afterMap: globalThis.Map<string, [number, number]> } {
  const beforeMap = new globalThis.Map<string, [number, number]>();
  const afterMap = new globalThis.Map<string, [number, number]>();

  for (const route of routes) {
    const raw = route.coordinates;

    for (const other of routes) {
      if (other.id === route.id) continue;
      const otherRaw = other.coordinates;

      // If other route starts where this route has a point, provide phantom for other's start
      for (let i = 0; i < raw.length; i++) {
        if (coordKey(raw[i]) === coordKey(otherRaw[0]) && i > 0) {
          beforeMap.set(coordKey(otherRaw[0]), raw[i - 1]);
          break;
        }
      }

      // If other route ends where this route has a point, provide phantom for other's end
      for (let i = 0; i < raw.length; i++) {
        if (coordKey(raw[i]) === coordKey(otherRaw[otherRaw.length - 1]) && i < raw.length - 1) {
          afterMap.set(coordKey(otherRaw[otherRaw.length - 1]), raw[i + 1]);
          break;
        }
      }
    }
  }

  return { beforeMap, afterMap };
}

const { beforeMap, afterMap } = buildPhantomMaps();

// Normalize longitudes so consecutive points always take the short path
function normalizeLongitudes(coords: [number, number][]): [number, number][] {
  if (coords.length === 0) return coords;
  const result: [number, number][] = [coords[0]];
  for (let i = 1; i < coords.length; i++) {
    const prevLng = result[i - 1][0];
    let lng = coords[i][0];
    while (lng - prevLng > 180) lng -= 360;
    while (prevLng - lng > 180) lng += 360;
    result.push([lng, coords[i][1]]);
  }
  return result;
}

function getVisibleCoords(route: MigrationRoute, year: number): [number, number][] {
  const raw = route.coordinates;
  const normalized = normalizeLongitudes(raw);
  const phantomBefore = beforeMap.get(coordKey(raw[0]));
  const phantomAfter = afterMap.get(coordKey(raw[raw.length - 1]));
  const coords = catmullRom(normalized, phantomBefore, phantomAfter);
  if (year < route.startYear) return [];
  if (year >= route.endYear) return coords;

  const progress = (year - route.startYear) / (route.endYear - route.startYear);
  const totalSegments = coords.length - 1;
  const exactSegment = progress * totalSegments;
  const segmentIndex = Math.floor(exactSegment);
  const segmentProgress = exactSegment - segmentIndex;

  const result = coords.slice(0, segmentIndex + 1);

  if (segmentIndex < totalSegments) {
    const from = coords[segmentIndex];
    const to = coords[segmentIndex + 1];
    result.push([
      from[0] + (to[0] - from[0]) * segmentProgress,
      from[1] + (to[1] - from[1]) * segmentProgress,
    ]);
  }

  return result;
}

const lineLayout: LineLayerSpecification["layout"] = {
  "line-join": "round",
  "line-cap": "round",
};

export default function MapView({
  year,
  onEventClick,
}: {
  year: number;
  onEventClick: (event: MigrationEvent) => void;
}) {
  const routeData = useMemo(() => {
    return routes.map((route) => ({
      route,
      coords: getVisibleCoords(route, year),
    })).filter((r) => r.coords.length >= 2);
  }, [year]);

  const visibleEvents = useMemo(() => {
    return events.filter((e) => year >= e.year);
  }, [year]);

  const handleMarkerClick = useCallback(
    (event: MigrationEvent) => () => onEventClick(event),
    [onEventClick]
  );

  return (
    <div className="flex-1">
      <Map
        initialViewState={{
          longitude: 40,
          latitude: 20,
          zoom: 2,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        {routeData.map(({ route, coords }) => (
          <Source
            key={route.id}
            id={route.id}
            type="geojson"
            data={{
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: coords,
              },
            }}
          >
            <Layer
              id={route.id}
              type="line"
              layout={lineLayout}
              paint={{
                "line-color": route.color,
                "line-width": 3,
                "line-opacity": 0.8,
              }}
            />
          </Source>
        ))}
        {visibleEvents.map((event) => (
          <Marker
            key={event.id}
            longitude={event.location[0]}
            latitude={event.location[1]}
            anchor="center"
            onClick={handleMarkerClick(event)}
          >
            <div
              className="w-3 h-3 rounded-full bg-foreground border-2 border-background cursor-pointer hover:scale-150 transition-transform"
            />
          </Marker>
        ))}
      </Map>
    </div>
  );
}
