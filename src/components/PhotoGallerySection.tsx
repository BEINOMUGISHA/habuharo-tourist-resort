import React, { useState } from 'react';
import { X, ZoomIn, Camera, ExternalLink, MapPin } from 'lucide-react';
import { LODGE_INFO } from '../data/lodgeData';

interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Cottages' | 'Island & Lake' | 'Activities' | 'Dining';
  url: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Panoramic View of Habuharo Island & Lake Bunyonyi',
    category: 'Island & Lake',
    url: '/images/habuharo-island.jpg',
  },
  {
    id: 'g2',
    title: 'Aerial View of Heritage Lodge on the 7-Acre Wooded Island',
    category: 'Island & Lake',
    url: '/images/heritage-aerial.jpg',
  },
  {
    id: 'g3',
    title: 'Authentic Handcrafted Banda Interior with Canopy Bed',
    category: 'Cottages',
    url: '/images/cottage-indoor.jpg',
  },
  {
    id: 'g4',
    title: 'Private Wooden Verandah Overlooking the Water',
    category: 'Cottages',
    url: '/images/cottage-outdoor.jpg',
  },
  {
    id: 'g5',
    title: 'Lakeside Open-Air Restaurant Overlooking Habuharo Channel',
    category: 'Dining',
    url: '/images/dine.jpg',
  },
  {
    id: 'g6',
    title: 'Fireside Heritage Lounge & Island Bar',
    category: 'Dining',
    url: '/images/lounge.jpg',
  },
  {
    id: 'g7',
    title: 'Private Waterfront Swimming Pier & Sundowner Deck',
    category: 'Activities',
    url: '/images/outdoor.jpg',
  },
  {
    id: 'g8',
    title: 'Traditional Dugout Canoeing in Still Lake Waters',
    category: 'Activities',
    url: '/images/heritage-canoeing.jpg',
  },
  {
    id: 'g9',
    title: 'Motorized Boat Transfer to Habuharo Island',
    category: 'Activities',
    url: '/images/boat-ride.jpg',
  },
  {
    id: 'g10',
    title: 'Standalone Wooden Cottage Exterior & Stone Pathways',
    category: 'Cottages',
    url: '/images/cottage-2.jpg',
  },
  {
    id: 'g11',
    title: 'Elevated Island Banda Tucked into Eucalyptus Trees',
    category: 'Cottages',
    url: '/images/heritage-lodge-2.jpg',
  },
  {
    id: 'g12',
    title: 'Private Wooden Arrival Dock at Habuharo Island',
    category: 'Island & Lake',
    url: '/images/welcome-to-habuharo-island.jpg',
  },
  {
    id: 'g13',
    title: 'Guided Group Canoe Tour Exploring the 29 Islands',
    category: 'Activities',
    url: '/images/canoeing-in-groups.jpg',
  },
  {
    id: 'g14',
    title: 'Forested Nature Trail on Habuharo Island',
    category: 'Activities',
    url: '/images/heritage-nature-walk.jpg',
  },
  {
    id: 'g15',
    title: 'Lush Bird Sanctuary & Indigenous Tree Canopy',
    category: 'Island & Lake',
    url: '/images/nature.jpg',
  },
  {
    id: 'g16',
    title: 'Spectacular Terraced Hills of Kigezi & Lake Bunyonyi',
    category: 'Island & Lake',
    url: '/images/bunyonyi-islands.jpg',
  },
];

export const PhotoGallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const tabs = ['All', 'Cottages', 'Island & Lake', 'Activities', 'Dining'];

  const filtered =
    activeTab === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Google Maps Verified Photos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 mb-4 leading-tight">
            Moments at Heritage Lodge
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 text-base leading-relaxed">
            Real, authentic photography from Habuharo Island—genuine wooden cottages, serene misty waters, lakeside dining, and island adventures as captured on our Google Maps profile.
          </p>
        </div>

        {/* Filter Tabs & Google Maps link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-stone-100">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                id={`gallery-tab-${tab.toLowerCase().replace(/[\s&]+/g, '-')}`}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === tab
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {tab === 'All' ? 'All Photos' : tab}
              </button>
            ))}
          </div>

          <a
            href={LODGE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-google-maps-link"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200 transition-colors shrink-0"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>View All on Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              id={`gallery-item-${photo.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold mb-1">
                  {photo.category}
                </span>
                <p className="text-xs text-white font-medium leading-snug drop-shadow-sm">
                  {photo.title}
                </p>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/80 text-white flex items-center justify-center backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-stone-900 shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              id="close-gallery-lightbox-btn"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 flex items-center justify-center shadow-lg"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={lightboxPhoto.url}
              alt={lightboxPhoto.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[75vh] object-contain bg-stone-950"
            />

            <div className="p-4 bg-stone-900 text-white flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs text-amber-400 font-semibold block uppercase tracking-wider">
                  {lightboxPhoto.category}
                </span>
                <h4 className="font-serif text-lg font-bold">
                  {lightboxPhoto.title}
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-stone-400">
                  Habuharo Island • Lake Bunyonyi
                </span>
                <a
                  href={LODGE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
