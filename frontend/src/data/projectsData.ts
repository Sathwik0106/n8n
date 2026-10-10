export interface ArchitecturalProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Cultural' | 'Commercial' | 'Hospitality' | 'Interior';
  year: number;
  location: string;
  area: string;
  client: string;
  typology: string;
  status: 'Completed' | 'Under Construction' | 'Commissioned';
  leadArchitect: string;
  coverImage: string;
  gallery: string[];
  drawingImage: string;
  description: string;
  tectonics: string[];
  sustainability: string;
  awards?: string[];
  coordinates: string;
}

export const ARCHITECTURAL_PROJECTS: ArchitecturalProject[] = [
  {
    id: 'monolith-residence',
    title: 'The Monolith Residence',
    subtitle: 'Brutalist Concrete Sanctuary Overlooking the Western Ghats',
    category: 'Residential',
    year: 2024,
    location: 'Khandala, Maharashtra',
    area: '8,450 sq.ft (785 m²)',
    client: 'Private Art Collector',
    typology: 'Single Family Villa & Sculpture Garden',
    status: 'Completed',
    leadArchitect: 'Ar. Sathwik Reddy',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=85'
    ],
    drawingImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=85',
    description: 'Conceived as an excavation from the mountain plateau, The Monolith Residence uses board-marked reinforced concrete cantilevers to frame sweeping panoramic vistas of the valley. A series of shaded subterranean courtyards introduce cool mountain microclimates, blending indoor and outdoor living with minimalist serenity.',
    tectonics: [
      'Board-marked cast-in-place concrete',
      'Charred Shou Sugi Ban teak louvers',
      'Local basalt dry-stack retaining walls',
      'Frameless Low-E acoustic glazing'
    ],
    sustainability: '100% on-site rainwater recharging, passive cross-ventilation shafts, integrated 12kW photovoltaic array with zero valley light pollution.',
    awards: ['AD100 Best Residential Architecture 2024', 'WAF Villa Award Finalist'],
    coordinates: '18.7562° N, 73.3745° E'
  },
  {
    id: 'terra-cotta-arts-centre',
    title: 'Terra Cotta Cultural Pavilion',
    subtitle: 'Parametric Vernacular Brick & Earth Museum of Contemporary Craft',
    category: 'Cultural',
    year: 2024,
    location: 'Jaipur, Rajasthan',
    area: '34,200 sq.ft (3,177 m²)',
    client: 'Foundation for Living Traditions',
    typology: 'Museum, Auditorium & Artisan Studios',
    status: 'Completed',
    leadArchitect: 'Ar. Sathwik Reddy',
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186241a?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186241a?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85'
    ],
    drawingImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=85',
    description: 'A contemporary reinterpretation of the traditional Rajasthani Jali screen, this cultural pavilion utilizes 120,000 locally hand-pressed terracotta louvers positioned via solar parametric algorithms to cut peak summer heat gain by 62% while projecting luminous geometric shadow choreographies across galleries.',
    tectonics: [
      'Locally kilned terracotta baguettes',
      'Exposed structural brick vaulting',
      'Polished brass joinery detailing',
      'White lime-surkhi render'
    ],
    sustainability: 'Net-zero thermal envelope, evaporative wind-catcher cooling towers, zero cement in internal partitions.',
    awards: ['IIA National Excellence Award in Public Architecture', 'Aga Khan Award Regional Nomination'],
    coordinates: '26.9124° N, 75.7873° E'
  },
  {
    id: 'pavilion-of-quietude',
    title: 'Pavilion of Quietude',
    subtitle: 'Weathered Steel and Reflective Water Court Coastal Villa',
    category: 'Residential',
    year: 2023,
    location: 'Alibaug, Coastal Maharashtra',
    area: '6,100 sq.ft (566 m²)',
    client: 'Author & Filmmaker Couple',
    typology: 'Coastal Residence & Writing Studio',
    status: 'Completed',
    leadArchitect: 'Ar. Sathwik Reddy',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85'
    ],
    drawingImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85',
    description: 'Arranged around an expansive reflecting body of saltwater, the pavilion dissolves the boundaries between shelter and maritime breeze. Corten steel portal frames patina over time in response to salty sea mist, embedding the structure deeply into its coconut grove topography.',
    tectonics: [
      'Pre-patinated Corten steel structural skeleton',
      'Honed black river granite flooring',
      'Reclaimed teak wood ceilings',
      'Motorized acoustic pivot portals'
    ],
    sustainability: 'Passive maritime airflow design, salt-resistant native flora landscaping, bio-swale coastal runoff filtration.',
    awards: ['Elle Decor International Design Awards (EDIDA) Winner'],
    coordinates: '18.6414° N, 72.8722° E'
  },
  {
    id: 'zenith-corporate-hq',
    title: 'Zenith Innovation Campus',
    subtitle: 'Biophilic High-Performance Corporate Headquarters & Sky Gardens',
    category: 'Commercial',
    year: 2024,
    location: 'Financial District, Hyderabad',
    area: '165,000 sq.ft (15,329 m²)',
    client: 'Zenith Life Sciences Ltd.',
    typology: 'Corporate HQ, R&D Labs & Public Plaza',
    status: 'Completed',
    leadArchitect: 'Ar. Sathwik Reddy',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=85'
    ],
    drawingImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=85',
    description: 'A 14-story vertical campus that breaks conventional glass boxes. Stepped landscaped sky terraces occur every three floors, creating open-air meeting hubs that foster spontaneous collaboration while reducing overall building cooling loads by 38%.',
    tectonics: [
      'High-performance double-skin facade with ventilated cavity',
      'Post-tensioned concrete flat slabs with fly-ash content',
      'Recycled architectural aluminium fins',
      'Native drought-tolerant vertical foliage'
    ],
    sustainability: 'LEED Platinum Certified, IGBC Green Building 5-Star, 100% greywater recycled for dual plumbing and landscape.',
    awards: ['Commercial Architecture of the Year — Indian Building Congress'],
    coordinates: '17.4239° N, 78.3428° E'
  },
  {
    id: 'the-courtyard-residence',
    title: 'The Courtyard House',
    subtitle: 'Biophilic Rammed Earth and Granary Heritage Home',
    category: 'Residential',
    year: 2023,
    location: 'Sadashivanagar, Bengaluru',
    area: '9,200 sq.ft (855 m²)',
    client: 'Multigenerational Family Estate',
    typology: 'Urban Private Residence',
    status: 'Completed',
    leadArchitect: 'Ar. Sathwik Reddy',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=85'
    ],
    drawingImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=85',
    description: 'Designed around an existing 80-year-old rain tree, the home reinterprets South Indian "Thotti Mane" vernacular courtyard logic. Thick stabilized rammed earth perimeter walls retain morning coolness while large clerestory openings flood sacred interior courtyards with ambient daylight.',
    tectonics: [
      'Stabilized rammed earth using subsoil excavated on site',
      'Reclaimed Mysore palace teak pillars and rafters',
      'Rough-hewn Sadarahalli grey granite flags',
      'Brass water spouts and copper rainwater chains'
    ],
    sustainability: 'Embodied carbon 54% lower than standard concrete construction, natural thermal flywheel mass.',
    awards: ['ArchDaily Building of the Year Nominee 2023'],
    coordinates: '13.0068° N, 77.5813° E'
  },
  {
    id: 'komorebi-retreat',
    title: 'Komorebi Forest Wellness Sanctuary',
    subtitle: 'Elevated Stilt Villas Immersed in Tropical Western Ghats Biosphere',
    category: 'Hospitality',
    year: 2023,
    location: 'Wayanad, Kerala',
    area: '26 Keys across 14 Acres',
    client: 'Elysian Hospitality Group',
    typology: 'Eco-Resort, Ayurveda Spa & Tea Atelier',
    status: 'Completed',
    leadArchitect: 'Ar. Sathwik Reddy',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85'
    ],
    drawingImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=85',
    description: 'Light-touch architecture touching the earth lightly on pinpoint steel stilts to preserve root networks of primary rainforest. The cottages feature steep thatched gables, wide shaded verandas, and open-air rain showers looking into wild cardamom plantations.',
    tectonics: [
      'Treated micro-laminated bamboo composite structural trusses',
      'Locally dressed Laterite stone foundations',
      'Natural volcanic Sukabumi stone plunge pools',
      'Hand-woven rattan ceiling linings'
    ],
    sustainability: 'Zero mature trees felled during construction, off-grid micro-hydroelectric power, closed-loop vermicomposting.',
    awards: ['Condé Nast Traveler Best Eco-Design Destination 2024'],
    coordinates: '11.6854° N, 76.1320° E'
  },
  {
    id: 'cedar-penthouse-interiors',
    title: 'Atelier Penthouse & Gallery',
    subtitle: 'Warm Minimalist Spatial Architecture in Smoked Walnut & Travertine',
    category: 'Interior',
    year: 2024,
    location: 'Jubilee Hills, Hyderabad',
    area: '5,800 sq.ft (538 m²)',
    client: 'Fintech Founder & Sculptor',
    typology: 'Luxury Penthouse Interior Architecture',
    status: 'Completed',
    leadArchitect: 'Ar. Sathwik Reddy',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85'
    ],
    drawingImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=85',
    description: 'A study in material restraint and shadow. Custom millwork in open-grain American walnut defines spatial transitions without solid walls. A monolithic 6-meter kitchen island in unpolished Roman travertine anchors the double-height living volume.',
    tectonics: [
      'Cross-cut Roman Silver Travertine with unfilled open pores',
      'Crown-cut American black walnut wall paneling',
      'Brushed hand-rubbed antique bronze fixtures',
      'Seamless micro-topping cementitious mineral flooring'
    ],
    sustainability: 'Zero VOC organic mineral lime paints, circadian tunable architectural lighting system (CRI 98+).',
    awards: ['AD Design Awards — Residential Interior of the Year'],
    coordinates: '17.4319° N, 78.4073° E'
  },
  {
    id: 'monastic-chapel-library',
    title: 'Sanctuary of Light & Silence',
    subtitle: 'Contemplative Concrete Chapel & Philosophy Reading Room',
    category: 'Cultural',
    year: 2022,
    location: 'Lavasa Valley, Maharashtra',
    area: '11,800 sq.ft (1,096 m²)',
    client: 'Trust for Humane Letters & Philosophy',
    typology: 'Civic Meditation Hall & Archive',
    status: 'Completed',
    leadArchitect: 'Ar. Sathwik Reddy',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186241a?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85'
    ],
    drawingImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=85',
    description: 'Directly influenced by Tadao Ando and Louis Kahn, two 14-meter-high curved concrete pylons create a razor-thin aperture where morning sun descends like a blade of light upon a sunken black granite reflection pool. The library archives 18,000 philosophical manuscripts in humidity-controlled teak vaults.',
    tectonics: [
      'White Pozzolana self-compacting architectural concrete',
      'Flame-treated black leather-finish Kadappa stone',
      'Acoustic felt concealed behind oiled oak battens',
      'Structural silicone frameless skylight ribbons'
    ],
    sustainability: '100% natural daylit interior requiring zero artificial lighting between 7:30 AM and 5:30 PM.',
    awards: ['International Architecture Award (Chicago Athenaeum)'],
    coordinates: '18.4112° N, 73.5074° E'
  }
];

