import { useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import TimelineSlider from "./components/TimelineSlider";
import EventDrawer from "./components/EventDrawer";
import type { MigrationEvent } from "./data/types";

function App() {
  const [year, setYear] = useState(-65000);
  const [selectedEvent, setSelectedEvent] = useState<MigrationEvent | null>(null);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative flex flex-col min-h-0">
        <MapView year={year} onEventClick={setSelectedEvent} />
        <TimelineSlider year={year} onYearChange={setYear} />
        <EventDrawer event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      </div>
    </div>
  );
}

export default App;
