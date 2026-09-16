import React, { useState } from 'react';
import {
  Anchor,
  Eye,
  Coffee,
  Waves,
  Trees,
  Flame,
  BedDouble,
  Navigation,
  Sparkles,
  MapPin,
  ChevronRight,
  Compass,
  Info,
} from 'lucide-react';

export interface MapSpot {
  id: string;
  name: string;
  category: 'jetty' | 'lodge' | 'viewpoint' | 'accommodation' | 'activity';
  categoryLabel: string;
  x: number; // Percentage 0-100 on SVG viewBox
  y: number; // Percentage 0-100 on SVG viewBox
  elevation: string;
  bestTime: string;
  description: string;
  features: string[];
  image: string;
  badgeColor: string;
  icon: 'anchor' | 'eye' | 'coffee' | 'waves' | 'trees' | 'flame' | 'bed';
}

export const ISLAND_SPOTS: MapSpot[] = [
  {
    id: 'arrival-jetty',
    name: 'Main Arrival Jetty & Welcome Dock',
    category: 'jetty',
    categoryLabel: 'Arrival & Docks',
    x: 78,
    y: 62,
    elevation: '1,962 m (Lake Level)',
    bestTime: 'Anytime / Daytime transfers',
    description: 'The primary sheltered wooden boat landing where motorized transfers from the mainland (Rutinda or Kashasha landing) pull up. Features luggage porters and a covered greeting pavilion.',
    features: ['Luggage porter service', 'Covered waiting pavilion', 'Secure mooring for motorized transfers', 'Direct walkway up to Main Lodge'],
    image: '/images/welcome-to-habuharo-island.jpg',
    badgeColor: 'bg-sky-500 text-white',
    icon: 'anchor',
  },
  {
    id: 'main-lodge',
    name: 'Main Lodge & Thatched Dining Pavilion',
    category: 'lodge',
    categoryLabel: 'Lodge & Dining',
    x: 58,
    y: 48,
    elevation: '1,972 m',
    bestTime: 'Breakfast 07:00 • Dinner 19:00',
    description: 'The social hub of Heritage Lodge, featuring the open-air wooden dining terrace overlooking the Habuharo water channel, fresh Lake Bunyonyi crayfish kitchen, and fireside bar.',
    features: ['Panoramic channel-view dining', 'Open stone fireplace & lounge', 'Full bar & fresh Ugandan coffee', 'Free guest Wi-Fi & device charging'],
    image: '/images/dine.jpg',
    badgeColor: 'bg-amber-500 text-white',
    icon: 'coffee',
  },
  {
    id: 'ridge-cottages',
    name: 'Lakeside Bandas & Ridge Cottages',
    category: 'accommodation',
    categoryLabel: 'Accommodations',
    x: 44,
    y: 38,
    elevation: '1,976 m',
    bestTime: 'Sunrise & Evening',
    description: 'Standalone handcrafted wooden and stone bandas nestled along the natural slope of the island among eucalyptus trees, each with a private lake-facing verandah and en-suite washroom.',
    features: ['Private sunset & sunrise decks', 'Solar hot water showers', 'Handcrafted eucalyptus & stone build', 'Direct paths to dining pavilion'],
    image: '/images/cottage-outdoor.jpg',
    badgeColor: 'bg-emerald-600 text-white',
    icon: 'bed',
  },
  {
    id: 'scenic-viewpoint',
    name: "Eagle's Crest Scenic Viewpoint",
    category: 'viewpoint',
    categoryLabel: 'Scenic Viewpoints',
    x: 36,
    y: 24,
    elevation: '1,985 m (Island Summit)',
    bestTime: '06:30 Sunrise & 18:00 Sunset',
    description: 'The highest panoramic lookout on Habuharo Island. Delivers an unobstructed 360° panorama across Lake Bunyonyi, neighboring Punishment Island (Akampene), and the terraced Kigezi hills.',
    features: ['360° Lake Bunyonyi vista', 'Views of 29 surrounding islands', 'Photography platform with cedar bench', 'Spectacular morning mist photography'],
    image: '/images/habuharo-island.jpg',
    badgeColor: 'bg-teal-500 text-white',
    icon: 'eye',
  },
  {
    id: 'swimming-pier',
    name: 'Sunset Swimming Pier & Sundowner Deck',
    category: 'activity',
    categoryLabel: 'Water & Recreation',
    x: 24,
    y: 68,
    elevation: '1,962 m (Lake Level)',
    bestTime: '15:00 - 18:30 (Sundowner hour)',
    description: 'Our private wooden swimming pier jutting directly into deep, clean volcanic waters. 100% bilharzia-free and safe for swimming, with sun loungers and cold drink service.',
    features: ['Safe bilharzia-free freshwater swimming', 'Wooden ladder & jump platform', 'Sunbathing loungers & towels', 'Sunset cocktail service directly to pier'],
    image: '/images/outdoor.jpg',
    badgeColor: 'bg-indigo-500 text-white',
    icon: 'waves',
  },
  {
    id: 'canoe-station',
    name: 'Traditional Dugout Canoe Launch',
    category: 'activity',
    categoryLabel: 'Water & Recreation',
    x: 62,
    y: 78,
    elevation: '1,962 m',
    bestTime: 'Morning 08:00 - 11:00 (Calmest water)',
    description: 'The protected launch cove where guests board handcrafted wooden dugout canoes with experienced island boatmen to explore silent channels and nearby shores.',
    features: ['Traditional hand-carved wooden canoes', 'Local expert island guides', 'Life jackets for all ages', 'Quiet, engine-free peaceful gliding'],
    image: '/images/heritage-canoeing.jpg',
    badgeColor: 'bg-blue-600 text-white',
    icon: 'waves',
  },
  {
    id: 'nature-trail',
    name: 'Eucalyptus & Bird Sanctuary Trail',
    category: 'activity',
    categoryLabel: 'Nature & Trails',
    x: 38,
    y: 54,
    elevation: '1,968 - 1,980 m',
    bestTime: 'Early morning 06:30 - 09:00',
    description: 'A tranquil shaded nature path that circles Habuharo’s interior forest canopy. An idyllic spot for spotting over 200 bird species including weaver birds, pied kingfishers, and grey crowned cranes.',
    features: ['7-acre native forested sanctuary', 'Rich birding hotspot with 200+ species', 'Gentle graded stone paths', 'Secluded resting benches in shade'],
    image: '/images/heritage-nature-walk.jpg',
    badgeColor: 'bg-emerald-500 text-white',
    icon: 'trees',
  },
  {
    id: 'bonfire-pit',
    name: 'Lakeside Bonfire & Stargazing Circle',
    category: 'lodge',
    categoryLabel: 'Lodge & Dining',
    x: 66,
    y: 40,
    elevation: '1,966 m',
    bestTime: '19:30 - Late Evening',
    description: 'A circular volcanic stone firepit perched just above the water line. Lit every evening for warm fireside conversations, cultural storytelling, and equatorial stargazing with zero light pollution.',
    features: ['Hand-built volcanic rock fire ring', 'Equatorial night sky stargazing', 'Acoustic island music & storytelling', 'Hot spiced tea & Ugandan beers'],
    image: '/images/outdoor-2.jpg',
    badgeColor: 'bg-amber-600 text-white',
    icon: 'flame',
  },
];

