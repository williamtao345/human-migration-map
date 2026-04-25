import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import type { MigrationRoute, Site } from "@/data/types";
import { formatYear } from "@/lib/formatYear";

export type DrawerSelection =
  | { kind: "route"; data: MigrationRoute }
  | { kind: "site"; data: Site };

export default function RouteDrawer({
  selection,
  onClose,
}: {
  selection: DrawerSelection | null;
  onClose: () => void;
}) {
  const title = selection?.data.name ?? "";
  const subtitle =
    selection?.kind === "route"
      ? `${formatYear(selection.data.startYear)} – ${formatYear(selection.data.endYear)}`
      : selection?.kind === "site"
        ? `Notable finding · ${formatYear(selection.data.year)}`
        : "";
  const description = selection?.data.description ?? "";

  return (
    <Drawer
      direction="right"
      open={selection !== null}
      onOpenChange={(o) => !o && onClose()}
    >
      <DrawerContent className="p-4 gap-4">
        {selection && (
          <>
            <DrawerHeader className="p-0 mt-2">
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>{subtitle}</DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <p className="text-sm">{description}</p>
            </div>
            {selection.kind === "site" && selection.data.image && (
              <figure className="m-0">
                <img
                  src={selection.data.image.src}
                  alt={selection.data.image.alt}
                  loading="lazy"
                  className="block w-full max-h-72 rounded-md object-contain"
                />
                <figcaption className="mt-1.5 text-right text-xs text-muted-foreground">
                  <a
                    href={selection.data.image.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-2 hover:underline hover:text-foreground"
                  >
                    {selection.data.image.credit}
                  </a>
                </figcaption>
              </figure>
            )}
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
