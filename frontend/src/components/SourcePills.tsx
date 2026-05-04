import { useEffect, useRef, useState } from "react";
import { sources, type SourceId } from "@/data/sources";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type SourcePillsProps = {
  sourceIds?: SourceId[];
  className?: string;
};

export default function SourcePills({ sourceIds, className }: SourcePillsProps) {
  const [selectedSourceId, setSelectedSourceId] = useState<SourceId | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const items = sourceIds?.map((id) => ({ id, source: sources[id] })) ?? [];
  const selectedSource = selectedSourceId ? sources[selectedSourceId] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedSource && !dialog.open) {
      dialog.showModal();
      return;
    }

    if (!selectedSource && dialog.open) dialog.close();
  }, [selectedSource]);

  if (items.length === 0) return null;

  return (
    <>
      <section className={cn("border-t pt-3", className)}>
        <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Sources
        </h3>
        <ul className="flex flex-wrap gap-2">
          {items.map(({ id, source }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => setSelectedSourceId(id)}
                className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-muted hover:text-foreground"
              >
                {source.shortLabel}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <dialog
        ref={dialogRef}
        onClose={() => setSelectedSourceId(null)}
        className="m-auto max-w-[calc(100%-2rem)] rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 backdrop:bg-black/10 backdrop:backdrop-blur-xs sm:max-w-lg"
      >
        {selectedSource && (
          <div className="grid gap-4 pr-8">
            <div className="grid gap-2">
              <h3 className="font-heading text-base leading-none font-medium">
                {selectedSource.shortLabel}
              </h3>
              <p className="text-sm text-muted-foreground">
                {selectedSource.citation}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {selectedSource.annotation}
            </p>
            {selectedSource.url && (
              <p className="text-sm">
                <a
                  href={selectedSource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="break-words text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                >
                  {selectedSource.url}
                </a>
              </p>
            )}
            <button
              type="button"
              onClick={() => setSelectedSourceId(null)}
              className="absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close source dialog"
            >
              <X className="size-4" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