type CategoryFilter = 'all' | 'jetty' | 'lodge' | 'viewpoint' | 'accommodation' | 'activity';

export const IslandMapHighlights: React.FC = () => {
  const [selectedSpotId, setSelectedSpotId] = useState<string>('arrival-jetty');
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [hoveredSpotId, setHoveredSpotId] = useState<string | null>(null);

  const selectedSpot = ISLAND_SPOTS.find((s) => s.id === selectedSpotId) || ISLAND_SPOTS[0];

  const filteredSpots = ISLAND_SPOTS.filter((spot) => {
    if (activeFilter === 'all') return true;
    return spot.category === activeFilter;
  });

  const renderIcon = (iconName: MapSpot['icon'], className: string = 'w-4 h-4') => {
    switch (iconName) {
      case 'anchor':
        return <Anchor className={className} />;
      case 'eye':
        return <Eye className={className} />;
      case 'coffee':
        return <Coffee className={className} />;
      case 'waves':
        return <Waves className={className} />;
      case 'trees':
        return <Trees className={className} />;
      case 'flame':
        return <Flame className={className} />;
      case 'bed':
        return <BedDouble className={className} />;
      default:
        return <MapPin className={className} />;
    }
  };

  return (
    <div className="bg-stone-950 rounded-3xl border border-stone-800 shadow-2xl p-6 sm:p-8 md:p-10 mb-14 text-white overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-800/80 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Island Guide</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Habuharo Island Map Highlights
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
            Explore the 7-acre sanctuary of Heritage Lodge. Tap any marker on the island to view arrival jetties, panoramic lookouts, lakeside dining, and quiet nature trails.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 shrink-0">
          <button
            onClick={() => setActiveFilter('all')}
            id="island-filter-all"
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-stone-950 font-semibold shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
            }`}
          >
            All Points ({ISLAND_SPOTS.length})
          </button>
          <button
            onClick={() => setActiveFilter('jetty')}
            id="island-filter-jetty"
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              activeFilter === 'jetty'
                ? 'bg-sky-500 text-white font-semibold shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
            }`}
          >
            <Anchor className="w-3 h-3" />
            <span>Jetties</span>
          </button>
          <button
            onClick={() => setActiveFilter('lodge')}
            id="island-filter-lodge"
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              activeFilter === 'lodge'
                ? 'bg-amber-500 text-stone-950 font-semibold shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
            }`}
          >
            <Coffee className="w-3 h-3" />
            <span>Lodge & Dining</span>
          </button>
          <button
            onClick={() => setActiveFilter('viewpoint')}
            id="island-filter-viewpoint"
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              activeFilter === 'viewpoint'
                ? 'bg-teal-500 text-white font-semibold shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Lookout</span>
          </button>
          <button
            onClick={() => setActiveFilter('activity')}
            id="island-filter-activity"
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              activeFilter === 'activity'
                ? 'bg-indigo-500 text-white font-semibold shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
            }`}
          >
            <Waves className="w-3 h-3" />
            <span>Water & Trails</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Map Overlay on Left, Detail Card & List on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Cols: Stylized Interactive SVG Island Map */}
        <div className="lg:col-span-7 bg-stone-900/90 rounded-2xl border border-stone-800 p-4 sm:p-5 relative shadow-inner overflow-hidden">
          {/* Map Status Header Overlay */}
          <div className="flex items-center justify-between text-xs text-stone-400 mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] text-stone-300">HABUHARO ISLAND (LAKE BUNYONYI)</span>
            </div>
            <span className="text-[11px] font-mono text-amber-400/90">~7 ACRES • 1,962M - 1,985M ELEVATION</span>
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-radial from-slate-900 via-stone-950 to-stone-950 border border-stone-800/70 select-none">
            {/* SVG Visual */}
            <svg
              viewBox="0 0 1000 750"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Interactive Map of Habuharo Island at Heritage Lodge"
            >
              <defs>
                {/* Water Pattern & Gradients */}
                <radialGradient id="waterGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="60%" stopColor="#020617" />
                  <stop offset="100%" stopColor="#020617" />
                </radialGradient>

                <linearGradient id="islandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#064e3b" />
                  <stop offset="45%" stopColor="#065f46" />
                  <stop offset="80%" stopColor="#047857" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>

                <linearGradient id="ridgeGradient" x1="0%" y1="30%" x2="100%" y2="70%">
                  <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#059669" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
                </linearGradient>

                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Water background */}
              <rect width="1000" height="750" fill="url(#waterGlow)" />

              {/* Gentle water ripples / contour lines around island */}
              <path
                d="M 140 420 C 150 250, 310 130, 520 120 C 730 110, 890 260, 880 430 C 870 600, 710 680, 500 670 C 290 660, 130 590, 140 420 Z"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2"
                strokeDasharray="4 6"
                opacity="0.6"
              />
              <path
                d="M 170 420 C 180 270, 330 160, 515 150 C 700 140, 845 270, 840 425 C 830 575, 685 640, 500 635 C 315 630, 160 570, 170 420 Z"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                opacity="0.3"
              />

              {/* Lake Bunyonyi Water Label & Water Depth Indicator */}
              <text x="70" y="70" fill="#64748b" fontSize="16" fontFamily="serif" fontStyle="italic" letterSpacing="2">
                ~ Lake Bunyonyi Calm Waters ~
              </text>
              <text x="70" y="92" fill="#475569" fontSize="12" fontFamily="sans-serif">
                100% Bilharzia & Hippo Free • Safe Swimming
              </text>

              {/* Island Outer Shoreline (volcanic stone & sand) */}
              <path
                d="M 200 420 C 210 290, 350 190, 510 180 C 670 170, 800 280, 800 420 C 800 560, 660 610, 480 610 C 300 610, 190 550, 200 420 Z"
                fill="#78716c"
                opacity="0.4"
              />

              {/* Main Island Landmass (Habuharo Island) */}
              <path
                d="M 210 420 C 220 300, 360 200, 510 190 C 660 180, 785 290, 785 420 C 785 550, 650 595, 480 595 C 310 595, 200 540, 210 420 Z"
                fill="url(#islandGradient)"
                stroke="#10b981"
                strokeWidth="2"
              />

              {/* Topographic Elevation Contours (Ridge) */}
              <path
                d="M 280 410 C 290 320, 390 240, 500 230 C 610 220, 705 300, 705 405 C 705 500, 595 535, 470 535 C 345 535, 270 495, 280 410 Z"
                fill="url(#ridgeGradient)"
                opacity="0.6"
              />
              <path
                d="M 330 390 C 340 320, 410 265, 490 260 C 570 255, 635 310, 635 385 C 635 450, 555 480, 465 480 C 375 480, 320 450, 330 390 Z"
                fill="#059669"
                opacity="0.4"
              />

              {/* Stylized Tree Clusters / Forest Texture */}
              <g fill="#022c22" opacity="0.6">
                <circle cx="320" cy="310" r="14" />
                <circle cx="340" cy="305" r="18" />
                <circle cx="360" cy="315" r="15" />
                <circle cx="430" cy="270" r="16" />
                <circle cx="450" cy="285" r="20" />
                <circle cx="560" cy="310" r="18" />
                <circle cx="585" cy="325" r="15" />
                <circle cx="680" cy="380" r="16" />
                <circle cx="700" cy="400" r="14" />
                <circle cx="410" cy="510" r="18" />
                <circle cx="435" cy="525" r="15" />
                <circle cx="530" cy="540" r="16" />
                <circle cx="300" cy="460" r="17" />
              </g>

              {/* Connecting Wooden Boardwalks & Stone Footpaths */}
              <path
                d="M 780 465 Q 680 420 580 360 Q 480 320 440 285 Q 360 210 360 180"
                fill="none"
                stroke="#fef08a"
                strokeWidth="3.5"
                strokeDasharray="6 6"
                opacity="0.85"
              />
              <path
                d="M 580 360 Q 460 410 380 405 Q 280 430 240 510"
                fill="none"
                stroke="#fef08a"
                strokeWidth="3.5"
                strokeDasharray="6 6"
                opacity="0.85"
              />
              <path
                d="M 580 360 Q 640 480 620 585"
                fill="none"
                stroke="#fef08a"
                strokeWidth="3"
                strokeDasharray="5 5"
                opacity="0.7"
              />

              {/* Wooden Jetties jutting into the lake */}
              {/* East Main Arrival Jetty */}
              <rect x="770" y="450" width="70" height="24" rx="4" fill="#78350f" stroke="#b45309" strokeWidth="2" transform="rotate(12 770 450)" />
              <line x1="775" y1="452" x2="840" y2="466" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 3" />

              {/* West Swimming Pier */}
              <rect x="195" y="495" width="60" height="22" rx="4" fill="#78350f" stroke="#b45309" strokeWidth="2" transform="rotate(-15 195 495)" />

              {/* South Canoe Launch Dock */}
              <rect x="605" y="575" width="45" height="18" rx="3" fill="#78350f" stroke="#b45309" strokeWidth="1.5" transform="rotate(45 605 575)" />

              {/* Compass Rose */}
              <g transform="translate(890, 110) scale(0.85)">
                <circle cx="0" cy="0" r="36" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <polygon points="0,-32 7,-8 0,0 -7,-8" fill="#ef4444" />
                <polygon points="0,32 7,8 0,0 -7,8" fill="#94a3b8" />
                <polygon points="32,0 8,7 0,0 8,-7" fill="#94a3b8" />
                <polygon points="-32,0 -8,7 0,0 -8,-7" fill="#94a3b8" />
                <text x="-4" y="-36" fill="#ef4444" fontSize="12" fontWeight="bold" fontFamily="sans-serif">N</text>
                <text x="38" y="4" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">E</text>
                <text x="-4" y="46" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">S</text>
                <text x="-52" y="4" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">W</text>
              </g>

              {/* Map Scale indicator */}
              <g transform="translate(70, 690)">
                <line x1="0" y1="0" x2="120" y2="0" stroke="#94a3b8" strokeWidth="3" />
                <line x1="0" y1="-6" x2="0" y2="6" stroke="#94a3b8" strokeWidth="2" />
                <line x1="60" y1="-4" x2="60" y2="4" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="120" y1="-6" x2="120" y2="6" stroke="#94a3b8" strokeWidth="2" />
                <text x="0" y="20" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">0</text>
                <text x="50" y="20" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">100m</text>
                <text x="110" y="20" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">200m</text>
              </g>

              {/* Interactive Spot Pins (SVG rendered) */}
              {filteredSpots.map((spot) => {
                const isSelected = spot.id === selectedSpotId;
                const isHovered = spot.id === hoveredSpotId;
                const px = spot.x * 10;
                const py = spot.y * 7.5;

                return (
                  <g
                    key={spot.id}
                    className="cursor-pointer transition-transform duration-300"
                    onClick={() => setSelectedSpotId(spot.id)}
                    onMouseEnter={() => setHoveredSpotId(spot.id)}
                    onMouseLeave={() => setHoveredSpotId(null)}
                    id={`svg-pin-${spot.id}`}
                  >
                    {/* Animated Pulsing Rings for Active/Hovered Pin */}
                    {(isSelected || isHovered) && (
                      <>
                        <circle
                          cx={px}
                          cy={py}
                          r={isSelected ? 32 : 24}
                          fill="none"
                          stroke={isSelected ? '#fbbf24' : '#38bdf8'}
                          strokeWidth="2"
                          opacity="0.8"
                          className="animate-ping"
                        />
                        <circle
                          cx={px}
                          cy={py}
                          r={isSelected ? 26 : 20}
                          fill={isSelected ? '#fbbf24' : '#38bdf8'}
                          opacity="0.2"
                        />
                      </>
                    )}

                    {/* Outer Pin Body */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isSelected ? 18 : 14}
                      fill={isSelected ? '#f59e0b' : '#0f172a'}
                      stroke={isSelected ? '#ffffff' : '#f59e0b'}
                      strokeWidth={isSelected ? 3 : 2}
                      filter="url(#glowFilter)"
                    />

                    {/* Pin Center Dot */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? '#ffffff' : '#fbbf24'}
                    />

                    {/* Text Label above pin */}
                    <rect
                      x={px - 65}
                      y={py - 34}
                      width="130"
                      height="20"
                      rx="4"
                      fill="#020617"
                      fillOpacity="0.85"
                      stroke={isSelected ? '#f59e0b' : '#334155'}
                      strokeWidth="1"
                    />
                    <text
                      x={px}
                      y={py - 20}
                      textAnchor="middle"
                      fill={isSelected ? '#fbbf24' : '#f8fafc'}
                      fontSize="10"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fontFamily="sans-serif"
                    >
                      {spot.name.length > 20 ? spot.name.slice(0, 18) + '…' : spot.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Floating Map Legend Pill in corner */}
            <div className="absolute bottom-3 right-3 bg-stone-950/85 backdrop-blur-md px-3 py-2 rounded-xl border border-stone-800 text-[11px] text-stone-300 flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Selected Spot
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-amber-400 inline-block" /> Other Points
              </span>
            </div>
          </div>

          {/* Quick interactive instructions */}
          <div className="flex items-center justify-between mt-3 text-xs text-stone-400 px-1">
            <span className="inline-flex items-center gap-1 text-[11px]">
              <Info className="w-3.5 h-3.5 text-amber-400" />
              Click any pin on the map or select from the list to reveal details
            </span>
            <span className="font-mono text-[11px] text-emerald-400">
              Showing {filteredSpots.length} of {ISLAND_SPOTS.length} spots
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Selected Spot Showcase & Interactive Spotlight */}
        <div className="lg:col-span-5 space-y-4">
          {/* Active Highlight Spotlight Card */}
          <div className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-xl transition-all duration-300">
            {/* Spot Photo */}
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
              <img
                src={selectedSpot.image}
                alt={selectedSpot.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

              {/* Category Badge & Elevation */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${selectedSpot.badgeColor}`}>
                  {selectedSpot.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-stone-200 text-[11px] font-medium border border-stone-700">
                  {selectedSpot.elevation}
                </span>
              </div>

              {/* Title & Best Time Overlaid */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-md">
                  {selectedSpot.name}
                </h4>
                <p className="text-xs text-amber-300 font-medium mt-0.5">
                  Best Visited: {selectedSpot.bestTime}
                </p>
              </div>
            </div>

            {/* Description & Features */}
            <div className="p-5 space-y-4">
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {selectedSpot.description}
              </p>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-2">
                  Spot Highlights & Amenities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSpot.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-stone-950/70 border border-stone-800 text-xs text-stone-300"
                    >
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center justify-between border-t border-stone-800">
                <span className="text-[11px] text-stone-400">
                  Part of Habuharo Island's 7-acre private grounds
                </span>
                <a
                  href="#cottages"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Book a Stay</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Spot Switcher Horizontal / Scrollable Pills */}
          <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800/80">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-2.5">
              Select Another Island Spot:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {ISLAND_SPOTS.map((spot) => {
                const isCurrent = spot.id === selectedSpotId;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedSpotId(spot.id)}
                    id={`spot-switch-${spot.id}`}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all flex items-start gap-2 ${
                      isCurrent
                        ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 font-medium'
                        : 'bg-stone-950/70 hover:bg-stone-800 border border-stone-800/80 text-stone-300'
                    }`}
                  >
                    <div className="mt-0.5 text-amber-400 shrink-0">
                      {renderIcon(spot.icon, 'w-3.5 h-3.5')}
                    </div>
                    <span className="line-clamp-2 leading-tight">
                      {spot.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
