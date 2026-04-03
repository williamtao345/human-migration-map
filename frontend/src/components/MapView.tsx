import { useMemo } from "react";
import Map, { Source, Layer } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { routes } from "@/data/routes";
import type { MigrationRoute } from "@/data/types";
import type { LineLayerSpecification } from "maplibre-gl";

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
  const coords = normalizeLongitudes(route.coordinates);
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

export default function MapView({ year }: { year: number }) {
  const routeData = useMemo(() => {
    return routes.map((route) => ({
      route,
      coords: getVisibleCoords(route, year),
    })).filter((r) => r.coords.length >= 2);
  }, [year]);

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
      </Map>
    </div>
  );
}
