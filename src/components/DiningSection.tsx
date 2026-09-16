import React from 'react';
import { Utensils, Coffee, Wine, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { DINING_HIGHLIGHTS, LODGE_INFO } from '../data/lodgeData';

export const DiningSection: React.FC = () => {
  return (
    <section id="dining" className="py-24 bg-stone-100 text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-800 block mb-2">
            Island Culinary Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 mb-4 leading-tight">
            Fresh Lake Bunyonyi Dining
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 text-base leading-relaxed">
            Savor authentic local delicacies prepared fresh with herbs and organic vegetables harvested from Kigezi’s terraced volcanic slopes, complemented by Lake Bunyonyi’s world-renowned crayfish.
          </p>
        </div>

        {/* Highlights 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {DINING_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-amber-300 text-[11px] font-semibold uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dining Feature Banner */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Dining Requests</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Candlelit Pier Dinners & Gorilla Trekking Packed Lunches
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Heading early into Bwindi for gorilla tracking? Our kitchen prepares hearty early-morning breakfast boxes and packed sandwiches with highland fruits. Vegetarian, vegan, and special dietary requirements are happily accommodated.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-emerald-400" />
                  <span>Full Island Breakfast Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-amber-400" />
                  <span>Artisan Arabica Coffee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4 text-rose-400" />
                  <span>Pier Sunset Bar & Cocktails</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20would%20like%20to%20reserve%20a%20table%20or%20inquire%20about%20meals%20at%20your%20island%20restaurant.`}
                target="_blank"
                rel="noopener noreferrer"
                id="dining-whatsapp-btn"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire Meal Reservations</span>
              </a>

              <a
                href={`tel:${LODGE_INFO.phone}`}
                id="dining-call-btn"
                className="w-full py-3.5 px-6 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-semibold text-xs tracking-wide border border-stone-700 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Kitchen: {LODGE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
