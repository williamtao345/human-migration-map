// Timeline range: -200000 (200 kya) to 1300 (1300 CE)
// Negative = years before present, positive = CE
const MIN_YEAR = -65000;
const MAX_YEAR = 1300;

// Convert slider position (0–1) to year
export function sliderToYear(t: number): number {
  return MIN_YEAR + (MAX_YEAR - MIN_YEAR) * t;
}

// Convert year to slider position (0–1)
export function yearToSlider(year: number): number {
  return (year - MIN_YEAR) / (MAX_YEAR - MIN_YEAR);
}

// Get era label for a given year
export function getEra(year: number): string {
  if (year < -11700) return "Late Pleistocene";
  if (year < -4500) return "Early Holocene";
  return "Holocene";
}
