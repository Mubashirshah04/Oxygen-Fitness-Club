import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const IntroductionSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-slate-200/70 relative overflow-hidden">
      {/* Subtle geometric background accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] [background-size:4rem_4rem]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-blue-600 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              THE OXYGEN APPROACH
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 font-display leading-[1.15] text-balance mb-8">
            MAKE MOVEMENT PART OF YOUR DAY.
          </h2>

          {/* Copy paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <p>
              Oxygen Fitness Club is located at Gull Zareen Plaza on Najmudin Road, near Gurdat Singh Road in Quetta.
            </p>
            <p>
              A dedicated place for people looking to make fitness and regular movement part of their routine.
            </p>
          </div>

          {/* Key verified highlights - factual only */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Accessible Quetta Location</h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Situated at Gull Zareen Plaza along Najmudin Road, accessible for daily workout sessions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Direct Inquiries Welcome</h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Reach out directly by phone ({BUSINESS_INFO.phone}) for current membership openings and schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
