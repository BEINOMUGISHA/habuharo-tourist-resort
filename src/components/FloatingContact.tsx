import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { LODGE_INFO } from '../data/lodgeData';

interface FloatingContactProps {
  onOpenBooking: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Mobile Sticky Bottom Action Bar (visible strictly on mobile screens < sm) */}
      <aside
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-stone-900/95 backdrop-blur-md border-t border-stone-800 px-3 py-2 safe-pb shadow-2xl"
      >
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {/* Direct Call */}
          <a
            href={`tel:${LODGE_INFO.phone}`}
            id="mobile-bottom-call-btn"
            className="flex-1 min-h-[44px] flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-[11px] font-medium transition-colors border border-stone-700"
            aria-label={`Call Heritage Lodge at ${LODGE_INFO.phone}`}
          >
            <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span>Call</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge%20Habuharo,%20I%20would%20like%20to%20inquire%20about%20availability%20and%20rates.`}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-bottom-whatsapp-btn"
            className="flex-1 min-h-[44px] flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-medium transition-colors shadow-sm"
            aria-label="WhatsApp Heritage Lodge"
          >
            <div className="relative">
              <span className="animate-ping absolute -top-0.5 -right-0.5 inline-flex h-2 w-2 rounded-full bg-emerald-300 opacity-75"></span>
              <MessageSquare className="w-4 h-4 text-white mb-0.5" />
            </div>
            <span>WhatsApp</span>
          </a>

          {/* Book Cottage (Primary CTA) */}
          <button
            onClick={onOpenBooking}
            id="mobile-bottom-book-btn"
            className="flex-[1.4] min-h-[44px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-md transition-colors"
            aria-label="Book a cottage at Heritage Lodge"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Stay</span>
          </button>
        </div>
      </aside>

      {/* Desktop / Tablet Floating Action Pills (visible sm and above) */}
      <aside
        aria-label="Quick contact"
        className="hidden sm:flex fixed bottom-5 right-5 z-40 items-center gap-2.5"
      >
        {/* WhatsApp Button with pulse indicator */}
        <a
          href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge%20Habuharo,%20I%20would%20like%20to%20inquire%20about%20availability%20and%20rates.`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-400/40"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp with Heritage Lodge"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
          </span>
          <MessageSquare className="w-4 h-4 fill-white/20" />
          <span className="text-xs font-semibold tracking-wide">
            WhatsApp {LODGE_INFO.phone}
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${LODGE_INFO.phone}`}
          id="floating-call-btn"
          className="flex items-center gap-2 px-3.5 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-stone-700"
          title="Call Lodge Direct"
          aria-label={`Call Heritage Lodge directly at ${LODGE_INFO.phone}`}
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-medium hidden md:inline">
            Call Direct
          </span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          id="floating-book-btn"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-xs"
          aria-label="Book a cottage at Heritage Lodge"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Cottage</span>
        </button>
      </aside>
    </>
  );
};
