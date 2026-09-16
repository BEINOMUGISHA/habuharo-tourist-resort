import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS, LODGE_INFO } from '../data/lodgeData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-800 block mb-2">
            Essential Travel Information
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base">
            Everything you need to know about planning your stay on Habuharo Island, Lake Bunyonyi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  id={`faq-toggle-${index}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-stone-50/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-100 text-amber-800' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-1">
              Have a Specific Question or Custom Safari Itinerary?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Speak directly with our island hosts. We are happy to coordinate special arrangements.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${LODGE_INFO.phone}`}
              id="faq-call-btn"
              className="py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors"
            >
              Call {LODGE_INFO.phone}
            </a>
            <a
              href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20have%20a%20question%20regarding%20my%20upcoming%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              id="faq-whatsapp-btn"
              className="py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
