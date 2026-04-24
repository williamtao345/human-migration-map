// Format a year value for display.
// Negative = years before present; positive = CE.
export function formatYear(year: number): string {
  if (year <= -1000000) {
    const mya = -year / 1000000;
    const rounded = mya >= 10 ? Math.round(mya) : Math.round(mya * 10) / 10;
    return `${rounded} Mya`;
  }
  if (year <= -1000) {
    const kya = Math.round(-year / 1000);
    return `${kya} kya`;
  }
  if (year < 0) {
    return `${Math.round(-year)} BCE`;
  }
  return `${Math.round(year)} CE`;
}
