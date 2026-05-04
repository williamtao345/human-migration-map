import type { LocationName } from "./locations";
import type { SourceId } from "./sources";

export interface MigrationRoute {
  id: string;
  name: string;
  startYear: number; // negative = years ago, positive = CE
  endYear: number;
  color: string;
  waypoints: LocationName[];
  description: string;
  sourceIds?: SourceId[];
}

export interface SiteImage {
  src: string;
  alt: string;
  credit: string; // e.g., "Didier Descouens · CC BY-SA 4.0"
  sourceUrl: string; // Wikimedia Commons file page
}

export interface Site {
  id: string;
  name: string;
  location: LocationName;
  year: number; // dated age of the find (negative = years ago, positive = CE)
  description: string;
  sourceIds?: SourceId[];
  image?: SiteImage;
}
