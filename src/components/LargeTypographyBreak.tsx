import React, { useEffect, useState, useRef } from 'react';

export const LargeTypographyBreak: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetRatio, setOffsetRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffsetRatio(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden"
    >
      {/* Background delicate linear rays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-start justify-center">
          {/* Subtle conceptual label */}
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-6 sm:mb-8">
            <span className="w-8 h-[2px] bg-blue-600" />
            <span>THE RHYTHM OF OXYGEN</span>
          </div>

          {/* Huge typography */}
          <div className="text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-slate-950 font-display leading-[0.98] select-none">
            <div
              style={{
                transform: `translateX(${(offsetRatio - 0.5) * -18}px)`,
                transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="text-slate-900"
            >
              MORE
            </div>
            <div
              style={{
                transform: `translateX(${(offsetRatio - 0.5) * 22}px)`,
                transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              MOVEMENT.
            </div>
            <div
              style={{
                transform: `translateX(${(offsetRatio - 0.5) * -14}px)`,
                transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="text-slate-900"
            >
              MORE
            </div>
            <div
              style={{
                transform: `translateX(${(offsetRatio - 0.5) * 18}px)`,
                transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="text-sky-600"
            >
              ENERGY.
            </div>
          </div>

          {/* Minimalist grounding line */}
          <div className="mt-10 sm:mt-14 max-w-xl text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Finding vitality through everyday commitment. Located at Gull Zareen Plaza, Najmudin Road, Quetta.
          </div>
        </div>
      </div>
    </section>
  );
};
