import React from 'react';
import { Compass, Phone, MessageSquare, MapPin, Star, ExternalLink, Heart, Shield, Waves } from 'lucide-react';
import { LODGE_INFO } from '../data/lodgeData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Lodge Brand & Intro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 bg-stone-800 shrink-0">
                <img
                  src="/images/brand.jpg"
                  alt="Heritage Lodge emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white block">
                  Heritage Lodge
                </span>
                <span className="text-xs text-emerald-400 font-medium tracking-widest uppercase">
                  Habuharo Island • Lake Bunyonyi
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              A secluded eco-lodge sanctuary set on private Habuharo Island in Southwestern Uganda. Featuring handcrafted wooden cottages, bilharzia-free crystal water, fresh crayfish dining, and authentic African island peace.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-semibold text-white">{LODGE_INFO.rating} / 5.0 Rating</span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-400">{LODGE_INFO.reviewCount} Verified Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Explore The Lodge
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#cottages" className="hover:text-amber-300 transition-colors">
                  Wooden Cottages & Bandas
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber-300 transition-colors">
                  Dugout Canoe & Island Tours
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-300 transition-colors">
                  Lake Bunyonyi Crayfish & Dining
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">
                  Guest Reviews & Google Ratings
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  Getting to Habuharo Island
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Booking Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Island Contact
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {LODGE_INFO.address}
                  <span className="block text-[11px] text-stone-400 font-mono mt-0.5">
                    Plus Code: {LODGE_INFO.plusCode}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${LODGE_INFO.phone}`}
                  className="hover:text-amber-300 transition-colors font-medium text-white"
                >
                  Direct Call: {LODGE_INFO.phoneDisplay} ({LODGE_INFO.phone})
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20would%20like%20to%20inquire%20about%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  WhatsApp: +256 703 606114
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                id="footer-book-btn"
                className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-colors shadow-md text-center"
              >
                Inquire & Book Cottage
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {LODGE_INFO.name}. All rights reserved. Habuharo Island, Lake Bunyonyi, Uganda.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={LODGE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Google Maps Pin</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span className="text-emerald-400">100% Bilharzia-Free Freshwaters</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
