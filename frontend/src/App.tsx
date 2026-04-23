import { useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import TimelineSlider from "./components/TimelineSlider";
import RouteDrawer from "./components/RouteDrawer";
import type { MigrationRoute } from "./data/types";

function App() {
  const [year, setYear] = useState(-65000);
  const [selectedRoute, setSelectedRoute] = useState<MigrationRoute | null>(null);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative flex flex-col min-h-0">
        <MapView year={year} onRouteClick={setSelectedRoute} />
        <TimelineSlider year={year} onYearChange={setYear} />
        <RouteDrawer route={selectedRoute} onClose={() => setSelectedRoute(null)} />
      </div>
    </div>
  );
}

export default App;
