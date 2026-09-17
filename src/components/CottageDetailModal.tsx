import React, { useState, useEffect } from 'react';
import { X, Check, Users, Bed, Eye, MessageSquare, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Cottage } from '../types';
import { LODGE_INFO } from '../data/lodgeData';

interface CottageDetailModalProps {
  cottage: Cottage | null;
  onClose: () => void;
  onBookNow: (cottageId: string) => void;
}

export const CottageDetailModal: React.FC<CottageDetailModalProps> = ({
  cottage,
  onClose,
  onBookNow,
}) => {
  const [activeImage, setActiveImage] = useState(cottage?.image || '');

  // Keep activeImage in sync when cottage prop changes
  useEffect(() => {
    if (cottage) {
      setActiveImage(cottage.image);
    }
  }, [cottage]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (cottage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [cottage]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && cottage) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cottage, onClose]);

  if (!cottage) return null;

  const allImages = [cottage.image, ...(cottage.additionalImages || [])];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto touch-scroll bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-6 text-stone-900 border border-stone-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-cottage-modal-btn"
          className="absolute top-3.5 right-3.5 z-10 min-w-[44px] min-h-[44px] rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 bg-stone-950 p-4 sm:p-6 flex flex-col justify-between">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 shadow-inner">
              <img
                src={activeImage}
                alt={cottage.name}
                decoding="async"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                {cottage.category}
              </span>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2.5 mt-4 overflow-x-auto touch-scroll pb-1">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  id={`cottage-thumb-${idx}`}
                  className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all min-h-[44px] ${
                    activeImage === img ? 'border-amber-500 scale-105' : 'border-stone-700 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={img} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Booking Actions */}
          <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto touch-scroll max-h-[80vh] lg:max-h-[600px]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                  {cottage.view}
                </span>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-amber-700">
                    ${cottage.priceUSD}
                  </span>
                  <span className="text-xs text-stone-500 block font-normal">
                    / night ({cottage.priceUGX.toLocaleString()} UGX)
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                {cottage.name}
              </h3>
              <p className="text-xs text-stone-500 mb-4 italic">
                {cottage.tagline}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-100 text-stone-700 text-xs">
                  <Users className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{cottage.capacity}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-100 text-stone-700 text-xs">
                  <Bed className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="truncate">{cottage.bedType}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-100 text-stone-700 text-xs col-span-2">
                  <Eye className="w-4 h-4 text-sky-700 shrink-0" />
                  <span className="truncate">{cottage.view}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {cottage.description}
              </p>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2.5">
                  Included Amenities
                </h4>
                <div className="space-y-1.5">
                  {cottage.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <button
                onClick={() => {
                  onClose();
                  onBookNow(cottage.id);
                }}
                id="modal-reserve-cottage-btn"
                className="w-full min-h-[44px] py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Reserve This Cottage</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(cottage.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-whatsapp-btn"
                  className="min-h-[44px] py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Info</span>
                </a>

                <a
                  href={`tel:${LODGE_INFO.phone}`}
                  id="modal-call-btn"
                  className="min-h-[44px] py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-stone-300"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Call {LODGE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
