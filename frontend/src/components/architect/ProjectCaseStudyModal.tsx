import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  Layers,
  Award,
  FileText,
  Image as ImageIcon,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import type { ArchitecturalProject } from '../../data/projectsData';

interface ProjectCaseStudyModalProps {
  project: ArchitecturalProject | null;
  onClose: () => void;
  onCommissionSimilar: (project: ArchitecturalProject) => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
  onCommissionSimilar
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'photo' | 'drawing'>('photo');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentMediaUrl = viewMode === 'drawing'
    ? project.drawingImage
    : project.gallery[activeImageIndex] || project.coverImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#0E1015] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Modal Header */}
        <div className="px-6 py-4 bg-[#12141A] border-b border-white/[0.08] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] px-2 py-0.5 border border-[#C5A059]/30 rounded">
              Monograph No. {project.id.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-gray-400 hidden sm:inline">
              Coordinates: {project.coordinates}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* View Mode Switch */}
            <div className="flex items-center bg-[#171A22] border border-white/10 rounded p-0.5 text-xs font-mono">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-3 py-1 rounded flex items-center gap-1.5 transition-colors ${
                  viewMode === 'photo' ? 'bg-[#C5A059] text-black font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Photography</span>
              </button>
              <button
                onClick={() => setViewMode('drawing')}
                className={`px-3 py-1 rounded flex items-center gap-1.5 transition-colors ${
                  viewMode === 'drawing' ? 'bg-[#C5A059] text-black font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Drawings &amp; Plans</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Main Visual Showcase with Gallery Navigation */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-black border border-white/10">
            <img
              src={currentMediaUrl}
              alt={project.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                viewMode === 'drawing' ? 'filter invert contrast-125 opacity-90' : ''
              }`}
            />

            {/* Photo Navigation arrows if photo mode */}
            {viewMode === 'photo' && project.gallery.length > 1 && (
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1))}
                  className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0))}
                  className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Thumbnail Strip for Gallery */}
            {viewMode === 'photo' && project.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-1.5 bg-black/70 backdrop-blur-md rounded-lg border border-white/10">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-12 h-8 rounded overflow-hidden border transition-all ${
                      activeImageIndex === idx ? 'border-[#C5A059] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Header Info */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
              <span className="text-[#C5A059] uppercase font-bold tracking-wider">{project.category}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                {project.location}
              </span>
              <span>&bull;</span>
              <span>Completed {project.year}</span>
              <span>&bull;</span>
              <span>{project.area}</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl text-white leading-tight">
              {project.title}
            </h2>
            <p className="font-editorial text-xl text-[#F3DEAC] italic font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Two-Column Deep Case Study Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/[0.08]">
            {/* Left: Narrative & Strategy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-mono tracking-widest text-[#C5A059] uppercase mb-2">
                  Architectural Narrative &amp; Spatial Brief
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Tectonics & Materiality Palette */}
              <div>
                <h4 className="text-xs font-mono tracking-widest text-[#C5A059] uppercase mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Tectonic Materiality &amp; Detailing
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.tectonics.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#13161D] border border-white/5 rounded-lg flex items-start gap-2 text-xs text-gray-300"
                    >
                      <span className="text-[#C5A059] font-mono font-bold">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sustainability Strategy */}
              <div className="p-4 bg-[#13161D] border border-[#C5A059]/20 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F3DEAC] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  Climatic &amp; Ecological Performance
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.sustainability}
                </p>
              </div>

              {/* Awards Won */}
              {project.awards && project.awards.length > 0 && (
                <div className="p-4 bg-[#1B1914] border border-[#C5A059]/40 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase font-bold">
                    <Award className="w-4 h-4" />
                    Distinctions &amp; Architectural Awards
                  </div>
                  <ul className="space-y-1 text-xs text-gray-200">
                    {project.awards.map((award, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Technical Specification Ledger */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#12141A] border border-white/10 rounded-xl p-5 space-y-4">
                <h4 className="text-xs font-mono tracking-widest text-[#C5A059] uppercase border-b border-white/[0.08] pb-2">
                  Project Data &amp; Credentials
                </h4>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Typology:</span>
                    <span className="text-white text-right">{project.typology}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Client Profile:</span>
                    <span className="text-white text-right">{project.client}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white text-right">{project.location}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Gross Built Area:</span>
                    <span className="text-white text-right">{project.area}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Principal Architect:</span>
                    <span className="text-[#C5A059] text-right">{project.leadArchitect}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Structural Consultant:</span>
                    <span className="text-white text-right">Strata Engineers Intl.</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-emerald-400 text-right">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Commission CTA Box */}
              <div className="p-6 bg-gradient-to-br from-[#181A22] to-[#111317] border border-[#C5A059]/40 rounded-xl space-y-3">
                <h4 className="font-editorial text-2xl text-white">
                  Commission Similar Spatial Form
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Seeking a bespoke residential retreat or civic cultural institution tailored to your site's topography?
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onCommissionSimilar(project);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#F3DEAC] text-[#0A0B0D] font-mono font-bold text-xs uppercase tracking-widest py-3 rounded transition-all shadow-lg shadow-[#C5A059]/20"
                >
                  <span>Inquire for {project.category} Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
