import React, { useState } from 'react';
import { Activity, Dumbbell, Wind, ArrowRight, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { IMAGES } from '../assets/images';

interface ExperiencePillar {
  id: string;
  title: string;
  tagline: string;
  conceptNote: string;
  description: string;
  icon: React.ElementType;
  image: string;
  alt: string;
}

const PILLARS: ExperiencePillar[] = [
  {
    id: 'move',
    title: 'MOVE',
    tagline: 'Active Movement & Rhythm',
    conceptNote: 'Conceptual Theme',
    description:
      'A visual celebration of kinetic energy, dynamic movement, and regular daily activity. Emphasizing agility, stamina, and showing up consistently.',
    icon: Activity,
    image: IMAGES.moveTrain,
    alt: 'Dynamic bodyweight workout in a brightly lit fitness environment with natural light',
  },
  {
    id: 'train',
    title: 'TRAIN',
    tagline: 'Focused Strength & Discipline',
    conceptNote: 'Conceptual Theme',
    description:
      'A visual representation of targeted discipline and progressive strength. Dedicated focus on form, conditioning, and structured effort.',
    icon: Dumbbell,
    image: IMAGES.strengthFocus,
    alt: 'Clean barbell weights in a modern light gym interior with morning light',
  },
  {
    id: 'reset',
    title: 'RESET',
    tagline: 'Breathing, Recovery & Vitality',
    conceptNote: 'Conceptual Theme',
    description:
      'A visual representation of intentional recovery, oxygen intake, and calm mental rejuvenation to sustain a long-term active lifestyle.',
    icon: Wind,
    image: IMAGES.resetEnergy,
    alt: 'Athlete taking a refreshing break in a sunlit studio, hydrating and breathing',
  },
];

export const ExperienceSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<ExperiencePillar | null>(null);

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">
            <span>PERSPECTIVE</span>
            <span aria-hidden="true">·</span>
            <span>MODERN WELLNESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 font-display mb-4 text-balance">
            THE FITNESS EXPERIENCE
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Three conceptual pillars illustrating the daily momentum of physical fitness.
          </p>

          <p className="text-xs text-slate-500 mt-2 italic">
            * Note: These are design themes representing an active lifestyle, not distinct commercial programs. For current facility information, contact the club directly.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"
                  />
                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold text-slate-800 uppercase tracking-wider">
                    {pillar.conceptNote}
                  </div>
                  <div className="absolute bottom-3.5 left-4 text-white">
                    <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">
                      {pillar.tagline}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight text-slate-950 font-display">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedPillar(pillar)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                    >
                      <span>Explore {pillar.title} Concept</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption below */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Conceptual imagery used for visual presentation.
          </p>
        </div>
      </div>

      {/* Detail Modal for Pillar */}
      {selectedPillar && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
          onClick={() => setSelectedPillar(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/9 bg-slate-100">
              <img
                src={selectedPillar.image}
                alt={selectedPillar.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPillar(null)}
                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 text-xs font-semibold text-white drop-shadow-md">
                Conceptual Theme: {selectedPillar.title}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {selectedPillar.tagline}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-display mb-3">
                {selectedPillar.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {selectedPillar.description}
              </p>
              <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-600 mb-6">
                <strong>Direct Inquiries:</strong> Oxygen Fitness Club is located on Najmudin Road, Quetta. To learn about current schedules and membership terms, reach out directly.
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPillar(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
