import React from 'react';
import { Phone, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { IMAGES } from '../assets/images';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Fitness Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 aspect-3/4 max-w-md mx-auto lg:max-w-none">
              <img
                src={IMAGES.aboutEditorial}
                alt="Editorial lifestyle photography of athletic functional training with soft natural window shadows"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent"
              />

              <div className="absolute bottom-4 left-4 right-4 text-white text-[11px] font-medium opacity-90 drop-shadow-sm">
                Conceptual imagery used for visual presentation.
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Small Label */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">
              <span className="w-6 h-[2px] bg-blue-600 rounded-full" />
              <span>ABOUT OXYGEN</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 font-display leading-[1.12] mb-6 text-balance">
              A PLACE TO KEEP MOVING.
            </h2>

            {/* Copy paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              <p>
                Oxygen Fitness Club is located in Quetta at Gull Zareen Plaza on Najmudin Road, near Gurdat Singh Road.
              </p>
              <p>
                For current membership information, available facilities and training options, contact the gym directly.
              </p>
            </div>

            {/* Verified Location & Contact Cards */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 mb-8">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Location Address
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Gull Zareen Plaza, Najmudin Road, near Gurdat Singh Road, Quetta, Balochistan, Pakistan
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/70 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Direct Phone Inquiries
                </span>
                <span className="flex items-center gap-1 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Local Quetta Gym Listing
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
