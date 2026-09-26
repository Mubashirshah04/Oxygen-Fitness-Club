import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, Copy, Check, Navigation, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_INFO.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="location" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>NEIGHBORHOOD & ACCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 font-display mb-4 text-balance">
            FIND YOUR WAY TO OXYGEN.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently situated in Quetta at Gull Zareen Plaza on Najmudin Road, close to Gurdat Singh Road.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Verified Location Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {BUSINESS_INFO.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Gym & Fitness Club · Quetta
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-1 rounded-md">
                  Active
                </span>
              </div>

              {/* Address Block */}
              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Physical Address
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-slate-900 mt-1 leading-snug">
                    {BUSINESS_INFO.address.full}
                  </p>
                </div>

                {/* Landmarks */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-400 font-medium">Plaza</span>
                    <p className="font-bold text-slate-800 mt-0.5">{BUSINESS_INFO.address.building}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-400 font-medium">Major Road</span>
                    <p className="font-bold text-slate-800 mt-0.5">{BUSINESS_INFO.address.street}</p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Telephone
                  </span>
                  <p className="mt-1">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-lg font-bold text-blue-700 hover:text-blue-800 transition-colors inline-flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{BUSINESS_INFO.phone}</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <Navigation className="w-4 h-4 text-blue-600" />
                  <span>Get Directions</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Address Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Full Address for Taxi / Delivery</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Interactive Map Container */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs bg-slate-100 min-h-[380px] sm:min-h-[460px] relative">
            {/* Map Header Bar */}
            <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-medium text-slate-700 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-bold">Najmudin Road Map View</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className="flex-1 w-full h-full relative min-h-[340px]">
              <iframe
                title="Oxygen Fitness Club Quetta Location"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Map bottom guidance strip */}
            <div className="bg-white/95 backdrop-blur-xs px-4 py-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span>Postal Area: Quetta 87300, Balochistan</span>
              <span className="font-medium text-slate-700">Landmark: near Gurdat Singh Road</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
