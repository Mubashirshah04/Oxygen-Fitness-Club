import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Membership & Timings Inquiry');
  const [notes, setNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Generate formatted WhatsApp message URL
    const message = encodeURIComponent(
      `Hello Oxygen Fitness Club,\n\nMy name is ${name}.\nTopic: ${topic}\n${notes ? `Message: ${notes}` : ''}\n\nI would like more information about the gym at Gull Zareen Plaza, Quetta.`
    );
    const whatsappLink = `https://wa.me/923168297978?text=${message}`;

    setFormSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Large subtle movement-inspired circular background accent */}
      <div
        aria-hidden="true"
        className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-linear-to-br from-blue-700 via-blue-800 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle movement wave graphic line in card background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >
            <path
              d="M0,250 C300,100 400,400 700,200 C850,100 950,300 1000,250 L1000,500 L0,500 Z"
              fill="white"
            />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Column: Heading and Core CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-xs text-xs font-bold tracking-widest uppercase text-sky-200 mb-6">
                GET IN TOUCH
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display mb-6 leading-[1.08] text-balance">
                READY TO MOVE?
              </h2>

              <p className="text-base sm:text-xl text-blue-100 font-normal leading-relaxed max-w-xl mb-8">
                Contact Oxygen Fitness Club for current membership, schedule and gym information.
              </p>

              {/* Verified Information Badges */}
              <div className="space-y-2 mb-8 text-sm text-blue-100/90 font-medium">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Gull Zareen Plaza, Najmudin Road, near Gurdat Singh Road, Quetta</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Direct phone line: {BUSINESS_INFO.phone}</span>
                </p>
              </div>

              {/* Primary & Secondary Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-slate-950 bg-white hover:bg-sky-50 active:bg-slate-100 rounded-xl shadow-md transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Phone className="w-5 h-5 text-blue-700" />
                  <span>Call Oxygen Fitness Club</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-white bg-blue-600/80 hover:bg-blue-600 border border-blue-400/40 rounded-xl transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Message / Inquiry Helper */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-xl border border-white/20">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-950 font-display">
                    Quick Inquiry Helper
                  </h3>
                  <p className="text-xs text-slate-500">
                    Connects directly to Oxygen via WhatsApp
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Inquiry Prepared</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Your inquiry has been opened in WhatsApp to send directly to Oxygen Fitness Club (+92 316 8297978).
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline pt-2"
                  >
                    Send another question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Ahmed"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-topic" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      id="inquiry-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-hidden transition-colors bg-white"
                    >
                      <option value="Membership & Timings Inquiry">Membership & Timings Inquiry</option>
                      <option value="Location & Plaza Directions">Location & Plaza Directions</option>
                      <option value="General Club Information">General Club Information</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiry-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Optional Notes (Optional)
                    </label>
                    <textarea
                      id="inquiry-notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ask about opening hours or visiting timings..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-hidden transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp (+92 316 8297978)</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Direct communication with gym staff. No automated bot.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
