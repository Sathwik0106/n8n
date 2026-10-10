import { BookOpen, Compass, ExternalLink } from 'lucide-react';

export const PrincipalAtelierSection: React.FC = () => {
  const pressFeatures = [
    { publication: 'Architectural Digest AD100', feature: 'Selected as India’s Top 100 Influential Ateliers (2022, 2023, 2024)', year: '2024' },
    { publication: 'Dezeen Architecture Monograph', feature: 'Global In-Depth Profile on The Monolith Residence and Brutalist Climate Forms', year: '2024' },
    { publication: 'ArchDaily Building of the Year', feature: 'Nominee in Public Cultural Category for Terra Cotta Pavilion', year: '2023' },
    { publication: 'Domus India Cover Story', feature: '“The Architecture of Shadow”: 12-page retrospective on Vernacular Tectonics', year: '2023' },
    { publication: 'World Architecture Festival (WAF)', feature: 'Finalist & Live Critique in Singapore for Coastal Pavilion', year: '2023' },
    { publication: 'The Plan Magazine (Milan)', feature: 'Structural analysis of cantilevers and low-E energy performance', year: '2022' }
  ];

  const credentials = [
    { label: 'COA Registration', value: 'CA/2012/55491 (Council of Architecture, India)' },
    { label: 'Fellow Member', value: 'FIIA (The Indian Institute of Architects)' },
    { label: 'Academic Pedigree', value: 'M.Arch, Architectural Association (AA), London' },
    { label: 'Undergraduate', value: 'B.Arch (University First Rank & Gold Medal)' },
    { label: 'Visiting Critic', value: 'CEPT Ahmedabad & SPA New Delhi' }
  ];

  return (
    <section id="atelier" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Principal Architect & Atelier Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Atelier Photo Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
              alt="Atelier Drafting Desk and Architectural Blueprints"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
                The Drafting Table
              </span>
              <p className="font-editorial text-xl italic">
                “Every project begins with a hand-drawn 6B graphite sketch on tracing paper.”
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 p-5 bg-[#141720] border border-[#C5A059]/40 rounded-xl shadow-2xl max-w-xs hidden sm:block backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] mb-1">
              <Compass className="w-4 h-4" />
              <span>Scale 1:1 Mockups</span>
            </div>
            <p className="text-[11px] text-gray-300">
              Our atelier produces physical plaster models and full-scale concrete joinery test casts before site excavation.
            </p>
          </div>
        </div>

        {/* Biography & Credentials */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase block">
            Principal Architect Profile
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl text-white leading-tight">
            Ar. Sathwik Reddy
          </h2>
          <p className="text-sm font-mono text-[#F3DEAC] tracking-wider uppercase">
            Principal &middot; Lead Architectural Designer &middot; Spatial Theorist
          </p>

          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            With over 14 years of dedicated architectural practice across the Indian subcontinent and international collaborations, Ar. Sathwik Reddy leads a studio of twenty architects, computational modelers, and master craftsmen.
          </p>

          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Following graduate studies at the Architectural Association (AA) in London, his work investigates the synthesis between radical monolithic geometry and indigenous bioclimatic systems. His monographs have been featured extensively in global journals including <em>Dezeen</em>, <em>ArchDaily</em>, and <em>Architectural Digest</em>.
          </p>

          {/* Credentials Ledger */}
          <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
            <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase block mb-3">
              Professional Accreditations
            </span>
            {credentials.map((cred, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-white/[0.04] text-xs font-mono">
                <span className="text-gray-400">{cred.label}:</span>
                <span className="text-white font-medium">{cred.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Press & Awards Section */}
      <div id="recognition" className="pt-12 border-t border-white/[0.08] space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
              Monograph Citations
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white">
              Selected Press &amp; Critical Publications
            </h2>
          </div>
          <span className="text-xs font-mono text-gray-400">
            Recognized by International Architectural Juries
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressFeatures.map((press, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#111317] border border-white/[0.08] hover:border-[#C5A059]/50 rounded-xl space-y-3 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                  <span className="text-[#C5A059] font-bold">{press.year}</span>
                  <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <h3 className="font-editorial text-2xl text-white">
                  {press.publication}
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {press.feature}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span>View Archival Citation</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
