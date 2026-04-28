import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import TimelineSlider from "./components/TimelineSlider";
import RouteDrawer, { type DrawerSelection } from "./components/RouteDrawer";

const MIN_YEAR = -65000;
const MAX_YEAR = 1300;
const AUTOPLAY_DURATION_MS = 30000;

function App() {
  const [year, setYear] = useState(MIN_YEAR);
  const [selection, setSelection] = useState<DrawerSelection | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mapReady, setMapReady] = useState(false);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying || !mapReady) return;
    let frame = 0;
    const tick = (now: number) => {
      if (startTimeRef.current === null) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / AUTOPLAY_DURATION_MS, 1);
      setYear(MIN_YEAR + (MAX_YEAR - MIN_YEAR) * t);
      if (t >= 1) {
        setIsPlaying(false);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying, mapReady]);

  const handleYearChange = (next: number) => {
    if (isPlaying) setIsPlaying(false);
    setYear(next);
  };

  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 flex">
        <MapView
          year={year}
          ready={mapReady}
          onRouteClick={(route) => setSelection({ kind: "route", data: route })}
          onSiteClick={(site) => setSelection({ kind: "site", data: site })}
          onReady={() => setMapReady(true)}
        />
      </div>
      <div className="absolute inset-x-0 top-0 z-10">
        <Header />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <TimelineSlider year={year} onYearChange={handleYearChange} />
      </div>
      <RouteDrawer selection={selection} onClose={() => setSelection(null)} />
    </div>
  );
}

export default App;
