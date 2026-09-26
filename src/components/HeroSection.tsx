import React, { useState } from 'react';
import { Phone, MapPin, ArrowRight, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { IMAGES } from '../assets/images';

export const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle geometric light lines in background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-100/40 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl -ml-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata / Verified Location Marker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 sm:mb-6">
              <span className="text-blue-600 font-bold">Najmudin Road</span>
              <span aria-hidden="true">·</span>
              <span>Quetta</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-slate-700">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="tabular-nums font-bold">{BUSINESS_INFO.rating}</span>
                <span className="text-slate-400 font-normal">({BUSINESS_INFO.reviewCount} reviews)</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-950 font-display leading-[1.08] text-balance mb-6">
              MOVE. <br />
              <span className="text-blue-700">BREATHE.</span> <br />
              BECOME.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
              Oxygen Fitness Club — a dedicated fitness destination on Najmudin Road, Quetta.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Phone className="w-5 h-5" />
                <span>Call Oxygen</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs hover:border-slate-300 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4 text-slate-400 ml-0.5" />
              </a>
            </div>

            {/* Quick trust notes */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Google Business
              </span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>Gull Zareen Plaza</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>Direct Phone Support</span>
            </div>
          </div>

          {/* Right Column: Hero Visual + Floating Location Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Visual Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 aspect-16/10 sm:aspect-4/3 lg:aspect-5/6">
              {/* Fallback pattern while image loads */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center text-slate-400 text-xs">
                  Loading visual...
                </div>
              )}

              <img
                src={IMAGES.hero}
                alt="Bright, modern architectural fitness atmosphere with natural daylight and athletic movement"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-transform duration-700 hover:scale-102 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Scrim overlay at the base for contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none"
              />

              {/* Tiny conceptual disclaimer on bottom edge of image */}
              <div className="absolute bottom-3 left-4 right-4 text-[11px] text-white/90 drop-shadow-sm font-medium">
                Conceptual imagery used for visual presentation.
              </div>
            </div>

            {/* Floating Information Card */}
            <div className="relative lg:absolute lg:-bottom-8 lg:-left-10 mt-4 lg:mt-0 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xl max-w-sm sm:max-w-md w-full">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h2 className="text-sm font-black uppercase tracking-wider text-blue-700">
                    OXYGEN FITNESS CLUB
                  </h2>
                  <p className="text-base font-bold text-slate-900 mt-0.5">
                    Gull Zareen Plaza
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Najmudin Road, Quetta
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2 py-1 rounded-md text-amber-900 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.8</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
