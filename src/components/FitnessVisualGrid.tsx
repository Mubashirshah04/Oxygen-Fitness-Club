import React, { useState } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface VisualItem {
  id: string;
  title: string;
  conceptSubtitle: string;
  image: string;
  alt: string;
  spanClass: string;
}

const VISUALS: VisualItem[] = [
  {
    id: 'movement',
    title: 'Movement',
    conceptSubtitle: 'Kinetic Agility & Cardio Cadence',
    image: IMAGES.moveTrain,
    alt: 'Conceptual photo: athlete performing agility training in a sunlit spacious gym environment',
    spanClass: 'md:col-span-8 md:row-span-2 aspect-16/10 md:aspect-auto',
  },
  {
    id: 'strength',
    title: 'Strength',
    conceptSubtitle: 'Disciplined Resistance & Power',
    image: IMAGES.strengthFocus,
    alt: 'Conceptual photo: precision weight plates and barbell on clean gym floor in morning light',
    spanClass: 'md:col-span-4 aspect-4/3',
  },
  {
    id: 'focus',
    title: 'Focus',
    conceptSubtitle: 'Form, Posture & Mental Clarity',
    image: IMAGES.aboutEditorial,
    alt: 'Conceptual photo: focused athletic training posture in a clean light-filled fitness room',
    spanClass: 'md:col-span-4 aspect-4/3',
  },
  {
    id: 'energy',
    title: 'Energy',
    conceptSubtitle: 'Post-Workout Vitality & Breath',
    image: IMAGES.resetEnergy,
    alt: 'Conceptual photo: athlete drinking water and breathing deeply in a sunny wellness studio',
    spanClass: 'md:col-span-12 aspect-16/9 sm:aspect-21/9',
  },
];

export const FitnessVisualGrid: React.FC = () => {
  const [selectedVisual, setSelectedVisual] = useState<VisualItem | null>(null);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>VISUAL CURATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 font-display">
              FITNESS IN FOUR VISIONS
            </h2>
          </div>

          <div className="text-xs text-slate-500 max-w-sm">
            Exploration of physical dynamism through athletic form, light, and modern spatial architecture.
          </div>
        </div>

        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {VISUALS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVisual(item)}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-100 ${item.spanClass}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />

              {/* Gradient Scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between text-white pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    {item.title}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    {item.conceptSubtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Caption */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 font-medium">
            “Conceptual imagery used for visual presentation.”
          </p>
        </div>
      </div>

      {/* Lightbox / Zoom Dialog */}
      {selectedVisual && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedVisual(null)}
        >
          <div
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-700/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-black">
              <img
                src={selectedVisual.image}
                alt={selectedVisual.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedVisual(null)}
                className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold font-display text-white">
                  {selectedVisual.title} — {selectedVisual.conceptSubtitle}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Conceptual imagery used for visual presentation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedVisual(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg self-start sm:self-auto transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
