# Human Migration Map

An interactive web app that visualizes human migration from ~65,000 years ago through 1200 CE. Users scrub a timeline slider to watch migration routes draw themselves across a world map, with side panels providing context at key stops.

**Course:** IB35AC — Human Biological Variation (UC Berkeley, Spring 2026)

## Tech Stack

- React + TypeScript (Vite)
- shadcn/ui (Radix + Tailwind CSS)
- MapLibre GL (via react-map-gl)
- D3.js (optional, for charts/animations)

## Getting Started

```bash
./dev.sh
```

Or manually:

```bash
cd frontend
npm install
npm run dev
```

## Project Structure

```
├── dev.sh                  # Start dev server
└── frontend/               # React app
    └── src/
        ├── components/     # UI components (MapView, RouteDrawer, TimelineSlider, …)
        ├── data/           # locations, routes, sites, shared types
        └── lib/            # Utilities (timeline math, year formatting)
```
