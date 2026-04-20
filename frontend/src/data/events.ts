import type { MigrationEvent } from "./types";
import { coordOf } from "./locations";

export const events: MigrationEvent[] = [
  {
    id: "origin-amh",
    name: "Origin of Anatomically Modern Humans",
    year: -200000,
    location: coordOf("omoKibish"),
    description:
      "The oldest anatomically modern human (AMH) fossils date to ~150-190 kya in Ethiopia. Africa holds the highest genetic diversity of any continent, reflecting our species' long history on the continent. The deepest known split in the human family tree is between the San of southern Africa and all other human populations, dating to ~160-110 kya.",
  },
  {
    id: "out-of-africa",
    name: "Out of Africa",
    year: -65000,
    location: coordOf("southernArabia"),
    routeId: "out-of-africa",
    description:
      "A single major dispersal event carried a subset of African populations into the Middle East, founding all non-African populations alive today. Genetic diversity decreases steadily with distance from Africa, consistent with serial founder effects as small groups broke off and moved further from the origin.",
  },
  {
    id: "neanderthal-admixture",
    name: "Neanderthal Admixture",
    year: -55000,
    location: coordOf("levant"),
    description:
      "Shortly after leaving Africa, modern humans interbred with Neanderthals in the Middle East. All non-African populations today carry ~2% Neanderthal DNA, with East Asians carrying ~20% more than Europeans. The original admixture proportion may have been ~5-10%, reduced over time by purifying selection.",
  },
  {
    id: "sahul",
    name: "Settlement of Sahul",
    year: -50000,
    location: coordOf("northernAustralia"),
    routeId: "sahul",
    description:
      "Sahul — the ancient landmass connecting Australia, New Guinea, and Tasmania during lower sea levels — was reached by a single founding event shortly after humans first left Africa. Aboriginal Australians remained in high genetic isolation until recent times.",
  },
  {
    id: "denisovan-admixture",
    name: "Denisovan Admixture",
    year: -47000,
    location: coordOf("wallacea"),
    description:
      "Modern Melanesians carry ~3-6% Denisovan ancestry. The EPAS1 gene, which helps Tibetans thrive at high altitude, was inherited from Denisovans. Denisovans are known primarily from a finger bone and teeth found in Denisova Cave, Siberia.",
  },
  {
    id: "europe",
    name: "Peopling of Europe",
    year: -45000,
    location: coordOf("balkans"),
    routeId: "europe-whg",
    description:
      "Modern European ancestry derives from three major population waves: Western Hunter-Gatherers (WHG) after the Last Glacial Maximum, Early European Farmers (EEF) from Anatolia ~11 kya, and Yamnaya steppe herders ~4.5 kya who possibly spread Indo-European languages.",
  },
  {
    id: "beringia",
    name: "Crossing Beringia",
    year: -23000,
    location: coordOf("beringStrait"),
    routeId: "beringia",
    description:
      "The Native American gene pool formed ~23 kya from Ancient East Asians and Ancient North Siberians. The ancestral population walked from Siberia to Alaska via the Bering Land Bridge, which may have served as a mild wetland refugium.",
  },
  {
    id: "americas",
    name: "Peopling of the Americas",
    year: -15000,
    location: coordOf("pacificNW"),
    routeId: "americas",
    description:
      "The oldest accepted archaeological evidence dates to ~15-14 kya, with pre-Clovis sites including Monte Verde (Chile, 14.2 kya) and Page-Ladson (Florida, 14.45 kya). The first peoples traveled the Pacific coastal route, as the ice-free corridor was not viable until ~12.6 kya.",
  },
  {
    id: "polynesia",
    name: "Polynesian Expansion",
    year: 900,
    location: coordOf("tahiti"),
    routeId: "polynesia",
    description:
      "Polynesian seafarers expanded eastward across the Pacific from Samoa through island-hopping migrations, each founded by small groups of 30-200 individuals. Serial bottlenecks caused genetic diversity to decline at each step. Genetic evidence suggests Polynesian-Native American contact around ~1200 CE.",
  },
];
