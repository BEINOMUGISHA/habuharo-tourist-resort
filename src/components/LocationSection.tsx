import React from 'react';
import { MapPin, Navigation, Car, Ship, Plane, Phone, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { LODGE_INFO } from '../data/lodgeData';
import { LakeBunyonyiWeather } from './LakeBunyonyiWeather';
import { IslandMapHighlights } from './IslandMapHighlights';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 block mb-2">
            Getting to Habuharo Island
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Location & Island Access
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-stone-300 text-base leading-relaxed">
            Perched on serene Habuharo Island within Lake Bunyonyi, Kabale District, Southwestern Uganda. A peaceful boat ride separates you from the mainland.
          </p>
        </div>

        {/* Interactive Island Map Highlights Component */}
        <IslandMapHighlights />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Route Guide & Transport */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location Banner Card */}
            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 shadow-xl">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {LODGE_INFO.name}
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {LODGE_INFO.address}
                  </p>
                  <p className="text-xs text-emerald-400 font-mono mt-1">
                    Google Plus Code: {LODGE_INFO.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2 border-t border-stone-800">
                <a
                  href={LODGE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="open-google-maps-btn"
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <a
                  href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20am%20heading%20towards%20Lake%20Bunyonyi.%20Can%20you%20confirm%20boat%20transfer%20pickup?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="boat-transfer-whatsapp-btn"
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors border border-emerald-500/30"
                >
                  <Ship className="w-3.5 h-3.5" />
                  <span>Schedule Boat Pickup</span>
                </a>
              </div>
            </div>

            {/* Step-by-Step Arrival Steps */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-stone-950/60 border border-stone-800/80">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                    <Car className="w-4 h-4 text-emerald-400" />
                    <span>Arrival in Kabale & Mainland Landing</span>
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    From Kabale town, take the scenic 20-30 minute road to the Lake Bunyonyi landing site (Rutinda Jetty or Kashasha landing). Secure, guarded vehicle parking is available on the mainland for guests driving personal cars.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-stone-950/60 border border-stone-800/80">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                    <Ship className="w-4 h-4 text-sky-400" />
                    <span>Private Island Boat Cruise (15 - 20 mins)</span>
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Our private motorized boat meets you directly at the landing. Enjoy a breathtaking lake cruise past lush hills and bird colonies straight to Heritage Lodge’s private dock on Habuharo Island.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-stone-950/60 border border-stone-800/80">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Luggage Assistance & Island Welcome</span>
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Our team takes care of all baggage and guides you up to your private wooden cottage with a refreshing complimentary welcome drink.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Travel Times & Contact Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 shadow-xl">
              <h3 className="font-serif text-lg font-bold text-white mb-4">
                Typical Travel Durations
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-800">
                  <span className="text-stone-300">From Kabale Town</span>
                  <span className="font-semibold text-amber-400">20 - 30 Mins (Road + Boat)</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-800">
                  <span className="text-stone-300">From Kigali, Rwanda</span>
                  <span className="font-semibold text-stone-200">2.5 - 3 Hours (Via Katuna Border)</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-800">
                  <span className="text-stone-300">From Bwindi (Gorilla Trek)</span>
                  <span className="font-semibold text-stone-200">1.5 - 2 Hours</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-stone-800">
                  <span className="text-stone-300">From Kampala / Entebbe</span>
                  <span className="font-semibold text-stone-200">6.5 - 7.5 Hours (or 1 hr flight to Kisoro)</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Notice */}
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 text-left">
              <h4 className="font-serif text-base font-bold text-emerald-200 mb-2">
                Need Help Coordinating Your Pickup?
              </h4>
              <p className="text-xs text-emerald-300/80 leading-relaxed mb-4">
                Call or WhatsApp our manager prior to reaching Kabale so our boat captain is primed at the landing dock ready for your arrival.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${LODGE_INFO.phone}`}
                  id="location-call-captain-btn"
                  className="flex-1 min-h-[44px] py-3 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-stone-700"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call {LODGE_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20am%20inquiring%20about%20directions%20and%20boat%20transfer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-whatsapp-captain-btn"
                  className="flex-1 min-h-[44px] py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Pickup</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Lake Bunyonyi Weather Forecast & Travel Advisory */}
        <LakeBunyonyiWeather />
      </div>
    </section>
  );
};
