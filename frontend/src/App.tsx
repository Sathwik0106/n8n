import React, { useState } from 'react';
import { StudioHeader } from './components/architect/StudioHeader';
import { HeroSection } from './components/architect/HeroSection';
import { WorksGallery } from './components/architect/WorksGallery';
import { PhilosophySection } from './components/architect/PhilosophySection';
import { PrincipalAtelierSection } from './components/architect/PrincipalAtelierSection';
import { CommissionSection } from './components/architect/CommissionSection';
import { StudioFooter } from './components/architect/StudioFooter';
import { ProjectCaseStudyModal } from './components/architect/ProjectCaseStudyModal';
import { ARCHITECTURAL_PROJECTS } from './data/projectsData';
import type { ArchitecturalProject } from './data/projectsData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<ArchitecturalProject | null>(null);
  const [drawingsMode, setDrawingsMode] = useState<boolean>(false);
  const [commissionCategory, setCommissionCategory] = useState<string>('Residential');

  const scrollToWorks = () => {
    setActiveSection('works');
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCommission = (category?: string) => {
    if (category) setCommissionCategory(category);
    setActiveSection('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectFeatured = (projectId: string) => {
    const proj = ARCHITECTURAL_PROJECTS.find((p) => p.id === projectId);
    if (proj) setSelectedProject(proj);
  };

  const handleCommissionSimilar = (project: ArchitecturalProject) => {
    scrollToCommission(project.category);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#E2E4E9] flex flex-col justify-between selection:bg-[#C5A059] selection:text-[#0A0B0D]">
      {/* Studio Header Bar */}
      <StudioHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenCommission={() => scrollToCommission()}
        drawingsMode={drawingsMode}
        setDrawingsMode={setDrawingsMode}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection
          onExploreWorks={scrollToWorks}
          onOpenCommission={() => scrollToCommission()}
          onSelectFeatured={handleSelectFeatured}
        />

        <WorksGallery
          onSelectProject={(p) => setSelectedProject(p)}
          drawingsMode={drawingsMode}
          setDrawingsMode={setDrawingsMode}
        />

        <PhilosophySection />

        <PrincipalAtelierSection />

        <CommissionSection initialCategory={commissionCategory} />
      </main>

      {/* Studio Footer */}
      <StudioFooter />

      {/* Case Study In-Depth Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onCommissionSimilar={handleCommissionSimilar}
        />
      )}
    </div>
  );
};

export default App;
