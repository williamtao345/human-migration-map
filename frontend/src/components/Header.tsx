import AboutDialog from "./AboutDialog";

export default function Header() {
  return (
    <header className="flex min-h-12 items-center justify-between gap-3 border-b bg-background/70 px-4 py-2 backdrop-blur-sm">
      <h1 className="min-w-0 text-base font-semibold tracking-tight sm:text-lg">
        <span className="block truncate sm:inline">Peopling the Planet</span>
        <span className="hidden sm:inline text-muted-foreground font-normal">
          {" "}
          — An Interactive Map of Human Migration
        </span>
      </h1>
      <AboutDialog />
    </header>
  );
}
