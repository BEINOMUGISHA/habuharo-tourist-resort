import React, { useState } from 'react';
import { Clock, CheckCircle2, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { EXPERIENCES, LODGE_INFO } from '../data/lodgeData';
import { Experience } from '../types';

export const ExperiencesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Water', 'Wildlife', 'Culture', 'Adventure'];

  const filteredExperiences =
    activeCategory === 'All'
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.category === activeCategory);

  return (
    <section id="experiences" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 block mb-2">
            Curated Island Adventures
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            The Habuharo Island Experience
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-stone-300 text-base leading-relaxed">
            From silent morning canoe glides across mist-covered waters to evening campfires beneath star-filled equatorial skies, Habuharo Island offers indelible moments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`filter-cat-${cat.toLowerCase()}`}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700'
              }`}
            >
              {cat === 'All' ? 'All Experiences' : cat}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className="bg-stone-950/80 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wider border border-stone-700">
                      {exp.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-stone-200 text-xs font-medium border border-stone-800">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800/80 mb-2">
                    <div className="flex items-start gap-2 text-xs text-amber-200/90">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{exp.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(exp.title)}%20experience.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`experience-book-${exp.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-emerald-700 text-stone-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-stone-700 hover:border-emerald-600"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
