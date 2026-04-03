export interface MigrationRoute {
  id: string;
  name: string;
  startYear: number; // negative = years ago, positive = CE
  endYear: number;
  color: string;
  coordinates: [number, number][]; // [longitude, latitude]
}

export interface MigrationEvent {
  id: string;
  name: string;
  year: number;
  location: [number, number]; // [longitude, latitude]
  description: string;
  routeId?: string;
}