export const STUDIO_METRICS = [
  { label: 'Years of Practice', value: '14+' },
  { label: 'Built Works Realized', value: '38' },
  { label: 'National & Global Awards', value: '11' },
  { label: 'Square Feet Sculpted', value: '820K+' },
  { label: 'AD100 Atelier', value: '2023-24' }
];

export const PHILOSOPHY_PILLARS = [
  {
    step: '01',
    title: 'Topography & Climate Geometry',
    description: 'We never impose form on a site. Every line begins with solar angle calculations, monsoon wind channels, soil geology, and the memory of native flora.'
  },
  {
    step: '02',
    title: 'Tectonic Material Honesty',
    description: 'Concrete reveals its timber formwork. Bricks carry the red earth of their kiln. Steel oxidizes proudly. We celebrate raw, unadorned materials that age with dignity.'
  },
  {
    step: '03',
    title: 'The Poetics of Shadow & Light',
    description: 'In tropical climates, light without shade is blinding. We choreograph deep verandas, light-wells, jalis, and water bodies to sculpt shadow as an emotional building material.'
  },
  {
    step: '04',
    title: 'Vernacular Modernism & Ecology',
    description: 'Merging age-old craft wisdom (rammed earth, lime plaster, courtyards) with advanced parametric engineering, creating structures with radical low-embodied carbon.'
  }
];

export const ATELIER_LOCATIONS = [
  {
    city: 'Hyderabad Atelier (HQ)',
    address: 'Road No. 45, Jubilee Hills, Hyderabad, Telangana 500033',
    phone: '+91 (040) 4892 7700',
    email: 'atelier.hyd@sathwikstudio.com',
    hours: 'Monday – Friday, 09:30 – 18:30 IST'
  },
  {
    city: 'Bengaluru Studio',
    address: '100ft Road, Defence Colony, Indiranagar, Bengaluru 560038',
    phone: '+91 (080) 4125 8820',
    email: 'bengaluru@sathwikstudio.com',
    hours: 'Monday – Friday, 09:30 – 18:30 IST'
  }
];
