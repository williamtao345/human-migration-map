import type { Site } from "./types";

export const sites: Site[] = [
  {
    id: "toumai",
    name: "Toumaï (S. tchadensis)",
    location: "toroMenalla",
    year: -7000000,
    description:
      "A nearly complete cranium nicknamed Toumaï, discovered in 2001 at Toros-Menalla in the Djurab Desert of northern Chad and dated to about 7 million years ago. Its forward-positioned foramen magnum suggests habitual bipedality, making Sahelanthropus tchadensis a candidate for the earliest known hominin, sitting very close to the chimpanzee and human divergence. The find pushed the hominin lineage back by over a million years and extended its known geography far west of the East African Rift, where nearly all earlier discoveries had been concentrated.",
  },
  {
    id: "ardi",
    name: "Ardi (A. ramidus)",
    location: "aramis",
    year: -4400000,
    description:
      "The partial skeleton of Ardipithecus ramidus, nicknamed Ardi, recovered from Aramis in the Middle Awash region of Ethiopia and dated to about 4.4 million years ago. Formally described in 2009 after more than a decade of reconstruction, Ardi is considerably more complete than Lucy and predates her by over a million years. Her anatomy indicates an upright stance on the ground combined with a grasping big toe for climbing, suggesting that the last common ancestor of humans and chimpanzees was not chimp-like, as long assumed, but something quite different. The find reshaped the deep root of the hominin family tree.",
  },
  {
    id: "laetoli-footprints",
    name: "Laetoli Footprints",
    location: "laetoli",
    year: -3600000,
    description:
      "A 27-meter trail of fossilized hominin footprints preserved in volcanic ash at Laetoli, in northern Tanzania, and dated to about 3.6 million years ago. The prints, made by at least two Australopithecus afarensis individuals, record a clearly bipedal gait with a modern heel strike and arched foot, providing behavioral evidence of upright walking independent of the skeletal record. Laetoli remains the most direct proof that bipedalism was already fully established well before the emergence of the genus Homo or any substantial brain expansion.",
  },
  {
    id: "lucy",
    name: "Lucy (A. afarensis)",
    location: "hadar",
    year: -3240000,
    description:
      "A roughly 40% complete skeleton of Australopithecus afarensis discovered in 1974 at Hadar, in the Afar region of Ethiopia, and dated to about 3.24 million years ago. Lucy's anatomy showed that bipedal walking predated the enlargement of the brain: her pelvis and knee indicate upright locomotion, while her small braincase (around 380 to 500 cc, similar to a chimp's) and curved finger bones suggest she still climbed trees. A. afarensis also shows pronounced sexual dimorphism, with males roughly 50% larger than females. Lucy anchors the deep-time backdrop of the peopling story, long before the emergence of the Homo lineage.",
  },
  {
    id: "oh-7",
    name: "OH 7 (H. habilis)",
    location: "olduvai",
    year: -1750000,
    description:
      "The type specimen of Homo habilis (OH 7), discovered in 1960 at Olduvai Gorge in northern Tanzania and dated to about 1.75 million years ago. Homo habilis, meaning 'handy man,' is associated with the Oldowan stone tool industry and shows a brain size of roughly 600 to 750 cc, notably larger than that of the australopithecines that preceded it. Olduvai specimens mark the earliest widely accepted members of the genus Homo and anchor the transition from tree-adapted ancestors toward tool-using, larger-brained hominins that would eventually leave Africa with Homo erectus.",
  },
  {
    id: "java-man",
    name: "Java Man (H. erectus)",
    location: "sangiran",
    year: -1000000,
    description:
      "Fossils of Homo erectus from Java, Indonesia, first discovered by Eugène Dubois at Trinil in 1891-1892. They were the earliest known remains of an extinct human relative to be found far beyond Africa. Additional specimens from Sangiran and nearby sites place H. erectus in Southeast Asia by around 1 Mya. H. erectus was the first hominin to migrate out of Africa (around 1.8 Mya), reaching India, China, and Java; in East Asia it was the only hominin present until anatomically modern humans arrived roughly 40 kya. It had a near-modern body size, a brain of around 775 to 1,100 cc, prominent brow ridges, and made use of fire and organized hunting.",
  },
  {
    id: "denisova-3",
    name: "Denisova 3",
    location: "denisovaCave",
    year: -52000,
    description:
      "A juvenile finger bone recovered in 2008 from Denisova Cave in the Altai Mountains of southern Siberia and dated to roughly 52,000 years ago. Genome sequencing in 2010 revealed that it belonged to a previously unknown archaic human population, now called Denisovans, a sister group to Neanderthals that diverged from them about 200,000 to 400,000 years ago. Physical remains are limited to a finger bone, a few teeth, and a jaw fragment, yet Denisovans contribute roughly 3 to 6% of the genome of present-day Melanesians, and their introgressed EPAS1 allele underpins high-altitude adaptation in modern Tibetans.",
  },
  {
    id: "ust-ishim",
    name: "Ust'-Ishim",
    location: "ustIshim",
    year: -45000,
    description:
      "A femur recovered from a riverbank near the town of Ust'-Ishim in western Siberia, dated to about 45,000 years ago. Its high-quality genome is one of the earliest available from any modern human outside Africa and shows roughly equal genetic affinity to present-day Western Eurasians, East Asians, and Aboriginal Australians. That pattern places Ust'-Ishim close to the out-of-Africa expansion but before the major divergence between East Asians and West Eurasians, giving researchers a key calibration point for the tempo of later population splits.",
  },
  {
    id: "neanderthal-1",
    name: "Neanderthal 1",
    location: "neanderValley",
    year: -40000,
    description:
      "The original Neanderthal fossil, a partial skeleton recovered in 1856 from the Kleine Feldhofer Grotte in the Neander Valley near Düsseldorf, Germany. The find became the type specimen of Homo neanderthalensis, the first recognized archaic human species. Neanderthals inhabited Europe and western Asia from roughly 400,000 to 40,000 years ago, with brains as large as or larger than those of modern humans. Genetic evidence shows interbreeding with modern humans around 50,000 to 65,000 years ago in the Middle East, leaving about 2% Neanderthal ancestry in all present-day non-African populations.",
  },
  {
    id: "tianyuan-man",
    name: "Tianyuan Man",
    location: "zhoukoudian",
    year: -40000,
    description:
      "A roughly 40,000-year-old anatomically modern human from Tianyuan Cave near Zhoukoudian, outside Beijing, and one of the earliest known modern humans in East Asia. Genome sequencing showed that Tianyuan Man belongs to a lineage that branched off after the out-of-Africa split but before the divergence of East Asians and Europeans, making him ancestral to many present-day Asians and Native Americans but not to Europeans. His genome also carries a faint Australasian-related signal, echoing the mysterious 'Population Y' ancestry later detected in some Amazonian groups, and underscoring how genetically diverse ancient Asia was compared with today.",
  },
  {
    id: "yana-rhs",
    name: "Yana RHS",
    location: "yanaRhs",
    year: -31600,
    description:
      "A roughly 31,600-year-old site on the Yana River in the Siberian Arctic, far above the Arctic Circle, where milk teeth from two unrelated boys were recovered. Their genomes define the Ancient North Siberians, a lineage that diverged from other Eurasians and later contributed to Native American ancestry through admixture with an East Asian lineage. Population genetic estimates suggest a breeding population of around 500 individuals, and unlike Neanderthals, Ancient North Siberians thrived in extreme Arctic conditions. Together with Mal'ta, Yana anchors the northern half of the two source branches that converged to produce the First Peoples of the Americas.",
  },
  {
    id: "malta-boy",
    name: "Mal'ta Boy (MA-1)",
    location: "maltaBaikal",
    year: -24000,
    description:
      "The remains of a roughly 24,000-year-old Upper Paleolithic child excavated near the village of Mal'ta, on the Belaya River northwest of Lake Baikal in south-central Siberia. Sequencing of MA-1's genome revealed the existence of Ancient North Eurasians (ANE), a population deeply related to both West Eurasians and Native Americans. The finding reshaped models of the peopling of the Americas by showing that Native American ancestry derives from admixture between an East Asian lineage and this ANE lineage, not East Asians alone.",
  },
  {
    id: "monte-verde",
    name: "Monte Verde",
    location: "monteVerde",
    year: -14200,
    description:
      "A pre-Clovis archaeological site in southern Chile, radiocarbon dated to about 14,200 years ago. Its preserved wooden structures, hearths, and plant remains pushed accepted dates for humans in the Americas well beyond the Clovis horizon and effectively overturned the Clovis First model. Because the ice-free corridor through North America was not open until roughly 14 kya, Monte Verde also implies that the earliest peoples entered the continent via a Pacific coastal route rather than walking south through the continental interior.",
  },
  {
    id: "anzick-1",
    name: "Anzick-1",
    location: "anzick",
    year: -12600,
    description:
      "The roughly 12,600-year-old burial of a young boy from Wilsall, Montana, and the only known human skeleton directly associated with Clovis tools. Sequencing of the Anzick-1 genome showed that this Clovis-associated individual is directly ancestral to contemporary Native Americans, especially those in Central and South America, closing a long-running debate about whether Clovis people were ancestors of today's Indigenous populations or a dead-end migration.",
  },
  {
    id: "upward-sun-river",
    name: "Upward Sun River",
    location: "upwardSunRiver",
    year: -11500,
    description:
      "A roughly 11,500-year-old site in the Tanana River valley of interior Alaska, where the remains of two infants yielded genomes identifying a previously unknown population called the Ancient Beringians. Ancient Beringians split from the Ancestral Native American lineage roughly 22,000-18,000 years ago and persisted in the Beringian region without giving rise to any living descendants. Upward Sun River is the only direct evidence of this branch and shows that the First Peoples story was more structured than a single wave southward.",
  },
];
