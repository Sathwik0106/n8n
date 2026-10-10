import { Compass } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../../data/projectsData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-[#0D0F14] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase block">
            Our Architectural Manifesto
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Tectonic Honesty, Climatic Poetics &amp; Spatial Restraint.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed">
            We reject disposable fashion in architecture. We believe a building achieves permanence only when its walls breathe with local earth, capture passing monsoon winds, and age with graceful tectonic dignity.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#12141A] border border-white/[0.08] hover:border-[#C5A059]/40 rounded-xl transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[#C5A059] font-mono text-sm">
                  <span className="px-2 py-0.5 rounded bg-[#C5A059]/10 border border-[#C5A059]/20 font-bold">
                    {pillar.step}
                  </span>
                  <Compass className="w-4 h-4 opacity-40" />
                </div>

                <h3 className="font-editorial text-2xl text-white leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Tectonic Principle #{pillar.step}
              </div>
            </div>
          ))}
        </div>

        {/* Principal's Reflection Banner */}
        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-[#141720] via-[#101217] to-[#141720] border border-white/[0.08] rounded-2xl relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-relaxed italic">
              &ldquo;A wall is not merely a boundary. It is an instrument of light. How the sun carves its surface at four in the afternoon determines whether an inhabitant feels sheltered or incarcerated.&rdquo;
            </blockquote>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-12 h-12 rounded-full border border-[#C5A059] overflow-hidden bg-gray-800 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                  alt="Ar. Sathwik Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-editorial text-xl text-white font-semibold">
                  Ar. Sathwik Reddy
                </div>
                <div className="text-xs font-mono text-[#C5A059]">
                  Founder &amp; Principal Architect &middot; AA Dip, M.Arch, FIIA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
