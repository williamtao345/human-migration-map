import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sliderToYear, yearToSlider, getEra, MAX_YEAR } from "@/lib/timeline";
import { formatYear } from "@/lib/formatYear";
import { Pause, Play, RotateCcw } from "lucide-react";

const SLIDER_MIN = 0;
const SLIDER_MAX = 1000;

export default function TimelineSlider({
  year,
  isPlaying,
  disabled = false,
  onYearChange,
  onPlayToggle,
  onReplay,
}: {
  year: number;
  isPlaying: boolean;
  disabled?: boolean;
  onYearChange: (year: number) => void;
  onPlayToggle: () => void;
  onReplay: () => void;
}) {
  const sliderValue = Math.round(yearToSlider(year) * SLIDER_MAX);
  const isComplete = year >= MAX_YEAR;
  const PlayIcon = isPlaying ? Pause : Play;

  return (
    <div className="min-h-24 border-t bg-background/70 px-4 py-3 backdrop-blur-sm sm:h-24 sm:px-8">
      <div className="grid h-full grid-cols-[auto_1fr] items-center gap-3">
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            disabled={disabled}
            aria-label={isPlaying ? "Pause timeline" : isComplete ? "Replay timeline" : "Play timeline"}
            onClick={onPlayToggle}
          >
            <PlayIcon />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={disabled}
            aria-label="Restart timeline"
            onClick={onReplay}
          >
            <RotateCcw />
          </Button>
        </div>
        <div className="min-w-0 space-y-2">
          <Slider
            min={SLIDER_MIN}
            max={SLIDER_MAX}
            value={[sliderValue]}
            disabled={disabled}
            onValueChange={(v) => {
              const val = Array.isArray(v) ? v[0] : v;
              onYearChange(sliderToYear(val / SLIDER_MAX));
            }}
          />
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 text-xs text-muted-foreground">
            <span>65 kya</span>
            <div className="flex min-w-0 items-center justify-center gap-2">
              <span className="truncate text-sm font-semibold text-foreground">
                {formatYear(year)}
              </span>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                {getEra(year)}
              </Badge>
            </div>
            <span>1300 CE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
