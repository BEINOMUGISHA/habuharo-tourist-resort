import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Compass, Star, MapPin } from 'lucide-react';
import { LODGE_INFO } from '../data/lodgeData';

interface NavbarProps {
  onOpenBooking: (cottageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background jumps on iOS/Android
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Cottages', href: '#cottages' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Dining', href: '#dining' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Access', href: '#location' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for direct contact & ratings */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{LODGE_INFO.rating}</span>
              <span className="text-stone-400 font-normal">({LODGE_INFO.reviewCount} Google Reviews)</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-stone-400">
              <MapPin className="w-3 h-3 text-emerald-500" />
              <span>Habuharo Island, Lake Bunyonyi, Uganda</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-200">
            <a
              href={`tel:${LODGE_INFO.phone}`}
              id="topbar-call-link"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call: {LODGE_INFO.phone}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge%20Habuharo,%20I%20would%20like%20to%20inquire%20about%20staying%20at%20your%20island%20lodge.`}
              target="_blank"
              rel="noopener noreferrer"
              id="topbar-whatsapp-link"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3 fill-emerald-400/20" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-stone-800/80 py-3'
            : 'bg-stone-900/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 shadow-md group-hover:scale-105 transition-transform bg-stone-800 shrink-0">
              <img
                src="/images/brand.jpg"
                alt="Heritage Lodge emblem"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to compass icon if emblem fails to load
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wide text-stone-100 group-hover:text-amber-300 transition-colors">
                Heritage Lodge
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-emerald-400 font-medium">
                Habuharo Island • Lake Bunyonyi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-200">
            {navLinks.map((link) => (
              <button
                key={link.name}
                id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-amber-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge,%20I%20would%20like%20to%20check%20availability%20for%20a%20cottage.`}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide border border-emerald-500/40 transition-all shadow-sm hover:shadow"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="nav-book-cottage-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
            >
              <span>Book Cottage</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-stone-800 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Backdrop */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 top-[110px] bg-stone-950/80 backdrop-blur-xs z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <div className="relative z-50 lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-8 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200 max-h-[calc(100vh-120px)] overflow-y-auto touch-scroll safe-pb">
              <div className="space-y-1 pt-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full min-h-[44px] text-left px-3.5 py-3 rounded-xl text-sm font-medium text-stone-200 hover:bg-stone-800 hover:text-amber-300 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-stone-500 text-xs">→</span>
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-stone-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  id="mobile-book-now-btn"
                  className="w-full min-h-[44px] py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold text-center transition-colors shadow flex items-center justify-center"
                >
                  Book a Cottage
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${LODGE_INFO.phone}`}
                    id="mobile-call-btn"
                    className="inline-flex min-h-[44px] items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-800 text-stone-200 hover:bg-stone-700 text-xs font-medium border border-stone-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Lodge</span>
                  </a>
                  <a
                    href={`https://wa.me/256703606114?text=Hello%20Heritage%20Lodge%20Habuharo,%20I%20am%20interested%20in%20booking%20a%20stay.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="mobile-whatsapp-btn"
                    className="inline-flex min-h-[44px] items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-700/90 text-white hover:bg-emerald-600 text-xs font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
