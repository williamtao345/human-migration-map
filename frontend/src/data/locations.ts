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
  southernIndia:    [77, 8],
  chennai:          [80, 13],
  odishaCoast:      [86, 20],
  dhaka:            [90, 23],

  // Southeast Asia
  sittwe:           [93, 20],
  yangon:           [96, 17],
  chumphon:         [99, 10],
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

  // Austronesian / Melanesia
  taiwan:           [121, 25],
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
  rapaNui:          [-109.3, -27.1],
} as const satisfies Record<string, readonly [number, number]>;

export type LocationName = keyof typeof locations;
