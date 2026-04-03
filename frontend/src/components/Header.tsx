export default function Header() {
  return (
    <header className="h-12 flex items-center justify-between px-4 border-b">
      <h1 className="text-lg font-semibold tracking-tight">
        Human Migration Map
      </h1>
      <button className="text-sm text-muted-foreground hover:text-foreground">
        About
      </button>
    </header>
  );
}
