export const sourceTopics = [
  "Project synthesis",
  "Early hominins",
  "Archaic humans and early Eurasia",
  "Europe",
  "Americas",
  "Arctic",
  "Agriculture and Mesoamerica",
  "Pacific",
] as const;

export type SourceTopic = (typeof sourceTopics)[number];

export type Source = {
  shortLabel: string;
  citation: string;
  url?: string;
  annotation: string;
  topic: SourceTopic;
};

const sourceRecords = {
  "reich-2018": {
    shortLabel: "Reich 2018",
    citation:
      "Reich, D. (2018). Who We Are and How We Got Here: Ancient DNA and the New Science of the Human Past. Pantheon Books.",
    annotation:
      "Narrative scaffold for the project and a broad synthesis of ancient-DNA evidence. Used for high-level framing, with primary literature preferred for specific site and route claims.",
    topic: "Project synthesis",
  },
  "nielsen-2017": {
    shortLabel: "Nielsen et al. 2017",
    citation:
      "Nielsen, R., et al. (2017). Tracing the peopling of the world through genomics. Nature, 541(7637), 302-310.",
    url: "https://doi.org/10.1038/nature21347",
    annotation:
      "Consensus genomic review for the broad peopling model, including Out-of-Africa timing, archaic admixture, and global population-structure claims.",
    topic: "Project synthesis",
  },
  "wood-harrison-2011": {
    shortLabel: "Wood & Harrison 2011",
    citation:
      "Wood, B., & Harrison, T. (2011). The evolutionary context of the first hominins. Nature, 470(7334), 347-352.",
    url: "https://doi.org/10.1038/nature09709",
    annotation:
      "Synthesis for early hominin evolution, useful for contextualizing Toumai, Ardi, Laetoli, Lucy, and early Homo without overloading each marker with specialist detail.",
    topic: "Early hominins",
  },
  "brunet-2002": {
    shortLabel: "Brunet et al. 2002",
    citation:
      "Brunet, M., et al. (2002). A new hominid from the Upper Miocene of Chad, Central Africa. Nature, 418(6894), 145-151.",
    url: "https://doi.org/10.1038/nature00879",
    annotation:
      "Original description of Sahelanthropus tchadensis from Chad, the source for the Toumai marker and its approximate seven-million-year age.",
    topic: "Early hominins",
  },
  "white-2009": {
    shortLabel: "White et al. 2009",
    citation:
      "White, T. D., et al. (2009). Ardipithecus ramidus and the paleobiology of early hominids. Science, 326(5949), 64-86.",
    url: "https://doi.org/10.1126/science.1175802",
    annotation:
      "Primary synthesis of Ardipithecus ramidus anatomy and paleoecology, supporting the Ardi marker and its implications for early bipedality.",
    topic: "Early hominins",
  },
  "leakey-hay-1979": {
    shortLabel: "Leakey & Hay 1979",
    citation:
      "Leakey, M. D., & Hay, R. L. (1979). Pliocene footprints in the Laetolil Beds at Laetoli, northern Tanzania. Nature, 278, 317-323.",
    url: "https://doi.org/10.1038/278317a0",
    annotation:
      "Original report of the Laetoli footprint trail, used for the direct behavioral evidence of early hominin bipedality.",
    topic: "Early hominins",
  },
  "johanson-taieb-1976": {
    shortLabel: "Johanson & Taieb 1976",
    citation:
      "Johanson, D. C., & Taieb, M. (1976). Plio-Pleistocene hominid discoveries in Hadar, Ethiopia. Nature, 260(5549), 293-297.",
    url: "https://doi.org/10.1038/260293a0",
    annotation:
      "Early report on the Hadar discoveries, supporting the Lucy marker and its A. afarensis context.",
    topic: "Early hominins",
  },
  "leakey-tobias-napier-1964": {
    shortLabel: "Leakey et al. 1964",
    citation:
      "Leakey, L. S. B., Tobias, P. V., & Napier, J. R. (1964). A new species of the genus Homo from Olduvai Gorge. Nature, 202, 7-9.",
    url: "https://doi.org/10.1038/202007a0",
    annotation:
      "Original description of Homo habilis from Olduvai Gorge, the cleanest citation for the OH 7 marker.",
    topic: "Early hominins",
  },
  "anton-2003": {
    shortLabel: "Anton 2003",
    citation:
      "Anton, S. C. (2003). Natural history of Homo erectus. American Journal of Physical Anthropology, Suppl. 37, 126-170.",
    url: "https://doi.org/10.1002/ajpa.10399",
    annotation:
      "Review of Homo erectus distribution, anatomy, and evolutionary context, supporting the Java Man marker's broader H. erectus claims.",
    topic: "Early hominins",
  },
  "malaspinas-2016": {
    shortLabel: "Malaspinas et al. 2016",
    citation:
      "Malaspinas, A.-S., et al. (2016). A genomic history of Aboriginal Australia. Nature, 538(7624), 207-214.",
    url: "https://doi.org/10.1038/nature18299",
    annotation:
      "Primary genomic source for the Sahul event, supporting an early founding dispersal and long-term isolation of Aboriginal Australian and Papuan lineages.",
    topic: "Archaic humans and early Eurasia",
  },
  "huerta-sanchez-2014": {
    shortLabel: "Huerta-Sanchez et al. 2014",
    citation:
      "Huerta-Sanchez, E., et al. (2014). Altitude adaptation in Tibetans caused by introgression of Denisovan-like DNA. Nature, 512(7513), 194-197.",
    url: "https://doi.org/10.1038/nature13408",
    annotation:
      "Primary source for the EPAS1 Denisovan-introgression claim used in the Denisova marker.",
    topic: "Archaic humans and early Eurasia",
  },
  "fu-2014": {
    shortLabel: "Fu et al. 2014",
    citation:
      "Fu, Q., et al. (2014). Genome sequence of a 45,000-year-old modern human from western Siberia. Nature, 514(7523), 445-449.",
    url: "https://doi.org/10.1038/nature13810",
    annotation:
      "High-coverage Ust'-Ishim genome, used for early non-African population structure and Neanderthal-admixture timing.",
    topic: "Archaic humans and early Eurasia",
  },
  "yang-2017": {
    shortLabel: "Yang et al. 2017",
    citation:
      "Yang, M. A., et al. (2017). 40,000-year-old individual from Asia provides insight into early population structure in Eurasia. Current Biology, 27(20), 3202-3208.e9.",
    url: "https://doi.org/10.1016/j.cub.2017.09.030",
    annotation:
      "Source for Tianyuan Man and early East Asian population structure, grounding the northward East Asia route.",
    topic: "Archaic humans and early Eurasia",
  },
  "sikora-2019": {
    shortLabel: "Sikora et al. 2019",
    citation:
      "Sikora, M., et al. (2019). The population history of northeastern Siberia since the Pleistocene. Nature, 570(7760), 182-188.",
    url: "https://doi.org/10.1038/s41586-019-1279-z",
    annotation:
      "Primary source for Ancient North Siberians at Yana RHS and their role in later Native American ancestry.",
    topic: "Archaic humans and early Eurasia",
  },
  "raghavan-2014-malta": {
    shortLabel: "Raghavan et al. 2014",
    citation:
      "Raghavan, M., et al. (2014). Upper Palaeolithic Siberian genome reveals dual ancestry of Native Americans. Nature, 505(7481), 87-91.",
    url: "https://doi.org/10.1038/nature12736",
    annotation:
      "Source for the Mal'ta MA-1 genome, Ancient North Eurasian ancestry, and its contribution to Native American ancestry.",
    topic: "Archaic humans and early Eurasia",
  },
  "lazaridis-2014": {
    shortLabel: "Lazaridis et al. 2014",
    citation:
      "Lazaridis, I., et al. (2014). Ancient human genomes suggest three ancestral populations for present-day Europeans. Nature, 513(7518), 409-413.",
    url: "https://doi.org/10.1038/nature13673",
    annotation:
      "Foundational ancient-DNA paper for Western Hunter-Gatherer, Early European Farmer, and Ancient North Eurasian components in Europe.",
    topic: "Europe",
  },
  "haak-2015": {
    shortLabel: "Haak et al. 2015",
    citation:
      "Haak, W., et al. (2015). Massive migration from the steppe was a source for Indo-European languages in Europe. Nature, 522(7555), 207-211.",
    url: "https://doi.org/10.1038/nature14317",
    annotation:
      "Primary source for major steppe ancestry movement into Europe and a key support for the Yamnaya route.",
    topic: "Europe",
  },
  "raghavan-2015-americas": {
    shortLabel: "Raghavan et al. 2015",
    citation:
      "Raghavan, M., et al. (2015). Genomic evidence for the Pleistocene and recent population history of Native Americans. Science, 349(6250), aab3884.",
    url: "https://doi.org/10.1126/science.aab3884",
    annotation:
      "Source for the Beringian and Native American founding-population model, including divergence and standstill estimates.",
    topic: "Americas",
  },
  "moreno-mayar-2018": {
    shortLabel: "Moreno-Mayar et al. 2018",
    citation:
      "Moreno-Mayar, J. V., et al. (2018). Terminal Pleistocene Alaskan genome reveals first founding population of Native Americans. Nature, 553(7687), 203-207.",
    url: "https://doi.org/10.1038/nature25173",
    annotation:
      "Primary source for the Upward Sun River genome, Ancient Beringians, and early branching within Native American ancestry.",
    topic: "Americas",
  },
  "rasmussen-2014-anzick": {
    shortLabel: "Rasmussen et al. 2014",
    citation:
      "Rasmussen, M., et al. (2014). The genome of a Late Pleistocene human from a Clovis burial site in western Montana. Nature, 506(7487), 225-229.",
    url: "https://doi.org/10.1038/nature13025",
    annotation:
      "Primary source for Anzick-1 and the relationship between Clovis-associated remains and later Native American populations.",
    topic: "Americas",
  },
  "rasmussen-2015-kennewick": {
    shortLabel: "Rasmussen et al. 2015",
    citation:
      "Rasmussen, M., et al. (2015). The ancestry and affiliations of Kennewick Man. Nature, 523(7561), 455-458.",
    url: "https://doi.org/10.1038/nature14625",
    annotation:
      "Primary source for the Kennewick Man genome and its close relationship to contemporary Native American groups.",
    topic: "Americas",
  },
  "dillehay-2008": {
    shortLabel: "Dillehay et al. 2008",
    citation:
      "Dillehay, T. D., et al. (2008). Monte Verde: Seaweed, Food, Medicine, and the Peopling of South America. Science, 320(5877), 784-786.",
    url: "https://doi.org/10.1126/science.1156533",
    annotation:
      "Supports Monte Verde's pre-Clovis age and its importance for early South American settlement.",
    topic: "Americas",
  },
  "halligan-2016": {
    shortLabel: "Halligan et al. 2016",
    citation:
      "Halligan, J. J., et al. (2016). Pre-Clovis occupation 14,550 years ago at the Page-Ladson site, Florida, and the peopling of the Americas. Science Advances, 2(5), e1600375.",
    url: "https://doi.org/10.1126/sciadv.1600375",
    annotation:
      "Primary source for Page-Ladson and a key archaeological support for pre-Clovis occupation in eastern North America.",
    topic: "Americas",
  },
  "pedersen-2016": {
    shortLabel: "Pedersen et al. 2016",
    citation:
      "Pedersen, M. W., et al. (2016). Postglacial viability and colonization in North America's ice-free corridor. Nature, 537(7618), 45-49.",
    url: "https://doi.org/10.1038/nature19085",
    annotation:
      "Source for the late ecological viability of the ice-free corridor, supporting a coastal-first interpretation for earliest American settlement.",
    topic: "Americas",
  },
  "rasmussen-2010-saqqaq": {
    shortLabel: "Rasmussen et al. 2010",
    citation:
      "Rasmussen, M., et al. (2010). Ancient human genome sequence of an extinct Palaeo-Eskimo. Nature, 463(7282), 757-762.",
    url: "https://doi.org/10.1038/nature08835",
    annotation:
      "Primary genome source for the Saqqaq individual and the extinct Paleo-Eskimo lineage.",
    topic: "Arctic",
  },
  "raghavan-2014-arctic": {
    shortLabel: "Raghavan et al. 2014 Arctic",
    citation:
      "Raghavan, M., et al. (2014). The genetic prehistory of the New World Arctic. Science, 345(6200), 1255832.",
    url: "https://doi.org/10.1126/science.1255832",
    annotation:
      "Primary source for Paleo-Eskimo continuity, independence from First Peoples and Inuit expansions, and later replacement in the Arctic.",
    topic: "Arctic",
  },
  "piperno-2009": {
    shortLabel: "Piperno et al. 2009",
    citation:
      "Piperno, D. R., et al. (2009). Starch grain and phytolith evidence for early ninth millennium B.P. maize from the Central Balsas River Valley, Mexico. PNAS, 106(13), 5019-5024.",
    url: "https://doi.org/10.1073/pnas.0812525106",
    annotation:
      "Primary archaeological evidence for early maize in the Central Balsas Valley and the Xihuatoxtla marker.",
    topic: "Agriculture and Mesoamerica",
  },
  "matsuoka-2002": {
    shortLabel: "Matsuoka et al. 2002",
    citation:
      "Matsuoka, Y., et al. (2002). A single domestication for maize shown by multilocus microsatellite genotyping. PNAS, 99(9), 6080-6084.",
    url: "https://doi.org/10.1073/pnas.052125199",
    annotation:
      "Genetic support for a single maize domestication origin, used for the maize expansion route.",
    topic: "Agriculture and Mesoamerica",
  },
  "villa-islas-2023": {
    shortLabel: "Villa-Islas et al. 2023",
    citation:
      "Villa-Islas, V., et al. (2023). Demographic history and genetic structure in pre-Hispanic Central Mexico. Science, 380(6645).",
    url: "https://doi.org/10.1126/science.add6142",
    annotation:
      "Primary source for genomic continuity and structure in pre-Hispanic Central Mexico, including Sierra Gorda and Canada de la Virgen claims.",
    topic: "Agriculture and Mesoamerica",
  },
  "kirch-2017": {
    shortLabel: "Kirch 2017",
    citation:
      "Kirch, P. V. (2017). On the Road of the Winds: An Archaeological History of the Pacific Islands before European Contact (Rev. and expanded ed.). University of California Press.",
    annotation:
      "Standard archaeological synthesis for Pacific settlement chronology, Lapita expansion, and Polynesian route context.",
    topic: "Pacific",
  },
  "lipson-2018": {
    shortLabel: "Lipson et al. 2018",
    citation:
      "Lipson, M., et al. (2018). Population turnover in Remote Oceania shortly after initial settlement. Current Biology, 28(7), 1157-1165.e7.",
    url: "https://doi.org/10.1016/j.cub.2018.02.051",
    annotation:
      "Ancient-DNA source for Lapita-related First Remote Oceanians and later ancestry turnover in Remote Oceania.",
    topic: "Pacific",
  },
  "ioannidis-2020": {
    shortLabel: "Ioannidis et al. 2020",
    citation:
      "Ioannidis, A. G., et al. (2020). Native American gene flow into Polynesia predating Easter Island settlement. Nature, 583(7817), 572-577.",
    url: "https://doi.org/10.1038/s41586-020-2487-2",
    annotation:
      "Primary source for Native American gene flow into eastern Polynesia before European contact.",
    topic: "Pacific",
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof sourceRecords;

export const sources: Record<SourceId, Source> = sourceRecords;

export const sourceList = Object.entries(sources).map(([id, source]) => ({
  id: id as SourceId,
  ...source,
}));
