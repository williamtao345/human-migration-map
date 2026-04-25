import type { Site } from "./types";

export const sites: Site[] = [
  {
    id: "toumai",
    name: "Toumaï (S. tchadensis)",
    location: "toroMenalla",
    year: -7000000,
    description:
      "A nearly complete cranium nicknamed Toumaï, discovered in 2001 at Toros-Menalla in the Djurab Desert of northern Chad and dated to about 7 million years ago. Its forward-positioned foramen magnum suggests habitual bipedality, making Sahelanthropus tchadensis a candidate for the earliest known hominin, sitting very close to the chimpanzee and human divergence. The find pushed the hominin lineage back by over a million years and extended its known geography far west of the East African Rift, where nearly all earlier discoveries had been concentrated.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Sahelanthropus_tchadensis_-_TM_266-01-060-1.jpg",
      alt: "Cast of the Toumaï holotype cranium (TM 266-01-060-1)",
      credit: "Didier Descouens · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Sahelanthropus_tchadensis_-_TM_266-01-060-1.jpg",
    },
  },
  {
    id: "ardi",
    name: "Ardi (A. ramidus)",
    location: "aramis",
    year: -4400000,
    description:
      "The partial skeleton of Ardipithecus ramidus, nicknamed Ardi, recovered from Aramis in the Middle Awash region of Ethiopia and dated to about 4.4 million years ago. Formally described in 2009 after more than a decade of reconstruction, Ardi is considerably more complete than Lucy and predates her by over a million years. Her anatomy indicates an upright stance on the ground combined with a grasping big toe for climbing, suggesting that the last common ancestor of humans and chimpanzees was not chimp-like, as long assumed, but something quite different. The find reshaped the deep root of the hominin family tree.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Ardipithecus_ramidus_Ardi_IMG_5604_BMNH.jpg",
      alt: "Reconstructed cast of the Ardi skeleton",
      credit: "Bjoertvedt · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Ardipithecus_ramidus_Ardi_IMG_5604_BMNH.jpg",
    },
  },
  {
    id: "laetoli-footprints",
    name: "Laetoli Footprints",
    location: "laetoli",
    year: -3600000,
    description:
      "A 27-meter trail of fossilized hominin footprints preserved in volcanic ash at Laetoli, in northern Tanzania, and dated to about 3.6 million years ago. The prints, made by at least two Australopithecus afarensis individuals, record a clearly bipedal gait with a modern heel strike and arched foot, providing behavioral evidence of upright walking independent of the skeletal record. Laetoli remains the most direct proof that bipedalism was already fully established well before the emergence of the genus Homo or any substantial brain expansion.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Australopithecus_afarensis_footprint.jpg",
      alt: "Cast of the Laetoli hominin footprints",
      credit: "Tim Evanson · CC BY-SA 2.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Australopithecus_afarensis_footprint.jpg",
    },
  },
  {
    id: "lucy",
    name: "Lucy (A. afarensis)",
    location: "hadar",
    year: -3240000,
    description:
      "A roughly 40% complete skeleton of Australopithecus afarensis discovered in 1974 at Hadar, in the Afar region of Ethiopia, and dated to about 3.24 million years ago. Lucy's anatomy showed that bipedal walking predated the enlargement of the brain: her pelvis and knee indicate upright locomotion, while her small braincase (around 380 to 500 cc, similar to a chimp's) and curved finger bones suggest she still climbed trees. A. afarensis also shows pronounced sexual dimorphism, with males roughly 50% larger than females. Lucy anchors the deep-time backdrop of the peopling story, long before the emergence of the Homo lineage.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Reconstruction_of_the_fossil_skeleton_of_%22Lucy%22_the_Australopithecus_afarensis.jpg",
      alt: "Reconstructed cast of Lucy (AL 288-1)",
      credit: "Wikimedia user '120' · CC BY-SA 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Reconstruction_of_the_fossil_skeleton_of_%22Lucy%22_the_Australopithecus_afarensis.jpg",
    },
  },
  {
    id: "oh-7",
    name: "OH 7 (H. habilis)",
    location: "olduvai",
    year: -1750000,
    description:
      "The type specimen of Homo habilis (OH 7), discovered in 1960 at Olduvai Gorge in northern Tanzania and dated to about 1.75 million years ago. Homo habilis, meaning 'handy man,' is associated with the Oldowan stone tool industry and shows a brain size of roughly 600 to 750 cc, notably larger than that of the australopithecines that preceded it. Olduvai specimens mark the earliest widely accepted members of the genus Homo and anchor the transition from tree-adapted ancestors toward tool-using, larger-brained hominins that would eventually leave Africa with Homo erectus.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Homo_habilis_%28cast%29%2C_Olduvai_Gorge_-_Springfield_Science_Museum_-_Springfield%2C_MA_-_DSC03370.JPG",
      alt: "Cast of Homo habilis material from Olduvai Gorge",
      credit: "Daderot · CC0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Homo_habilis_(cast),_Olduvai_Gorge_-_Springfield_Science_Museum_-_Springfield,_MA_-_DSC03370.JPG",
    },
  },
  {
    id: "java-man",
    name: "Java Man (H. erectus)",
    location: "sangiran",
    year: -1000000,
    description:
      "Fossils of Homo erectus from Java, Indonesia, first discovered by Eugène Dubois at Trinil in 1891-1892. They were the earliest known remains of an extinct human relative to be found far beyond Africa. Additional specimens from Sangiran and nearby sites place H. erectus in Southeast Asia by around 1 Mya. H. erectus was the first hominin to migrate out of Africa (around 1.8 Mya), reaching India, China, and Java; in East Asia it was the only hominin present until anatomically modern humans arrived roughly 40 kya. It had a near-modern body size, a brain of around 775 to 1,100 cc, prominent brow ridges, and made use of fire and organized hunting.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Homo_erectus_Java_man_skull.jpg",
      alt: "Cast of the Java Man skull",
      credit: "Netha Hussain · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Homo_erectus_Java_man_skull.jpg",
    },
  },
  {
    id: "denisova-3",
    name: "Denisova 3",
    location: "denisovaCave",
    year: -52000,
    description:
      "A juvenile finger bone recovered in 2008 from Denisova Cave in the Altai Mountains of southern Siberia and dated to roughly 52,000 years ago. Genome sequencing in 2010 revealed that it belonged to a previously unknown archaic human population, now called Denisovans, a sister group to Neanderthals that diverged from them about 200,000 to 400,000 years ago. Physical remains are limited to a finger bone, a few teeth, and a jaw fragment, yet Denisovans contribute roughly 3 to 6% of the genome of present-day Melanesians, and their introgressed EPAS1 allele underpins high-altitude adaptation in modern Tibetans.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/94/%D0%9D%D0%BE%D0%B7%D0%B4%D1%80%D0%B8_%D0%94%D0%B5%D0%BD%D0%B8%D1%81%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D1%8B.JPG",
      alt: "Twin entrances of Denisova Cave in the Altai Mountains",
      credit: "Cheburgenator · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%D0%9D%D0%BE%D0%B7%D0%B4%D1%80%D0%B8_%D0%94%D0%B5%D0%BD%D0%B8%D1%81%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D1%8B.JPG",
    },
  },
  {
    id: "ust-ishim",
    name: "Ust'-Ishim",
    location: "ustIshim",
    year: -45000,
    description:
      "A femur recovered from a riverbank near the town of Ust'-Ishim in western Siberia, dated to about 45,000 years ago. Its high-quality genome is one of the earliest available from any modern human outside Africa and shows roughly equal genetic affinity to present-day Western Eurasians, East Asians, and Aboriginal Australians. That pattern places Ust'-Ishim close to the out-of-Africa expansion but before the major divergence between East Asians and West Eurasians, giving researchers a key calibration point for the tempo of later population splits.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Femur_ust-ishim_2.jpg",
      alt: "The Ust'-Ishim femur specimen",
      credit: "CRamosAcosta · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Femur_ust-ishim_2.jpg",
    },
  },
  {
    id: "neanderthal-1",
    name: "Neanderthal 1",
    location: "neanderValley",
    year: -40000,
    description:
      "The original Neanderthal fossil, a partial skeleton recovered in 1856 from the Kleine Feldhofer Grotte in the Neander Valley near Düsseldorf, Germany. The find became the type specimen of Homo neanderthalensis, the first recognized archaic human species. Neanderthals inhabited Europe and western Asia from roughly 400,000 to 40,000 years ago, with brains as large as or larger than those of modern humans. Genetic evidence shows interbreeding with modern humans around 50,000 to 65,000 years ago in the Middle East, leaving about 2% Neanderthal ancestry in all present-day non-African populations.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Homo_neanderthalensis_%28cast_of_Neanderthal_1_skullcap%29_at_G%C3%B6teborgs_Naturhistoriska_Museum_8790.jpg",
      alt: "Cast of the Neanderthal 1 skullcap (Feldhofer 1)",
      credit: "Gunnar Creutz · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Homo_neanderthalensis_(cast_of_Neanderthal_1_skullcap)_at_G%C3%B6teborgs_Naturhistoriska_Museum_8790.jpg",
    },
  },
  {
    id: "tianyuan-man",
    name: "Tianyuan Man",
    location: "zhoukoudian",
    year: -40000,
    description:
      "A roughly 40,000-year-old anatomically modern human from Tianyuan Cave near Zhoukoudian, outside Beijing, and one of the earliest known modern humans in East Asia. Genome sequencing showed that Tianyuan Man belongs to a lineage that branched off after the out-of-Africa split but before the divergence of East Asians and Europeans, making him ancestral to many present-day Asians and Native Americans but not to Europeans. His genome also carries a faint Australasian-related signal, echoing the mysterious 'Population Y' ancestry later detected in some Amazonian groups, and underscoring how genetically diverse ancient Asia was compared with today.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Schematic_of_Populations_in_Eurasia_from_45_to_10_kaBP_%28migration_routes%29.png",
      alt: "Schematic of Eurasian populations 45–10 kaBP, showing Tianyuan within the Ancient East Asian / ESEA lineage and gene flow into ANS/ANE and Australasians",
      credit: "Wikiuser1314 · CC BY 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Schematic_of_Populations_in_Eurasia_from_45_to_10_kaBP_(migration_routes).png",
    },
  },
  {
    id: "yana-rhs",
    name: "Yana RHS",
    location: "yanaRhs",
    year: -31600,
    description:
      "A roughly 31,600-year-old site on the Yana River in the Siberian Arctic, far above the Arctic Circle, where milk teeth from two unrelated boys were recovered. Their genomes define the Ancient North Siberians, a lineage that diverged from other Eurasians and later contributed to Native American ancestry through admixture with an East Asian lineage. Population genetic estimates suggest a breeding population of around 500 individuals, and unlike Neanderthals, Ancient North Siberians thrived in extreme Arctic conditions. Together with Mal'ta, Yana anchors the northern half of the two source branches that converged to produce the First Peoples of the Americas.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Yana_RHS_site_location.jpg",
      alt: "Aerial view of the Yana RHS site location",
      credit: "Pitulko & Pavlova (2022) · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Yana_RHS_site_location.jpg",
    },
  },
  {
    id: "malta-boy",
    name: "Mal'ta Boy (MA-1)",
    location: "maltaBaikal",
    year: -24000,
    description:
      "The remains of a roughly 24,000-year-old Upper Paleolithic child excavated near the village of Mal'ta, on the Belaya River northwest of Lake Baikal in south-central Siberia. Sequencing of MA-1's genome revealed the existence of Ancient North Eurasians (ANE), a population deeply related to both West Eurasians and Native Americans. The finding reshaped models of the peopling of the Americas by showing that Native American ancestry derives from admixture between an East Asian lineage and this ANE lineage, not East Asians alone.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Mal%27ta_boy_%28MA-1%29_with_tomb_artifacts%2C_Hermitage_Museum%2C_Saint-Petersburg.jpg",
      alt: "Mal'ta Boy (MA-1) skeleton with grave goods at the Hermitage",
      credit: "eXploration Etoile · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Mal%27ta_boy_(MA-1)_with_tomb_artifacts,_Hermitage_Museum,_Saint-Petersburg.jpg",
    },
  },
  {
    id: "monte-verde",
    name: "Monte Verde",
    location: "monteVerde",
    year: -14200,
    description:
      "A pre-Clovis archaeological site in southern Chile, radiocarbon dated to about 14,200 years ago. Its preserved wooden structures, hearths, and plant remains pushed accepted dates for humans in the Americas well beyond the Clovis horizon and effectively overturned the Clovis First model. Because the ice-free corridor through North America was not open until roughly 14 kya, Monte Verde also implies that the earliest peoples entered the continent via a Pacific coastal route rather than walking south through the continental interior.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Monte_Verde_3.JPG",
      alt: "The Monte Verde archaeological site in southern Chile",
      credit: "Rodolfo Ditzel Lacoa · CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Monte_Verde_3.JPG",
    },
  },
  {
    id: "anzick-1",
    name: "Anzick-1",
    location: "anzick",
    year: -12600,
    description:
      "The roughly 12,600-year-old burial of a young boy from Wilsall, Montana, and the only known human skeleton directly associated with Clovis tools. Sequencing of the Anzick-1 genome showed that this Clovis-associated individual is directly ancestral to contemporary Native Americans, especially those in Central and South America, closing a long-running debate about whether Clovis people were ancestors of today's Indigenous populations or a dead-end migration.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/29/The_Anzick_Site_%28registered_as_24PA506%29_at_abount_the_elevation_of_the_bottom_of_the_hillside_below_the_arrow%2C_is_the_only_known_Clovis_burial_site_in_North_America.jpg",
      alt: "Hillside above the Anzick Clovis burial site in Montana",
      credit: "Ronald L. Shimek · CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:The_Anzick_Site_(registered_as_24PA506)_at_abount_the_elevation_of_the_bottom_of_the_hillside_below_the_arrow,_is_the_only_known_Clovis_burial_site_in_North_America.jpg",
    },
  },
  {
    id: "upward-sun-river",
    name: "Upward Sun River",
    location: "upwardSunRiver",
    year: -11500,
    description:
      "A roughly 11,500-year-old site in the Tanana River valley of interior Alaska, where the remains of two infants yielded genomes identifying a previously unknown population called the Ancient Beringians. Ancient Beringians split from the Ancestral Native American lineage roughly 22,000-18,000 years ago and persisted in the Beringian region without giving rise to any living descendants. Upward Sun River is the only direct evidence of this branch and shows that the First Peoples story was more structured than a single wave southward.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Upward_Sun_River_Site_%2827633483483%29.jpg",
      alt: "The Upward Sun River archaeological site in interior Alaska",
      credit: "USDA Forest Service · public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Upward_Sun_River_Site_(27633483483).jpg",
    },
  },
];
