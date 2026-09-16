import React from 'react';
import { Compass, Leaf, Droplets, Bird, Mountain, HeartHandshake } from 'lucide-react';
import { LODGE_INFO } from '../data/lodgeData';

export const AboutIsland: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-800 block mb-2">
            The Habuharo Island Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            A Tranquil Haven In The Heart of Lake Bunyonyi
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Lake Bunyonyi—renowned worldwide as Uganda’s scenic jewel—is dotted with 29 mythical emerald islands.
            Set peacefully on secluded Habuharo Island, Heritage Lodge was thoughtfully crafted to offer visitors
            an authentic escape into nature’s stillness, away from the bustling mainland roads.
          </p>
        </div>

        {/* Feature Grid with Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]">
              <img
                src="/images/habuharo-island.jpg"
                alt="Habuharo Island and Lake Bunyonyi calm waters"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-medium border border-stone-700">
                Habuharo Island • 1,962m Elevation
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md aspect-video relative group">
                <img
                  src="/images/heritage-boat-ride.jpg"
                  alt="Heritage Lodge boat transfer on Lake Bunyonyi"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 text-[10px] bg-stone-900/80 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                  Island Boat Transfer
                </span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md aspect-video relative group">
                <img
                  src="/images/heritage-lodge-habuharo-island.jpg"
                  alt="Heritage Lodge wooden bandas on Habuharo Island"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 text-[10px] bg-stone-900/80 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                  Eco Bandas & Nature
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
                    Safe, Pure Volcanic Water
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Lake Bunyonyi is celebrated as one of Africa’s few freshwater lakes that is completely free of bilharzia parasites, dangerous crocodiles, or hippos. Guests can swim freely and safely right from our private island pier.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
                    Eco-Conscious Architecture
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Every cottage was built using local volcanic stone, eucalyptus woodwork, and grass-thatched roofs that blend seamlessly with Habuharo’s native trees. Solar power provides clean electricity and hot showers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                  <Mountain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
                    Gateway to Gorilla Trekking
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Located only 1.5 to 2 hours from Bwindi Impenetrable and Mgahinga National Parks, Heritage Lodge is the preferred relaxing retreat for adventurers preparing for or unwinding from mountain gorilla encounters.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
                    Warm Ugandan Island Hospitality
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Our team comprises local residents of Habuharo and neighboring Kashasha who take immense pride in sharing island folklore, preparing fresh lake meals, and ensuring your stay feels like home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stat Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-stone-900 text-white p-8 rounded-2xl shadow-xl">
          <div className="text-center p-2">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-amber-400 block mb-1">29</span>
            <span className="text-xs sm:text-sm text-stone-300 font-medium">Islands to Explore</span>
          </div>
          <div className="text-center p-2 border-l border-stone-800">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-emerald-400 block mb-1">200+</span>
            <span className="text-xs sm:text-sm text-stone-300 font-medium">Bird Species Recorded</span>
          </div>
          <div className="text-center p-2 border-l border-stone-800">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-sky-400 block mb-1">1,962m</span>
            <span className="text-xs sm:text-sm text-stone-300 font-medium">Highland Altitude (Cool Nights)</span>
          </div>
          <div className="text-center p-2 border-l border-stone-800">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-amber-400 block mb-1">4.5 ★</span>
            <span className="text-xs sm:text-sm text-stone-300 font-medium">Google Rating (50 Reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
