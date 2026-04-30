import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookMarked } from "lucide-react";

type Entry = {
  citation: React.ReactNode;
  annotation: string;
};

const entries: Entry[] = [
  {
    citation: (
      <>
        Reich, D. (2018). <em>Who we are and how we got here: Ancient DNA and
        the new science of the human past</em>. Pantheon Books.
      </>
    ),
    annotation:
      "Reich is a Harvard geneticist whose lab produced much of the ancient-DNA data the book synthesizes, making it authoritative but self-referential. It is the narrative scaffold (most event pins on the map correspond to chapters), but because Reich argues forcefully for specific models like Yamnaya-driven language spread, contested claims are cross-checked against primary literature.",
  },
  {
    citation: (
      <>
        Nielsen, R., et al. (2017). Tracing the peopling of the world through
        genomics. <em>Nature, 541</em>(7637), 302–310.{" "}
        <a
          href="https://doi.org/10.1038/nature21347"
          target="_blank"
          rel="noreferrer"
        >
          https://doi.org/10.1038/nature21347
        </a>
      </>
    ),
    annotation:
      "A peer-reviewed Nature review by six leading population geneticists. Used as the consensus-estimate tiebreaker for numbers that appear on the map (e.g., ~2% Neanderthal ancestry in non-Africans, Out-of-Africa timing) because it explicitly flags where studies agree and where they don't. Its main limitation is its age (~9 years old), so newer regional studies supplement revised dates.",
  },
  {
    citation: (
      <>
        Malaspinas, A.-S., et al. (2016). A genomic history of Aboriginal
        Australia. <em>Nature, 538</em>(7624), 207–214.{" "}
        <a
          href="https://doi.org/10.1038/nature18299"
          target="_blank"
          rel="noreferrer"
        >
          https://doi.org/10.1038/nature18299
        </a>
      </>
    ),
    annotation:
      "Primary source for the Sahul event: 83 Aboriginal Australian and 25 Papuan genomes support a single founding dispersal ~50 kya followed by long isolation. Justifies drawing Sahul as a single arc rather than multiple waves. Notably, it is explicit about Indigenous community consultation and co-authorship, a standard not universal in ancient-DNA work.",
  },
  {
    citation: (
      <>
        Raghavan, M., et al. (2015). Genomic evidence for the Pleistocene and
        recent population history of Native Americans. <em>Science, 349</em>
        (6250), aab3884.{" "}
        <a
          href="https://doi.org/10.1126/science.aab3884"
          target="_blank"
          rel="noreferrer"
        >
          https://doi.org/10.1126/science.aab3884
        </a>
      </>
    ),
    annotation:
      "Source for the Beringia and Americas events. Argues for a single founding population diverging from East Asians ~23 kya with a Beringian standstill before southward expansion. It also reports a contested Australasian signal in some Amazonian populations, which is deliberately omitted from this draft to avoid overweighting an unresolved finding.",
  },
  {
    citation: (
      <>
        Huerta-Sánchez, E., et al. (2014). Altitude adaptation in Tibetans
        caused by introgression of Denisovan-like DNA. <em>Nature, 512</em>
        (7513), 194–197.{" "}
        <a
          href="https://doi.org/10.1038/nature13408"
          target="_blank"
          rel="noreferrer"
        >
          https://doi.org/10.1038/nature13408
        </a>
      </>
    ),
    annotation:
      "Source for the EPAS1 claim: the haplotype letting Tibetans function at high altitude was inherited from Denisovans. The primary paper is cited rather than Reich's secondhand account so the specific mechanism (one gene, one haplotype, one phenotype) is accurate. The project's cleanest illustration that archaic admixture has concrete, living consequences.",
  },
  {
    citation: (
      <>
        Kirch, P. V. (2017). <em>On the road of the winds: An archaeological
        history of the Pacific Islands before European contact</em> (Rev. and
        expanded ed.). University of California Press.
      </>
    ),
    annotation:
      "The standard reference for Pacific archaeology and the anchor for the Austronesian and Polynesian routes. Pacific genetics moves fast, but the archaeological chronology (Lapita pottery, the Samoa → Society Islands → Marquesas settlement sequence) is best established here. Newer radiocarbon work is cross-referenced where specific dates matter.",
  },
  {
    citation: (
      <>
        Ioannidis, A. G., et al. (2020). Native American gene flow into
        Polynesia predating Easter Island settlement. <em>Nature, 583</em>
        (7817), 572–577.{" "}
        <a
          href="https://doi.org/10.1038/s41586-020-2487-2"
          target="_blank"
          rel="noreferrer"
        >
          https://doi.org/10.1038/s41586-020-2487-2
        </a>
      </>
    ),
    annotation:
      "Source for the Polynesia event's contact claim: Polynesians and Native Americans exchanged genes around 1200 CE, before European contact. Used carefully because pre-Columbian trans-Pacific contact has a long history of pseudoscientific abuse (Heyerdahl, diffusionism); the event text sticks to the specific genetic signal, not the romantic claim.",
  },
];

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
          <ol className="space-y-5 list-decimal list-outside pl-5">
            {entries.map((entry, i) => (
              <li key={i} className="text-sm leading-relaxed">
                <p className="mb-2">{entry.citation}</p>
                <p className="text-muted-foreground">{entry.annotation}</p>
              </li>
            ))}
          </ol>
        </div>
      </DialogContent>
    </Dialog>
  );
}
