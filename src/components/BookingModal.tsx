import React, { useState, useEffect, useMemo } from 'react';
import { X, Calendar, Users, Home, Ship, MessageSquare, Phone, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { COTTAGES, LODGE_INFO } from '../data/lodgeData';
import { BookingState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCottageId?: string;
  initialData?: { checkIn?: string; checkOut?: string; guests?: number };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultCottageId,
  initialData,
}) => {
  const [formData, setFormData] = useState<BookingState>({
    checkIn: initialData?.checkIn || '',
    checkOut: initialData?.checkOut || '',
    cottageId: defaultCottageId || COTTAGES[0].id,
    guests: initialData?.guests || 2,
    name: '',
    email: '',
    phone: '',
    boatTransferNeeded: true,
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync state if props change
  useEffect(() => {
    if (defaultCottageId) {
      setFormData((prev) => ({ ...prev, cottageId: defaultCottageId }));
    }
    if (initialData?.checkIn) {
      setFormData((prev) => ({ ...prev, checkIn: initialData.checkIn || '' }));
    }
    if (initialData?.checkOut) {
      setFormData((prev) => ({ ...prev, checkOut: initialData.checkOut || '' }));
    }
    if (initialData?.guests) {
      setFormData((prev) => ({ ...prev, guests: initialData.guests || 2 }));
    }
  }, [defaultCottageId, initialData, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const selectedCottage = COTTAGES.find((c) => c.id === formData.cottageId) || COTTAGES[0];

  const whatsAppUrl = useMemo(() => {
    const text = `Hello Heritage Lodge, Habuharo!
I would like to inquire about a booking reservation:
• Cottage: ${selectedCottage.name} ($${selectedCottage.priceUSD} / ${selectedCottage.priceUGX.toLocaleString()} UGX per night)
• Check-in: ${formData.checkIn || 'To be confirmed'}
• Check-out: ${formData.checkOut || 'To be confirmed'}
• Number of Guests: ${formData.guests}
• Private Boat Transfer: ${formData.boatTransferNeeded ? 'Yes, please coordinate boat pickup' : 'Not required'}
• Guest Name: ${formData.name || 'Traveler'}
• Contact Phone: ${formData.phone || 'Provided via WhatsApp'}
${formData.specialRequests ? `• Special Requests: ${formData.specialRequests}` : ''}

Please confirm availability and payment details. Thank you!`;

    return `https://wa.me/256703606114?text=${encodeURIComponent(text)}`;
  }, [selectedCottage, formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto touch-scroll bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-6 text-stone-900 border border-stone-200">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            id="close-booking-modal-btn"
            className="absolute top-3.5 right-3.5 min-w-[44px] min-h-[44px] rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Close reservation dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-1">
            Habuharo Island Direct Reservation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Reserve Your Island Stay
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Book directly with Heritage Lodge for best guaranteed rates, free breakfast, and priority boat transfers.
          </p>
        </div>

        {submitted ? (
          /* Confirmation State */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Inquiry Received!
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-stone-800">{formData.name || 'valued guest'}</span>! To ensure instant confirmation and coordinate your island boat pickup, you can finalize right now with our island host on WhatsApp.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-500">Reserved Cottage:</span>
                <span className="font-semibold text-stone-900">{selectedCottage.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Guests:</span>
                <span className="font-semibold text-stone-900">{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Dates:</span>
                <span className="font-semibold text-stone-900">
                  {formData.checkIn || 'TBD'} to {formData.checkOut || 'TBD'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Rate:</span>
                <span className="font-semibold text-amber-700 font-serif text-sm">
                  ${selectedCottage.priceUSD} / night ({selectedCottage.priceUGX.toLocaleString()} UGX)
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-confirm-whatsapp-btn"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp (+256 703 606114)</span>
              </a>

              <a
                href={`tel:${LODGE_INFO.phone}`}
                id="modal-confirm-call-btn"
                className="w-full sm:w-auto min-h-[44px] px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Direct Call</span>
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              id="modal-done-btn"
              className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto pt-2 min-h-[44px] py-2"
            >
              Close this window
            </button>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5">
            {/* Cottage Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Select Cottage / Banda
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COTTAGES.map((c) => (
                  <button
                    type="button"
                    key={c.id}
                    onClick={() => setFormData({ ...formData, cottageId: c.id })}
                    id={`select-cottage-opt-${c.id}`}
                    className={`p-3 rounded-xl border text-left transition-all min-h-[56px] ${
                      formData.cottageId === c.id
                        ? 'border-amber-600 bg-amber-50/70 shadow-xs ring-1 ring-amber-500'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-xs text-stone-900">{c.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-stone-500">
                      <span>{c.capacity}</span>
                      <span className="font-serif font-bold text-amber-700 text-xs">
                        ${c.priceUSD} / nt
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Check-in Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    id="booking-checkin-input"
                    className="w-full min-h-[44px] pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-base sm:text-xs text-stone-800 focus:outline-none focus:border-amber-600 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Check-out Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    id="booking-checkout-input"
                    className="w-full min-h-[44px] pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-base sm:text-xs text-stone-800 focus:outline-none focus:border-amber-600 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Guests & Boat Transfer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    id="booking-guests-select"
                    className="w-full min-h-[44px] pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-base sm:text-xs text-stone-800 focus:outline-none focus:border-amber-600 bg-white"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests (Family / Group)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center pt-2 sm:pt-5">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-stone-700 select-none min-h-[44px]">
                  <input
                    type="checkbox"
                    checked={formData.boatTransferNeeded}
                    onChange={(e) => setFormData({ ...formData, boatTransferNeeded: e.target.checked })}
                    id="booking-boat-transfer-checkbox"
                    className="w-5 h-5 rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="flex items-center gap-1.5 font-medium">
                    <Ship className="w-4 h-4 text-sky-700" />
                    <span>Include Mainland Boat Pickup</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Henderson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  id="booking-name-input"
                  required
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-stone-300 text-base sm:text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-600 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +256 703 606114"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  id="booking-phone-input"
                  required
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-stone-300 text-base sm:text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-600 bg-white"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Dietary preferences, gorilla trekking assistance, estimated arrival time in Kabale..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                id="booking-notes-textarea"
                className="w-full p-3 rounded-xl border border-stone-300 text-base sm:text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-600 bg-white"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="booking-send-whatsapp-direct-btn"
                className="w-full sm:flex-1 min-h-[44px] py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Inquiry via WhatsApp</span>
              </a>

              <button
                type="submit"
                id="booking-submit-btn"
                className="w-full sm:w-auto min-h-[44px] py-3 px-6 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-md transition-all"
              >
                Submit Request
              </button>
            </div>

            <p className="text-[11px] text-stone-500 text-center">
              Direct lodge contact: <span className="font-semibold text-stone-700">{LODGE_INFO.phone}</span> (Call & WhatsApp) • No prepayment required to inquire.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
