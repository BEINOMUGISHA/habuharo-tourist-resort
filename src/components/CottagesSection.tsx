import React, { useState } from 'react';
import { Users, Bed, Eye, Check, ArrowRight, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { COTTAGES, LODGE_INFO } from '../data/lodgeData';
import { Cottage } from '../types';
import { CottageDetailModal } from './CottageDetailModal';

interface CottagesSectionProps {
  onOpenBooking: (cottageId?: string) => void;
}

export const CottagesSection: React.FC<CottagesSectionProps> = ({ onOpenBooking }) => {
  const [currency, setCurrency] = useState<'USD' | 'UGX'>('USD');
  const [selectedCottageForModal, setSelectedCottageForModal] = useState<Cottage | null>(null);

  return (
    <section id="cottages" className="py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-800 block mb-2">
              Habuharo Island Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 leading-tight">
              Eco-Luxury Wooden Cottages & Bandas
            </h2>
            <p className="mt-3 text-stone-600 text-base max-w-2xl">
              Constructed by local craftsmen using indigenous materials, our standalone cottages sit nestled in greenery with open wooden verandas overlooking Lake Bunyonyi.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1.5 bg-stone-200/80 p-1.5 rounded-xl self-start md:self-auto shrink-0 border border-stone-300">
            <span className="text-xs font-medium text-stone-600 px-2">Currency:</span>
            <button
              onClick={() => setCurrency('USD')}
              id="currency-usd-btn"
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                currency === 'USD'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('UGX')}
              id="currency-ugx-btn"
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                currency === 'UGX'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              UGX (USh)
            </button>
          </div>
        </div>

        {/* Cottages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COTTAGES.map((cottage) => (
            <div
              key={cottage.id}
              id={`cottage-card-${cottage.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={cottage.image}
                  alt={cottage.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold tracking-wide border border-stone-700">
                    {cottage.category}
                  </span>
                </div>

                {/* Price Badge on bottom right of image */}
                <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-stone-950/85 backdrop-blur-md text-white border border-stone-800 text-right shadow-lg">
                  <span className="font-serif text-lg sm:text-xl font-bold text-amber-400">
                    {currency === 'USD' ? `$${cottage.priceUSD}` : `${cottage.priceUGX.toLocaleString()} UGX`}
                  </span>
                  <span className="text-[10px] text-stone-400 block font-normal -mt-0.5">
                    / night incl. breakfast
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>{cottage.view}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {cottage.name}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {cottage.description}
                  </p>

                  {/* Spec Icons */}
                  <div className="flex flex-wrap items-center gap-3 py-3 border-y border-stone-100 mb-4 text-xs text-stone-700">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-700" />
                      <span>{cottage.capacity}</span>
                    </div>
                    <span className="text-stone-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-amber-700" />
                      <span>{cottage.bedType}</span>
                    </div>
                  </div>

                  {/* Amenities Checklist */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {cottage.amenities.slice(0, 4).map((amenity, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    onClick={() => onOpenBooking(cottage.id)}
                    id={`book-btn-${cottage.id}`}
                    className="w-full sm:flex-1 min-h-[44px] py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Book Reservation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedCottageForModal(cottage)}
                    id={`details-btn-${cottage.id}`}
                    className="w-full sm:w-auto min-h-[44px] py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors border border-stone-300 flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-600" />
                    <span>View Photos</span>
                  </button>

                  <a
                    href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(cottage.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`whatsapp-cottage-${cottage.id}`}
                    className="w-full sm:w-auto min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition-colors border border-emerald-200 flex items-center justify-center"
                    title="Inquire via WhatsApp"
                    aria-label={`Inquire about ${cottage.name} via WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking guarantee notice */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-900/10 border border-emerald-700/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Need Assistance Selecting The Right Cottage?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Contact our island manager directly on Call or WhatsApp for group inquiries, honeymoon packages, and customized boat transfers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${LODGE_INFO.phone}`}
              id="cottages-direct-call-link"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: {LODGE_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20could%20you%20help%20me%20choose%20the%20best%20cottage%20for%20my%20dates?`}
              target="_blank"
              rel="noopener noreferrer"
              id="cottages-whatsapp-help-link"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cottage Detail & Full Photo Modal */}
      {selectedCottageForModal && (
        <CottageDetailModal
          cottage={selectedCottageForModal}
          onClose={() => setSelectedCottageForModal(null)}
          onBookNow={(id) => onOpenBooking(id)}
        />
      )}
    </section>
  );
};
