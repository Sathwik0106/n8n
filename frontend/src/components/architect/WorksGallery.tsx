import React, { useState } from 'react';
import {
  Grid,
  List,
  ArrowUpRight,
  MapPin,
  Maximize2,
  Award,
  FileText
} from 'lucide-react';
import { ARCHITECTURAL_PROJECTS } from '../../data/projectsData';
import type { ArchitecturalProject } from '../../data/projectsData';

interface WorksGalleryProps {
  onSelectProject: (project: ArchitecturalProject) => void;
  drawingsMode: boolean;
  setDrawingsMode: (v: boolean) => void;
}

export const WorksGallery: React.FC<WorksGalleryProps> = ({
  onSelectProject,
  drawingsMode,
  setDrawingsMode
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Residential', 'Cultural', 'Commercial', 'Hospitality', 'Interior'];

  const filteredProjects = selectedCategory === 'All'
    ? ARCHITECTURAL_PROJECTS
    : ARCHITECTURAL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div>
          <span className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase block mb-2">
            Portfolio of Works &middot; 2011 &ndash; 2024
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-white">
            Built Architecture &amp; Spatial Forms
          </h2>
        </div>

        {/* View Controls: Mode Toggle & Grid/List */}
        <div className="flex items-center gap-3">
          {/* Blueprint Mode Toggle */}
          <button
            onClick={() => setDrawingsMode(!drawingsMode)}
            className={`flex items-center gap-2 text-xs font-mono tracking-wider px-3.5 py-2 rounded-sm border transition-all ${
              drawingsMode
                ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#F3DEAC]'
                : 'bg-[#111317] border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{drawingsMode ? 'Drawings & Blueprints' : 'Finished Photography'}</span>
          </button>

          {/* Grid vs List layout */}
          <div className="flex items-center bg-[#111317] border border-white/10 rounded-sm p-1">
            <button
              onClick={() => setLayoutMode('grid')}
              className={`p-1.5 rounded transition-colors ${
                layoutMode === 'grid' ? 'bg-[#C5A059] text-[#0A0B0D]' : 'text-gray-400 hover:text-white'
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayoutMode('list')}
              className={`p-1.5 rounded transition-colors ${
                layoutMode === 'list' ? 'bg-[#C5A059] text-[#0A0B0D]' : 'text-gray-400 hover:text-white'
              }`}
              title="Architectural Index List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-none">
        {categories.map((cat) => {
          const count = cat === 'All'
            ? ARCHITECTURAL_PROJECTS.length
            : ARCHITECTURAL_PROJECTS.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-white text-[#0A0B0D] font-bold shadow-md'
                  : 'bg-[#111317] text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat} <span className="text-[10px] opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Grid View */}
      {layoutMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#111317] border border-white/10 hover:border-[#C5A059]/60 rounded-xl overflow-hidden card-hover-arch flex flex-col justify-between"
            >
              <div>
                {/* Visual Canvas (Photography or Drawing) */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#0A0B0D]">
                  <img
                    src={drawingsMode ? project.drawingImage : project.coverImage}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      drawingsMode ? 'filter invert contrast-125 opacity-80' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-80"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#C5A059]/90 text-[#0A0B0D] font-bold uppercase tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  {/* Awards indicator if any */}
                  {project.awards && project.awards.length > 0 && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-[#F3DEAC] bg-black/80 px-2.5 py-1 rounded-sm border border-[#C5A059]/40 backdrop-blur-sm">
                      <Award className="w-3 h-3 text-[#C5A059]" />
                      <span className="line-clamp-1">{project.awards[0]}</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-2 rounded-full shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1 text-[#C5A059]">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span>&bull;</span>
                    <span>{project.area}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-white group-hover:text-[#F3DEAC] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tectonics Material Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tectonics.slice(0, 2).map((tec, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-gray-300 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded"
                      >
                        {tec}
                      </span>
                    ))}
                    {project.tectonics.length > 2 && (
                      <span className="text-[10px] font-mono text-gray-500 py-0.5 px-1">
                        +{project.tectonics.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-4 bg-[#14171E]/60 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-[#C5A059] transition-colors">
                <span>Inspect Architectural Monograph</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Structured Architectural Index List View */
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] mt-4">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer py-6 px-4 hover:bg-[#121418] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-1 text-xs font-mono text-gray-500">
                {(idx + 1).toString().padStart(2, '0')}
              </div>
              <div className="md:col-span-5">
                <h3 className="font-editorial text-2xl text-white group-hover:text-[#F3DEAC] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 font-mono mt-0.5">{project.subtitle}</p>
              </div>
              <div className="md:col-span-2 text-xs font-mono text-gray-300">
                <span className="text-[#C5A059]">{project.category}</span>
                <div className="text-gray-500">{project.typology}</div>
              </div>
              <div className="md:col-span-2 text-xs font-mono text-gray-400">
                <div>{project.location}</div>
                <div className="text-gray-500">{project.area}</div>
              </div>
              <div className="md:col-span-1 text-xs font-mono text-gray-400 text-right">
                {project.year}
              </div>
              <div className="md:col-span-1 flex justify-end">
                <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#C5A059] flex items-center justify-center text-gray-400 group-hover:text-[#C5A059] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
