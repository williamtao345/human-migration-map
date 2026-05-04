import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Threads from "./Threads";

export default function LandingOverlay({
  onStart,
}: {
  onStart: () => void;
}) {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleStart = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(onStart, 520);
  };

  return (
    <div
      className={[
        "absolute inset-0 z-30 flex items-center justify-center",
        "bg-background",
        "transition-opacity duration-500 ease-out",
        leaving ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-labelledby="landing-title"
    >
      <div className="absolute inset-0 z-0 translate-y-20 opacity-55 [mask-image:radial-gradient(ellipse_at_center,black_0%,black_42%,transparent_82%)] sm:translate-y-20">
        <Threads
          color={[0.16, 0.16, 0.16]}
          amplitude={0.75}
          distance={0.5}
        />
      </div>

      <div
        className={[
          "relative z-10 mx-auto flex w-full max-w-xl flex-col items-center px-6 text-center",
          "transition-all duration-700 ease-out",
          mounted && !leaving
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2",
        ].join(" ")}
      >
        <div className="mb-8 flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          <span>65,000 years</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>one species</span>
          <span className="h-px w-8 bg-border" />
        </div>

        <h1
          id="landing-title"
          className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          Peopling the Planet
        </h1>

        <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          An interactive map of human migration, from the first dispersal out of
          Africa to the settlement of the remotest Pacific. Watch the routes
          unfold across sixty-five millennia.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button
            type="button"
            size="lg"
            onClick={handleStart}
            className="group"
          >
            Begin the journey
            <ArrowRight
              data-icon="inline-end"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Button>
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-black">
            Click to open the interactive map
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground/70">
          <span>Made by Xuefei Tao</span>
        </div>
      </div>
    </div>
  );
}
