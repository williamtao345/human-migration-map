import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import type { MigrationRoute, Site } from "@/data/types";
import { formatYear } from "@/lib/timeline";

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
            <p className="text-sm">{description}</p>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
