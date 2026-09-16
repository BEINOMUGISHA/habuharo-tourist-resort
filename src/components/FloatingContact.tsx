import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { LODGE_INFO } from '../data/lodgeData';

interface FloatingContactProps {
  onOpenBooking: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5">
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
  );
};
