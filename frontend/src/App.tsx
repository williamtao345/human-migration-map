import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import TimelineSlider from "./components/TimelineSlider";
import RouteDrawer, { type DrawerSelection } from "./components/RouteDrawer";

const MIN_YEAR = -65000;
const MAX_YEAR = 1200;
const AUTOPLAY_DURATION_MS = 30000;

function App() {
  const [year, setYear] = useState(MIN_YEAR);
  const [selection, setSelection] = useState<DrawerSelection | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
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
  }, [isPlaying]);

  const handleYearChange = (next: number) => {
    if (isPlaying) setIsPlaying(false);
    setYear(next);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative flex flex-col min-h-0">
        <MapView
          year={year}
          onRouteClick={(route) => setSelection({ kind: "route", data: route })}
          onSiteClick={(site) => setSelection({ kind: "site", data: site })}
        />
        <TimelineSlider year={year} onYearChange={handleYearChange} />
        <RouteDrawer selection={selection} onClose={() => setSelection(null)} />
      </div>
    </div>
  );
}

export default App;
