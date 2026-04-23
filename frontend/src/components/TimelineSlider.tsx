import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { sliderToYear, yearToSlider, formatYear, getEra } from "@/lib/timeline";

const SLIDER_MIN = 0;
const SLIDER_MAX = 1000;

export default function TimelineSlider({
  year,
  onYearChange,
}: {
  year: number;
  onYearChange: (year: number) => void;
}) {
  const sliderValue = Math.round(yearToSlider(year) * SLIDER_MAX);

  return (
    <div className="h-20 border-t px-8 flex flex-col justify-center gap-1">
      <Slider
        min={SLIDER_MIN}
        max={SLIDER_MAX}
        value={[sliderValue]}
        onValueChange={(v) => {
          const val = Array.isArray(v) ? v[0] : v;
          onYearChange(sliderToYear(val / SLIDER_MAX));
        }}
      />
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span>65 kya</span>
        <div className="flex-1 grid grid-cols-2 items-center gap-2 px-4">
          <span className="font-medium text-foreground text-right">{formatYear(year)}</span>
          <div className="flex justify-start">
            <Badge variant="secondary">{getEra(year)}</Badge>
          </div>
        </div>
        <span>1200 CE</span>
      </div>
    </div>
  );
}
