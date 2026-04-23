import type { LocationName } from "./locations";

export interface MigrationRoute {
  id: string;
  name: string;
  startYear: number; // negative = years ago, positive = CE
  endYear: number;
  color: string;
  waypoints: LocationName[];
  description: string;
}
