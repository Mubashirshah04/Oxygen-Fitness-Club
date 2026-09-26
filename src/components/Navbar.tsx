import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/business';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-[#FBFBFC]/90 backdrop-blur-xs border-b border-slate-200/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Zone: Clean, human typographic lockup */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-display transition-colors group-hover:text-blue-700">
              OXYGEN
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.24em] text-blue-600 -mt-0.5">
              FITNESS CLUB
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean text, subtle hover) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Info */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-blue-600 py-2.5 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600 active:bg-blue-700 rounded-lg shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Get Directions (Najmudin Rd)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
