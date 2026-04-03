import { useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import TimelineSlider from "./components/TimelineSlider";
import EventDrawer from "./components/EventDrawer";

function App() {
  const [year, setYear] = useState(-65000);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative flex flex-col min-h-0">
        <MapView year={year} />
        <TimelineSlider year={year} onYearChange={setYear} />
        <EventDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </div>
    </div>
  );
}

export default App;
