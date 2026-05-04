import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { sourceList, sourceTopics } from "@/data/sources";
import { BookMarked } from "lucide-react";

export default function SourcesDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="default">
            <BookMarked data-icon="inline-start" />
            Sources
          </Button>
        }
      />
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Annotated bibliography</DialogTitle>
          <DialogDescription>
            Sources for <em>Peopling the Planet: An Interactive Map of Human
            Migration</em>.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[60vh] overflow-y-auto px-4">
          <div className="space-y-7">
            {sourceTopics.map((topic) => {
              const entries = sourceList.filter((source) => source.topic === topic);

              if (entries.length === 0) return null;

              return (
                <section key={topic}>
                  <h3 className="mb-3 text-sm font-semibold tracking-tight">
                    {topic}
                  </h3>
                  <ol className="space-y-5 list-decimal list-outside pl-5">
                    {entries.map((entry) => (
                      <li key={entry.id} className="text-sm leading-relaxed">
                        <p className="mb-2">
                          {entry.citation}
                          {entry.url && (
                            <>
                              {" "}
                              <a
                                href={entry.url}
                                target="_blank"
                                rel="noreferrer"
                                className="break-words underline-offset-2 hover:underline"
                              >
                                {entry.url}
                              </a>
                            </>
                          )}
                        </p>
                        <p className="text-muted-foreground">
                          {entry.annotation}
                        </p>
                      </li>
                    ))}
                  </ol>
                </section>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
