import { ArrowDown, ArrowUpRight, Award, MapPin } from 'lucide-react';
import { STUDIO_METRICS } from '../../data/projectsData';

interface HeroSectionProps {
  onExploreWorks: () => void;
  onOpenCommission: () => void;
  onSelectFeatured: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWorks,
  onOpenCommission,
  onSelectFeatured
}) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-blueprint-grid">
      {/* Background Architectural Canvas with subtle gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
          alt="Monolithic Architectural Form"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.08] scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/60 to-[#0A0B0D]/80"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0B0D]/40 to-[#0A0B0D]"></div>
      </div>

      {/* Top Metadata Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2 text-[#C5A059]">
            <MapPin className="w-3.5 h-3.5" />
            <span>17.3850° N, 78.4867° E &mdash; Jubilee Hills & Indiranagar Ateliers</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">COA Reg. CA/2012/55491</span>
            <span className="text-gray-600">&bull;</span>
            <span className="text-gray-300">AD100 Recognized Practice</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-[#F3DEAC] text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
              Selected Monographs &amp; Built Works 2011 &ndash; 2024
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-white max-w-4xl">
              Architecture where <span className="italic text-[#F3DEAC] font-light">light, earth</span> &amp; shadow convene.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              Led by <strong className="text-white font-medium">Ar. Sathwik Reddy</strong>, our atelier crafts sculptural residences, contemplative pavilions, and climate-responsive masterplans rooted in vernacular honesty and tectonic restraint.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreWorks}
                className="group flex items-center gap-3 bg-[#C5A059] hover:bg-[#F3DEAC] text-[#0A0B0D] font-mono text-xs uppercase tracking-widest font-bold px-7 py-4 rounded-sm transition-all shadow-xl shadow-[#C5A059]/20"
              >
                <span>Explore Built Works</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCommission}
                className="group flex items-center gap-2 border border-white/20 hover:border-[#C5A059] bg-[#111317]/60 hover:bg-[#111317] text-white font-mono text-xs uppercase tracking-widest px-6 py-4 rounded-sm transition-all backdrop-blur-sm"
              >
                <span>Initiate a Commission</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Featured Project Teaser Card */}
          <div className="lg:col-span-4 lg:pl-6">
            <div
              onClick={() => onSelectFeatured('monolith-residence')}
              className="cursor-pointer group p-5 bg-[#121418]/80 hover:bg-[#171A21] border border-white/10 hover:border-[#C5A059]/50 rounded-xl transition-all duration-300 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-3">
                <span className="text-[#C5A059] uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Featured Monograph
                </span>
                <span>Khandala &middot; 2024</span>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-3">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="The Monolith Residence"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-white/90">
                  8,450 sq.ft &middot; Board-Formed Concrete
                </div>
              </div>

              <h2 className="font-editorial text-2xl text-white group-hover:text-[#F3DEAC] transition-colors leading-snug">
                The Monolith Residence
              </h2>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                Excavated from the mountain plateau with cantilevered concrete planes framing valley winds.
              </p>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.08] text-[11px] font-mono text-[#C5A059]">
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 border-t border-white/[0.08]">
          {STUDIO_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-white font-medium">
                {metric.value}
              </div>
              <div className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
