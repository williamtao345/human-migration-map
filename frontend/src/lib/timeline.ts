// Timeline range: -65000 (65 kya) to 1300 (1300 CE)
// Negative = years before present, positive = CE
export const MIN_YEAR = -65000;
export const MAX_YEAR = 1300;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Convert slider position (0–1) to year
export function sliderToYear(t: number): number {
  return MIN_YEAR + (MAX_YEAR - MIN_YEAR) * clamp(t, 0, 1);
}

// Convert year to slider position (0–1)
export function yearToSlider(year: number): number {
  return clamp((year - MIN_YEAR) / (MAX_YEAR - MIN_YEAR), 0, 1);
}

// Get era label for a given year
export function getEra(year: number): string {
  if (year < -11700) return "Late Pleistocene";
  if (year < -4500) return "Early Holocene";
  return "Holocene";
}
