import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100 items-start">
          {/* Brand & Location Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-950 font-display">
                OXYGEN FITNESS CLUB
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                {BUSINESS_INFO.category}
              </span>
            </div>

            <div className="pt-2 text-sm text-slate-600 space-y-1.5 max-w-md">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2 font-semibold text-slate-900">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-blue-600 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Action & Back to top */}
          <div className="md:col-span-2 flex flex-col items-start md:items-end justify-between self-stretch">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 bg-slate-50 transition-colors"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>

            <div className="text-right hidden md:block pt-6">
              <span className="text-xs font-bold text-slate-400">Rating</span>
              <p className="text-sm font-black text-slate-900">4.8 ★ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Truth in Advertising Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Oxygen Fitness Club, Quetta. All rights reserved.</p>
          <p className="text-center sm:text-right text-[11px] text-slate-400">
            Conceptual imagery used for visual presentation. For current membership and schedule, contact the gym directly.
          </p>
        </div>
      </div>
    </footer>
  );
};
