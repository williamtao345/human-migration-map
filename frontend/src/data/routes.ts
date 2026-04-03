import type { MigrationRoute } from "./types";

export const routes: MigrationRoute[] = [
  {
    id: "out-of-africa",
    name: "Out of Africa",
    startYear: -65000,
    endYear: -50000,
    color: "#e07a3a",
    coordinates: [
      [40, 10],   // East Africa
      [45, 15],   // Southern Arabia
      [35, 32],   // Levant
    ],
  },
  {
    id: "sahul",
    name: "Settlement of Sahul",
    startYear: -55000,
    endYear: -47000,
    color: "#d4a03c",
    coordinates: [
      [35, 32],   // Levant
      [77, 10],   // Southern India
      [105, 0],   // SE Asia / Sunda
      [132, -12], // Northern Australia
    ],
  },
  {
    id: "europe-whg",
    name: "Peopling of Europe (WHG)",
    startYear: -45000,
    endYear: -20000,
    color: "#4a8bc2",
    coordinates: [
      [35, 32],   // Levant
      [22, 42],   // Balkans
      [2, 46],    // Western Europe
    ],
  },
  {
    id: "europe-eef",
    name: "Peopling of Europe (EEF)",
    startYear: -11000,
    endYear: -7000,
    color: "#6ba3d6",
    coordinates: [
      [33, 39],   // Central Anatolia
      [22, 42],   // Balkans
      [2, 46],    // Central/Western Europe
    ],
  },
  {
    id: "europe-yamnaya",
    name: "Peopling of Europe (Yamnaya)",
    startYear: -4500,
    endYear: -3000,
    color: "#3b6ea0",
    coordinates: [
      [40, 48],   // Pontic-Caspian Steppe
      [13, 52],   // Central/Northern Europe
    ],
  },
  {
    id: "beringia",
    name: "Crossing Beringia",
    startYear: -23000,
    endYear: -15000,
    color: "#c04040",
    coordinates: [
      [170, 63],  // NE Siberia
      [-169, 65], // Bering Strait
      [-150, 63], // Alaska
    ],
  },
  {
    id: "americas",
    name: "Peopling of the Americas",
    startYear: -15000,
    endYear: -13000,
    color: "#d45050",
    coordinates: [
      [-150, 63], // Alaska (same as Beringia end)
      [-125, 48], // Pacific Northwest
      [-90, 15],  // Central America
      [-70, -40], // Southern South America
    ],
  },
  {
    id: "polynesia",
    name: "Polynesian Expansion",
    startYear: 800,
    endYear: 1200,
    color: "#8b5fc7",
    coordinates: [
      [-171.8, -13.8], // Samoa
      [-159.8, -21.2], // Cook Islands
      [-149.4, -17.7], // Tahiti
      [-145, -16],     // Tuamotu
      [-139.5, -9.8],  // Marquesas
      [-109.3, -27.1], // Rapa Nui
    ],
  },
];
