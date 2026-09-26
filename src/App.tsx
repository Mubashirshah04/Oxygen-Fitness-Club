import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { ExperienceSection } from './components/ExperienceSection';
import { LargeTypographyBreak } from './components/LargeTypographyBreak';
import { FitnessVisualGrid } from './components/FitnessVisualGrid';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from './data/business';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <IntroductionSection />
        <ExperienceSection />
        <LargeTypographyBreak />
        <FitnessVisualGrid />
        <AboutSection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Mobile Sticky Quick Contact Pill Bar (capped < 15% viewport height) */}
      <aside
        aria-label="Quick contact actions"
        className="md:hidden fixed bottom-3 left-4 right-4 z-40 bg-slate-950/90 backdrop-blur-md text-white rounded-2xl p-2.5 shadow-2xl border border-white/15 flex items-center justify-between gap-2"
      >
        <div className="flex flex-col pl-2">
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400">
            Oxygen Quetta
          </span>
          <span className="text-xs font-bold text-white tabular-nums">
            {BUSINESS_INFO.phoneDisplay}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Inquiry"
            className="p-2.5 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs active:bg-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
