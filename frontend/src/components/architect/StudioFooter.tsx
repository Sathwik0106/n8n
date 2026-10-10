import React from 'react';
import { Compass, ArrowUp } from 'lucide-react';

export const StudioFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] border-t border-white/[0.08] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#C5A059]/40 rounded-sm flex items-center justify-center bg-[#111317]">
              <Compass className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <span className="font-editorial text-2xl text-white uppercase tracking-wider block">
                Sathwik Studio
              </span>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Architecture &middot; Urbanism &middot; Spatial Form
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono tracking-wider uppercase">
            <a href="#works" className="hover:text-[#C5A059] transition-colors">Works</a>
            <a href="#philosophy" className="hover:text-[#C5A059] transition-colors">Philosophy</a>
            <a href="#atelier" className="hover:text-[#C5A059] transition-colors">Atelier</a>
            <a href="#recognition" className="hover:text-[#C5A059] transition-colors">Awards</a>
            <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-[#C5A059] hover:text-white transition-colors"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Sathwik Architecture Studio. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>COA Registered: CA/2012/55491</span>
            <span>&bull;</span>
            <span>IIA Fellow Member</span>
            <span>&bull;</span>
            <span>AD100 Atelier</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
