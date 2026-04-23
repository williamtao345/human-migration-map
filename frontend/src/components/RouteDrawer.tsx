import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import type { MigrationRoute } from "@/data/types";
import { formatYear } from "@/lib/timeline";

export default function RouteDrawer({
  route,
  onClose,
}: {
  route: MigrationRoute | null;
  onClose: () => void;
}) {
  return (
    <Drawer
      direction="right"
      open={route !== null}
      onOpenChange={(o) => !o && onClose()}
    >
      <DrawerContent className="p-4 gap-4">
        {route && (
          <>
            <DrawerHeader className="p-0 mt-2">
              <DrawerTitle>{route.name}</DrawerTitle>
              <DrawerDescription>
                {formatYear(route.startYear)} – {formatYear(route.endYear)}
              </DrawerDescription>
            </DrawerHeader>
            <p className="text-sm">{route.description}</p>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
