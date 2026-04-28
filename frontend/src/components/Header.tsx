import AboutDialog from "./AboutDialog";

export default function Header() {
  return (
    <header className="h-12 flex items-center justify-between px-4 border-b bg-background/50 backdrop-blur-sm">
      <h1 className="text-lg font-semibold tracking-tight">
        Peopling the Planet
        <span className="hidden sm:inline text-muted-foreground font-normal">
          {" "}
          — An Interactive Map of Human Migration
        </span>
      </h1>
      <AboutDialog />
    </header>
  );
}
