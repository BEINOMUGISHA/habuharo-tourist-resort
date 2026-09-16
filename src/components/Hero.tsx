import React, { useState } from 'react';
import { Star, MessageSquare, Phone, Calendar, Users, Home, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import { LODGE_INFO, COTTAGES } from '../data/lodgeData';

interface HeroProps {
  onOpenBooking: (cottageId?: string, initialData?: { checkIn: string; checkOut: string; guests: number }) => void;
  onExploreCottages: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCottages }) => {
  const [selectedCottage, setSelectedCottage] = useState(COTTAGES[0].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedCottage, {
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/heritage-aerial.jpg"
          alt="Aerial view of Heritage Lodge, Habuharo Island, Lake Bunyonyi"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.55] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-900/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mt-6">
        {/* Rating & Island Heritage pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-amber-500/30 text-xs sm:text-sm text-stone-200 mb-6 shadow-lg">
          <div className="flex items-center gap-1 text-amber-400 font-semibold">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>{LODGE_INFO.rating} / 5.0</span>
          </div>
          <span className="text-stone-500">•</span>
          <span className="text-stone-300 font-medium">{LODGE_INFO.reviewCount} Verified Google Reviews</span>
          <span className="hidden sm:inline text-stone-500">•</span>
          <span className="hidden sm:inline text-emerald-400 font-medium">Private Habuharo Island</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 text-balance drop-shadow-md">
          Secluded Eco-Luxury on <br className="hidden sm:inline" />
          <span className="text-amber-300 italic font-serif">Lake Bunyonyi</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-200 font-light leading-relaxed mb-8 text-balance drop-shadow">
          Experience handcrafted timber cottages, panoramic mist-covered waters, and tranquil island hospitality. Uganda’s serene highland sanctuary, 100% free of bilharzia and hippos.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => onOpenBooking()}
            id="hero-book-stay-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <span>Book Your Island Stay</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge%20Habuharo,%20I%20am%20planning%20a%20visit%20to%20Lake%20Bunyonyi%20and%20would%20love%20to%20inquire%20about%20rates%20and%20boat%20transfer.`}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-inquire-btn"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-700/90 hover:bg-emerald-600 text-white font-semibold text-base backdrop-blur-sm border border-emerald-500/40 shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span>WhatsApp: {LODGE_INFO.phone}</span>
          </a>

          <a
            href={`tel:${LODGE_INFO.phone}`}
            id="hero-direct-call-btn"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white font-medium text-sm backdrop-blur-sm border border-stone-700 shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Instant Call</span>
          </a>
        </div>

        {/* Feature Micro-Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 border-t border-stone-800/80 text-left">
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-900/40 backdrop-blur-xs">
            <Waves className="w-5 h-5 text-sky-400 shrink-0" />
            <span className="text-xs text-stone-300 font-medium leading-tight">100% Bilharzia-Free Safe Swimming</span>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-900/40 backdrop-blur-xs">
            <Home className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-stone-300 font-medium leading-tight">Handcrafted Eco Wooden Cottages</span>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-900/40 backdrop-blur-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs text-stone-300 font-medium leading-tight">Private Island Boat Transfer</span>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-900/40 backdrop-blur-xs">
            <Star className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-stone-300 font-medium leading-tight">Gorilla Trekking Launch Basecamp</span>
          </div>
        </div>
      </div>

      {/* Floating Quick Reservation / Check Bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 hidden md:block">
        <form
          onSubmit={handleQuickSubmit}
          className="bg-stone-900/90 backdrop-blur-md rounded-2xl p-3 border border-stone-700 shadow-2xl grid grid-cols-12 gap-2.5 items-center"
        >
          {/* Cottage Select */}
          <div className="col-span-4 px-3 py-1.5 border-r border-stone-700/80 text-left">
            <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
              Cottage Type
            </label>
            <div className="flex items-center gap-2 text-stone-100">
              <Home className="w-4 h-4 text-amber-400 shrink-0" />
              <select
                value={selectedCottage}
                onChange={(e) => setSelectedCottage(e.target.value)}
                id="quick-cottage-select"
                className="w-full bg-transparent text-sm text-stone-100 focus:outline-none cursor-pointer truncate"
              >
                {COTTAGES.map((c) => (
                  <option key={c.id} value={c.id} className="bg-stone-900 text-stone-100">
                    {c.name} (${c.priceUSD}/nt)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dates */}
          <div className="col-span-3 px-3 py-1.5 border-r border-stone-700/80 text-left">
            <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
              Dates
            </label>
            <div className="flex items-center gap-2 text-stone-100">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <input
                type="text"
                placeholder="Dates (e.g. 2 Nights)"
                value={checkIn ? `${checkIn}` : ''}
                onChange={(e) => setCheckIn(e.target.value)}
                id="quick-dates-input"
                className="w-full bg-transparent text-xs text-stone-100 placeholder-stone-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="col-span-2 px-3 py-1.5 border-r border-stone-700/80 text-left">
            <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
              Guests
            </label>
            <div className="flex items-center gap-2 text-stone-100">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                id="quick-guests-select"
                className="w-full bg-transparent text-sm text-stone-100 focus:outline-none cursor-pointer"
              >
                <option value={1} className="bg-stone-900">1 Guest</option>
                <option value={2} className="bg-stone-900">2 Guests</option>
                <option value={3} className="bg-stone-900">3 Guests</option>
                <option value={4} className="bg-stone-900">4 Guests</option>
                <option value={5} className="bg-stone-900">5+ Guests</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-3 pl-1">
            <button
              type="submit"
              id="quick-check-rates-btn"
              className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <span>Check Rates & Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
