import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import TimelineSlider from "./components/TimelineSlider";
import RouteDrawer, { type DrawerSelection } from "./components/RouteDrawer";
import { MAX_YEAR, MIN_YEAR } from "./lib/timeline";

const AUTOPLAY_DURATION_MS = 30000;
type PlaybackStart = { time: number; year: number };

function App() {
  const [year, setYear] = useState(MIN_YEAR);
  const [selection, setSelection] = useState<DrawerSelection | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mapReady, setMapReady] = useState(false);
  const startTimeRef = useRef<PlaybackStart | null>(null);
  const yearRef = useRef(year);

  useEffect(() => {
    yearRef.current = year;
  }, [year]);

  useEffect(() => {
    if (!isPlaying || !mapReady) return;
    let frame = 0;
    const tick = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = { time: now, year: yearRef.current };
      }
      const { time, year: startYear } = startTimeRef.current;
      const remainingSpan = MAX_YEAR - startYear;
      const elapsed = now - time;
      const remainingDuration =
        AUTOPLAY_DURATION_MS * (remainingSpan / (MAX_YEAR - MIN_YEAR));
      const t = remainingDuration > 0 ? Math.min(elapsed / remainingDuration, 1) : 1;
      const nextYear = startYear + remainingSpan * t;
      setYear(nextYear);
      if (nextYear >= MAX_YEAR) {
        setYear(MAX_YEAR);
        setIsPlaying(false);
        startTimeRef.current = null;
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying, mapReady]);

  const handleYearChange = (next: number) => {
    if (isPlaying) setIsPlaying(false);
    startTimeRef.current = null;
    setYear(next);
  };

  const handlePlayToggle = () => {
    startTimeRef.current = null;
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    if (year >= MAX_YEAR) setYear(MIN_YEAR);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    startTimeRef.current = null;
    setYear(MIN_YEAR);
    setIsPlaying(true);
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
        <TimelineSlider
          year={year}
          isPlaying={isPlaying}
          disabled={!mapReady}
          onYearChange={handleYearChange}
          onPlayToggle={handlePlayToggle}
          onReplay={handleReplay}
        />
      </div>
      <RouteDrawer selection={selection} onClose={() => setSelection(null)} />
    </div>
  );
}

export default App;
