import { useMemo, useCallback, useState, useEffect, useRef } from "react";
import Map, { Source, Layer, type MapLayerMouseEvent, type MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { routes } from "@/data/routes";
import { sites } from "@/data/sites";
import { locations, type LocationName } from "@/data/locations";
import type { MigrationRoute, Site } from "@/data/types";
import type { LineLayerSpecification, StyleSpecification } from "maplibre-gl";

const BASE_STYLE_URL = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
const WATER_COLOR = "#dcdcdc";
const WATER_SHADOW_COLOR = "#d4d4d4";

function patchWaterColors(style: StyleSpecification): StyleSpecification {
  return {
    ...style,
    layers: style.layers.map((layer) => {
      if (layer.id === "water" && layer.type === "fill") {
        return { ...layer, paint: { ...layer.paint, "fill-color": WATER_COLOR } };
      }
      if (layer.id === "water_shadow" && layer.type === "fill") {
        return { ...layer, paint: { ...layer.paint, "fill-color": WATER_SHADOW_COLOR } };
      }
      return layer;
    }),
  };
}

function coordOf(name: LocationName): [number, number] {
  return [...locations[name]];
}

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
function buildPhantomMaps(): { beforeMap: globalThis.Map<LocationName, LocationName>; afterMap: globalThis.Map<LocationName, LocationName> } {
  const beforeMap = new globalThis.Map<LocationName, LocationName>();
  const afterMap = new globalThis.Map<LocationName, LocationName>();

  for (const route of routes) {
    const w = route.waypoints;

    for (const other of routes) {
      if (other.id === route.id) continue;
      const otherStart = other.waypoints[0];
      const otherEnd = other.waypoints[other.waypoints.length - 1];

      for (let i = 0; i < w.length; i++) {
        if (w[i] === otherStart && i > 0) {
          beforeMap.set(otherStart, w[i - 1]);
          break;
        }
      }

      for (let i = 0; i < w.length; i++) {
        if (w[i] === otherEnd && i < w.length - 1) {
          afterMap.set(otherEnd, w[i + 1]);
          break;
        }
      }
    }
  }

  return { beforeMap, afterMap };
}

const { beforeMap, afterMap } = buildPhantomMaps();

// Endpoints = first + last waypoint of each route, deduped by location.
// When two routes share an endpoint, keep the earliest visibility year.
const endpoints: { location: LocationName; year: number }[] = (() => {
  const earliest = new globalThis.Map<LocationName, number>();
  const consider = (loc: LocationName, year: number) => {
    const prev = earliest.get(loc);
    if (prev === undefined || year < prev) earliest.set(loc, year);
  };
  for (const route of routes) {
    consider(route.waypoints[0], route.startYear);
    consider(route.waypoints[route.waypoints.length - 1], route.endYear);
  }
  return Array.from(earliest, ([location, year]) => ({ location, year }));
})();

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

function normalizeRelative(
  point: [number, number] | undefined,
  ref: [number, number],
): [number, number] | undefined {
  if (!point) return undefined;
  let lng = point[0];
  while (lng - ref[0] > 180) lng -= 360;
  while (ref[0] - lng > 180) lng += 360;
  return [lng, point[1]];
}

function getVisibleCoords(route: MigrationRoute, year: number): [number, number][] {
  const w = route.waypoints;
  const raw = w.map(coordOf);
  const normalized = normalizeLongitudes(raw);
  const phantomBeforeName = beforeMap.get(w[0]);
  const phantomAfterName = afterMap.get(w[w.length - 1]);
  const phantomBefore = normalizeRelative(
    phantomBeforeName ? coordOf(phantomBeforeName) : undefined,
    normalized[0],
  );
  const phantomAfter = normalizeRelative(
    phantomAfterName ? coordOf(phantomAfterName) : undefined,
    normalized[normalized.length - 1],
  );
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

const HIT_LAYER_SUFFIX = "-hit";

// DOM Markers render once at their literal longitude; GL line layers render in every
// world copy. Replicate markers across copies so endpoints stay aligned with routes
// when the map wraps horizontally at low zoom.
const WORLD_COPY_OFFSETS = [-720, -360, 0, 360, 720];

export default function MapView({
  year,
  onRouteClick,
  onSiteClick,
}: {
  year: number;
  onRouteClick?: (route: MigrationRoute) => void;
  onSiteClick?: (site: Site) => void;
}) {
  const [hover, setHover] = useState<
    { kind: "route" | "site"; id: string; x: number; y: number } | null
  >(null);
  const [mapStyle, setMapStyle] = useState<StyleSpecification | null>(null);
  const mapRef = useRef<MapRef | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const positionElement = useCallback((el: HTMLElement) => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    const lng = Number(el.dataset.lng);
    const lat = Number(el.dataset.lat);
    const p = map.project([lng, lat]);
    el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;
  }, []);

  const repositionMarkers = useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const els = overlay.querySelectorAll<HTMLElement>("[data-lng]");
    els.forEach(positionElement);
  }, [positionElement]);

  const markerRef = useCallback(
    (el: HTMLElement | null) => {
      if (el) positionElement(el);
    },
    [positionElement],
  );

  useEffect(() => {
    let cancelled = false;
    fetch(BASE_STYLE_URL)
      .then((r) => r.json() as Promise<StyleSpecification>)
      .then((style) => {
        if (!cancelled) setMapStyle(patchWaterColors(style));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const routeData = useMemo(() => {
    return routes.map((route) => ({
      route,
      coords: getVisibleCoords(route, year),
    })).filter((r) => r.coords.length >= 2);
  }, [year]);

  const visibleEndpoints = useMemo(() => {
    return endpoints.filter((e) => year >= e.year);
  }, [year]);

  const visibleSites = useMemo(() => {
    return sites.filter((s) => year >= s.year);
  }, [year]);

  const interactiveLayerIds = useMemo(
    () => routeData.map(({ route }) => route.id + HIT_LAYER_SUFFIX),
    [routeData]
  );

  const routeIdFromEvent = (e: MapLayerMouseEvent): string | null => {
    const layerId = e.features?.[0]?.layer?.id;
    if (!layerId || !layerId.endsWith(HIT_LAYER_SUFFIX)) return null;
    return layerId.slice(0, -HIT_LAYER_SUFFIX.length);
  };

  const isSiteEvent = (e: MapLayerMouseEvent): boolean => {
    const target = e.originalEvent?.target as HTMLElement | null;
    return !!target?.closest("[data-site-marker]");
  };

  const handleMouseMove = useCallback((e: MapLayerMouseEvent) => {
    if (isSiteEvent(e)) return;
    const id = routeIdFromEvent(e);
    e.target.getCanvas().style.cursor = id ? "pointer" : "";
    if (id) {
      setHover({ kind: "route", id, x: e.point.x, y: e.point.y });
    } else {
      setHover((prev) => (prev === null || prev.kind !== "route" ? prev : null));
    }
  }, []);

  const handleMouseLeave = useCallback((e: MapLayerMouseEvent) => {
    e.target.getCanvas().style.cursor = "";
    setHover((prev) => (prev?.kind === "route" ? null : prev));
  }, []);

  const handleMapClick = useCallback(
    (e: MapLayerMouseEvent) => {
      if (isSiteEvent(e)) return;
      const id = routeIdFromEvent(e);
      if (!id) return;
      const route = routes.find((r) => r.id === id);
      if (route) onRouteClick?.(route);
    },
    [onRouteClick]
  );

  const hoveredLabel =
    hover?.kind === "route"
      ? routes.find((r) => r.id === hover.id)?.name
      : hover?.kind === "site"
        ? sites.find((s) => s.id === hover.id)?.name
        : null;

  if (!mapStyle) {
    return <div className="flex-1 bg-background" />;
  }

  return (
    <div className="flex-1 relative">
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 40,
          latitude: 20,
          zoom: 2,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle}
        interactiveLayerIds={interactiveLayerIds}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleMapClick}
        onLoad={repositionMarkers}
        onMove={repositionMarkers}
        onZoom={repositionMarkers}
        onResize={repositionMarkers}
      >
        {routeData.map(({ route, coords }) => {
          const isHovered = hover?.kind === "route" && hover.id === route.id;
          return (
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
                "line-width": isHovered ? 5 : 3,
                "line-opacity": isHovered ? 1 : 0.8,
              }}
            />
            <Layer
              id={route.id + HIT_LAYER_SUFFIX}
              type="line"
              layout={lineLayout}
              paint={{
                "line-color": route.color,
                "line-width": 20,
                "line-opacity": 0,
              }}
            />
          </Source>
          );
        })}
      </Map>
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {visibleEndpoints.flatMap((endpoint) => {
          const [lng, lat] = locations[endpoint.location];
          return WORLD_COPY_OFFSETS.map((offset) => (
            <div
              key={`${endpoint.location}@${offset}`}
              ref={markerRef}
              data-lng={lng + offset}
              data-lat={lat}
              className="pointer-events-none absolute left-0 top-0 w-2 h-2"
            >
              <div
                className="absolute inset-0 rounded-full bg-foreground/60"
                style={{ animation: "endpoint-ping 900ms ease-out forwards" }}
              />
              <div
                className="absolute inset-0 rounded-full bg-foreground border-2 border-background"
                style={{ animation: "endpoint-pop 450ms cubic-bezier(0.34, 1.56, 0.64, 1) both" }}
              />
            </div>
          ));
        })}
        {visibleSites.flatMap((site) => {
          const [lng, lat] = locations[site.location];
          return WORLD_COPY_OFFSETS.map((offset) => (
            <button
              key={`${site.id}@${offset}`}
              ref={markerRef}
              type="button"
              aria-label={site.name}
              data-site-marker={site.id}
              data-lng={lng + offset}
              data-lat={lat}
              className="group pointer-events-auto absolute left-0 top-0 w-4 h-4 cursor-pointer bg-transparent border-0 p-0"
              onClick={(e) => {
                e.stopPropagation();
                onSiteClick?.(site);
              }}
              onMouseMove={(e) => {
                const wrapper = overlayRef.current;
                const rect = wrapper?.getBoundingClientRect();
                setHover({
                  kind: "site",
                  id: site.id,
                  x: e.clientX - (rect?.left ?? 0),
                  y: e.clientY - (rect?.top ?? 0),
                });
              }}
              onMouseLeave={() =>
                setHover((prev) =>
                  prev?.kind === "site" && prev.id === site.id ? null : prev,
                )
              }
            >
              <span
                className="absolute inset-0 rounded-full bg-amber-500/30 group-hover:bg-amber-500/50 transition-colors"
                style={{ animation: "endpoint-ping 1200ms ease-out forwards" }}
              />
              <span
                className="absolute inset-[3px] rotate-45 bg-amber-600 border-2 border-background group-hover:inset-[2px] transition-all"
                style={{ animation: "endpoint-pop 450ms cubic-bezier(0.34, 1.56, 0.64, 1) both" }}
              />
            </button>
          ));
        })}
      </div>
      {hover && hoveredLabel && (
        <div
          className="pointer-events-none absolute z-10 rounded-md border bg-popover px-2 py-1 text-sm text-popover-foreground shadow-md whitespace-nowrap"
          style={{
            left: hover.x + 12,
            top: hover.y + 12,
          }}
        >
          {hoveredLabel}
        </div>
      )}
    </div>
  );
}
