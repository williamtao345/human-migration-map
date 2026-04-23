import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import TimelineSlider from "./components/TimelineSlider";
import RouteDrawer from "./components/RouteDrawer";
import type { MigrationRoute } from "./data/types";

const MIN_YEAR = -65000;
const MAX_YEAR = 1200;
const AUTOPLAY_DURATION_MS = 30000;
const AUTOPLAY_TICK_MS = 50;

function App() {
  const [year, setYear] = useState(MIN_YEAR);
  const [selectedRoute, setSelectedRoute] = useState<MigrationRoute | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const now = performance.now();
      if (startTimeRef.current === null) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / AUTOPLAY_DURATION_MS, 1);
      setYear(MIN_YEAR + (MAX_YEAR - MIN_YEAR) * t);
      if (t >= 1) setIsPlaying(false);
    }, AUTOPLAY_TICK_MS);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleYearChange = (next: number) => {
    if (isPlaying) setIsPlaying(false);
    setYear(next);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative flex flex-col min-h-0">
        <MapView year={year} onRouteClick={setSelectedRoute} />
        <TimelineSlider year={year} onYearChange={handleYearChange} />
        <RouteDrawer route={selectedRoute} onClose={() => setSelectedRoute(null)} />
      </div>
    </div>
  );
}

export default App;
