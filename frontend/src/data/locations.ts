// Shared location directory — [longitude, latitude]
// Update coordinates here and they propagate to all routes and events.

export const locations = {
  // Africa
  omoKibish:        [40, 10],
  djibouti:         [43, 12],
  babElMandeb:      [45, 13],
  hadar:            [40.633, 11.167],
  aramis:           [40.50, 10.47],
  laetoli:          [35.18, -3.22],
  olduvai:          [35.35, -2.99],
  toroMenalla:      [17.47, 16.26],

  // Arabia
  southernArabia:   [45, 15],
  easternArabia:    [48, 22],

  // Middle East
  levant:           [36, 31],
  mesopotamia:      [44, 33],
  southernTurkey:   [36, 37],
  centralAnatolia:  [32, 39],
  centralAnatoliaEEF: [33, 39],
  nwTurkey:         [28, 41],

  // Iran / Pakistan
  bandarAbbas:      [56, 27],
  gwadar:           [62, 25],

  // South Asia
  mumbai:           [73, 19],
  kanyakumari:      [77.54, 8.09],
  chennai:          [80, 13],
  puri:             [85.83, 19.81],
  dhaka:            [90.39, 23.76],

  // Southeast Asia
  chumphon:         [99, 10],
  chiangMai:        [98.99, 18.79],
  kualaLumpur:      [102, 3],
  sunda:           [105, 0],
  wallacea:         [120, -5],
  sangiran:         [110.85, -7.45],

  // Australia
  northernAustralia:[132, -12],

  // Central / East Asia
  kabul:            [69, 34],
  samarkand:        [67, 40],
  tibetanPlateauN:  [88, 35],
  westernChina:     [100, 35],
  centralChina:     [110, 32],
  easternChina:     [118, 30],
  southChinaCoast:  [113, 22],
  vietnamN:         [107, 22],
  yunnan:           [102, 25],
  fuzhou:           [119.3, 26.07],
  zhoukoudian:      [115.8695, 39.6547],

  // North Asia
  mongolia:         [107, 47],
  nMongolia:        [115, 53],
  centralSiberia:   [130, 60],
  easternSiberia:   [150, 62],
  neSiberia:        [170, 63],
  maltaBaikal:      [103.5, 52.9],
  westSiberia:      [82, 55],
  uralsSteppe:      [55, 52],
  ustIshim:         [71.2, 57.744],
  yanaRhs:          [135.385, 70.72],
  denisovaCave:     [84.676, 51.397],

  // Europe
  balkans:          [22, 42],
  northernItaly:    [15, 45],
  westernEurope:    [2, 46],
  neanderValley:    [7.15, 51.23],
  ponticSteppe:     [40, 48],
  centralEurope:    [13, 52],
  aegean:           [25, 39],
  carpathianBasin:  [20, 47],
  galicia:          [24, 49],
  crete:            [25, 35],
  southernItaly:    [17, 41],
  southernFrance:   [5, 43],
  iberia:           [-1, 40],

  // Beringia / Americas
  chukotka:         [175, 66],          // verified — Chukchi Peninsula center (Wikipedia)
  beringStrait:     [-169, 65],
  alaska:           [-150, 63],
  upwardSunRiver:   [-145.76, 63.71],
  anzick:           [-110.646, 45.987],
  bcCoast:          [-130, 55],
  pacificNW:        [-125, 48],
  california:       [-122, 38],
  wMexicoCoast:     [-105, 22],
  oaxaca:           [-96, 17],
  guatemala:        [-90, 15],
  panama:           [-80, 8],
  bogota:           [-74, 5],
  quito:            [-78, -0.2],
  lima:             [-77, -12],
  bolivia:          [-65, -17],
  nArgentina:       [-65, -30],
  sArgentina:       [-68, -40],
  monteVerde:       [-73.203, -41.503],
  pageLadson:       [-83.99, 30.08],    // verified — Aucilla River sinkhole (Wikipedia)
  kennewick:        [-119.21, 46.24],   // verified — Columbia Park, Kennewick WA

  // Northern Branch eastward expansion across North America (city waypoints)
  whitehorse:       [-135.05, 60.72],   // Whitehorse, Yukon — corridor entry
  edmonton:         [-113.49, 53.55],   // Edmonton, Alberta — Ice-Free Corridor mouth
  billings:         [-108.50, 45.78],   // Billings, Montana — proxy for Anzick
  chicago:          [-87.63, 41.88],    // Chicago, Illinois — Great Lakes
  pittsburgh:       [-79.99, 40.44],    // Pittsburgh, PA — proxy for Meadowcroft
  richmond:         [-77.44, 37.54],    // Richmond, VA — proxy for Cactus Hill
  augusta:          [-82.00, 33.47],    // Augusta, GA — proxy for Topper
  tallahassee:      [-84.28, 30.44],    // Tallahassee, FL — proxy for Page-Ladson

  // Paleo-Eskimo route (NW Alaska + High Arctic Archipelago + Greenland)
  capeKrusenstern:  [-163.50, 67.13],   // verified — Cape Krusenstern, NW Alaska (ASTt landfall)
  utqiagvik:        [-156.79, 71.29],   // verified — Utqiagvik (Barrow), Alaska
  mackenzieDelta:   [-135.50, 69.33],   // verified — Mackenzie Delta, NW Canadian coast
  banksIsland:      [-121.51, 73.08],   // verified — Banks Island center (Wikipedia)
  highArcticParry:  [-93.00, 74.33],    // verified — Parry Channel (Wikipedia)
  ellesmere:        [-78.00, 80.17],    // verified — Ellesmere Island center (Wikipedia)
  nwGreenland:      [-68.70, 76.53],    // verified — Pituffik / Thule area, NW Greenland landfall
  diskoBay:         [-51.18, 68.82],    // verified — Qasigiannguit / Qeqertasussuk site (Wikipedia)

  // Mesoamerica
  balsasValley:     [-99.40, 18.37],    // verified — Xihuatoxtla Shelter (Megalithic Portal)
  sierraGorda:      [-99.53, 20.88],    // verified — Toluquilla site (INAH)
  canadaDeLaVirgen: [-100.93, 20.86],   // verified — Wikipedia

  // NW South America — Polynesian-Native American contact landfall
  // Ioannidis et al. 2020 trace the Native American signal in eastern Polynesians
  // to a population most closely related to the Zenú of present-day Colombia.
  tumaco:           [-78.79, 1.81],     // verified — Tumaco, Pacific coast of Colombia

  // Austronesian / Melanesia
  kaohsiung:        [120.30, 22.62],
  manila:           [121, 14.6],
  sulawesi:         [120, -2],
  portMoresby:      [147, -9.5],
  honiara:          [160, -9.4],
  fiji:             [178, -18],
  tonga:            [-175, -21],

  // Polynesia
  samoa:            [-171.8, -13.8],
  cookIslands:      [-159.8, -21.2],
  tahiti:           [-149.4, -17.7],
  tuamotu:          [-145, -16],
  marquesas:        [-139.5, -9.8],
  mangareva:        [-134.97, -23.13],   // Gambier Islands — admixture signal site (Ioannidis 2020)
  rapaNui:          [-109.3, -27.1],
} as const satisfies Record<string, readonly [number, number]>;

export type LocationName = keyof typeof locations;
