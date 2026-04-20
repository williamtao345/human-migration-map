import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import type { MigrationEvent } from "@/data/types";
import { formatYear } from "@/lib/timeline";

export default function EventDrawer({
  event,
  onClose,
}: {
  event: MigrationEvent | null;
  onClose: () => void;
}) {
  return (
    <Drawer
      direction="right"
      open={event !== null}
      onOpenChange={(o) => !o && onClose()}
    >
      <DrawerContent>
        {event && (
          <>
            <DrawerHeader>
              <DrawerTitle>{event.name}</DrawerTitle>
              <DrawerDescription>{formatYear(event.year)}</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-sm leading-relaxed">{event.description}</p>
            </div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
