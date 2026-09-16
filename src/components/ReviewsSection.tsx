import React from 'react';
import { Star, ExternalLink, Quote, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { REVIEWS, LODGE_INFO } from '../data/lodgeData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Score Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-800 block mb-2">
              Guest Testimonials & Trust
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 leading-tight">
              Loved by Travelers Worldwide
            </h2>
            <p className="mt-3 text-stone-600 text-base max-w-2xl">
              Discover what visitors from across the globe say about their island stay, the boat journey, and our warm hospitality on Habuharo Island.
            </p>
          </div>

          {/* Google Score Summary Card */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm flex items-center gap-6 self-start lg:self-auto">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-4xl font-bold text-stone-900">
                  {LODGE_INFO.rating}
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                Based on <span className="font-bold text-stone-800">{LODGE_INFO.reviewCount} Google Reviews</span>
              </p>
            </div>

            <div className="border-l border-stone-200 pl-6">
              <a
                href={LODGE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="view-google-reviews-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>View on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Rating Category Breakdown */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
            <span className="text-xs text-stone-500 block mb-1">Island Scenery & Peace</span>
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-emerald-800">4.9 / 5</span>
              <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Exceptional</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
            <span className="text-xs text-stone-500 block mb-1">Staff & Hospitality</span>
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-emerald-800">4.8 / 5</span>
              <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Warm & Caring</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
            <span className="text-xs text-stone-500 block mb-1">Cottage Comfort</span>
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-emerald-800">4.6 / 5</span>
              <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Rustic Luxury</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70">
            <span className="text-xs text-stone-500 block mb-1">Boat Access & Service</span>
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-emerald-800">4.7 / 5</span>
              <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Smooth Transfer</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(Math.floor(rev.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-500 font-medium">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-amber-600/20 mb-2" />

                <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {rev.origin}
                  </p>
                </div>

                <span className="text-[11px] px-2.5 py-1 rounded-full bg-stone-200 text-stone-700 font-medium">
                  {rev.travelerType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
