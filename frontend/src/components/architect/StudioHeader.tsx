import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface StudioHeaderProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenCommission: () => void;
  drawingsMode: boolean;
  setDrawingsMode: (v: boolean) => void;
}

export const StudioHeader: React.FC<StudioHeaderProps> = ({
  activeSection,
  setActiveSection,
  onOpenCommission,
  drawingsMode,
  setDrawingsMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'works', label: 'Works' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'atelier', label: 'The Atelier' },
    { id: 'recognition', label: 'Press & Awards' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0B0D]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent py-6 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Atelier Brandmark */}
          <div
            onClick={() => setActiveSection('hero')}
            className="cursor-pointer group flex items-center gap-3.5"
          >
            <div className="w-10 h-10 border border-[#C5A059]/40 rounded-sm flex items-center justify-center bg-[#111317] group-hover:border-[#C5A059] transition-colors">
              <Compass className="w-5 h-5 text-[#C5A059] transition-transform duration-700 group-hover:rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial text-xl sm:text-2xl tracking-[0.18em] font-medium text-white uppercase group-hover:text-[#F3DEAC] transition-colors">
                  Sathwik
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#C5A059] px-1.5 py-0.5 border border-[#C5A059]/30 rounded">
                  STUDIO
                </span>
              </div>
              <p className="text-[9px] font-mono tracking-[0.25em] text-gray-400 uppercase hidden sm:block">
                Architecture &middot; Spatial Form &middot; Est. 2011
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-mono tracking-wider uppercase text-gray-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveSection(link.id);
                  const el = document.getElementById(link.id);
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`transition-colors hover:text-[#C5A059] relative py-1 ${
                  activeSection === link.id ? 'text-[#C5A059] font-bold' : ''
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059]"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Actions: Drawings Mode Switch & Commission Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setDrawingsMode(!drawingsMode)}
              className={`flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase px-3 py-1.5 rounded border transition-all ${
                drawingsMode
                  ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#F3DEAC]'
                  : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
              title="Toggle between Photography and Blueprint Drawings view"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{drawingsMode ? 'Drawings: On' : 'Drawings: Off'}</span>
            </button>

            <button
              onClick={onOpenCommission}
              className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase bg-gradient-to-r from-[#C5A059] to-[#A37F35] text-[#0A0B0D] font-bold px-4 py-2 rounded-sm hover:brightness-110 transition-all shadow-lg shadow-[#C5A059]/20"
            >
              <span>Commission Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 space-y-3 pb-3 bg-[#0A0B0D]/95 backdrop-blur-xl rounded-xl p-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById(link.id);
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full text-left py-2 text-sm font-mono tracking-widest uppercase text-gray-300 hover:text-[#C5A059]"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setDrawingsMode(!drawingsMode);
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 text-xs font-mono text-[#C5A059]"
              >
                {drawingsMode ? 'Switch to Photography View' : 'Switch to Technical Blueprints View'}
              </button>
              <button
                onClick={() => {
                  onOpenCommission();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 bg-[#C5A059] text-[#0A0B0D] font-mono font-bold text-xs uppercase tracking-widest rounded"
              >
                Commission Project
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
