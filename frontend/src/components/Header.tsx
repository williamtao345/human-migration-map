import { Button } from "@/components/ui/button";
import SourcesDialog from "./SourcesDialog";

export default function Header() {
  return (
    <header className="flex min-h-12 items-center justify-between gap-3 border-b bg-background/70 px-4 py-2 backdrop-blur-sm">
      <h1 className="flex min-w-0 items-baseline gap-3 text-base font-semibold tracking-tight sm:text-lg">
        <span className="truncate">Peopling the Planet</span>
        <span
          aria-hidden
          className="hidden sm:block h-4 w-px shrink-0 self-center bg-border"
        />
        <span className="hidden truncate font-normal text-muted-foreground sm:inline">
          An Interactive Map of Human Migration
        </span>
      </h1>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          render={
            <a
              href="https://github.com/williamtao345/human-migration-map"
              target="_blank"
              rel="noreferrer"
              aria-label="View source on GitHub"
              title="View source on GitHub"
            />
          }
        >
          <img
            src={`${import.meta.env.BASE_URL}github.svg`}
            alt=""
            className="size-4"
          />
        </Button>
        <SourcesDialog />
      </div>
    </header>
  );
}
