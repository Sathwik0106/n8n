import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Compass
} from 'lucide-react';
import { ATELIER_LOCATIONS } from '../../data/projectsData';

interface CommissionSectionProps {
  initialCategory?: string;
}

export const CommissionSection: React.FC<CommissionSectionProps> = ({ initialCategory }) => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [typology, setTypology] = useState(initialCategory || 'Residential');
  const [siteLocation, setSiteLocation] = useState('');
  const [targetArea, setTargetArea] = useState('');
  const [budgetBracket, setBudgetBracket] = useState('₹5 Cr – ₹15 Cr');
  const [timeline, setTimeline] = useState('Within 6 months');
  const [projectBrief, setProjectBrief] = useState('');
  const [submittedDossier, setSubmittedDossier] = useState<any | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;

    setSubmitting(true);
    setTimeout(() => {
      const dossierNumber = `ATL-2024-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedDossier({
        id: dossierNumber,
        clientName,
        clientEmail,
        typology,
        siteLocation: siteLocation || 'Specified Region',
        budgetBracket,
        timestamp: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      });
      setSubmitting(false);
    }, 900);
  };

  const handleReset = () => {
    setSubmittedDossier(null);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setProjectBrief('');
    setSiteLocation('');
    setTargetArea('');
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0B0D] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase block">
            Project Commissioning &amp; Dialogue
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-white">
            Initiate an Architectural Dialogue
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed">
            Our atelier accepts a curated selection of six to eight new architectural commissions each year to ensure uncompromising craftsmanship, site immersion, and principal-led supervision.
          </p>
        </div>

        {/* Main Grid: Commission Form & Atelier Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Commission Form Container */}
          <div className="lg:col-span-7 bg-[#111317] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            {submittedDossier ? (
              /* Success Dossier Confirmation */
              <div className="space-y-6 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#C5A059]/10 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                  <CheckCircle className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest block">
                    Commission Dossier Registered
                  </span>
                  <h3 className="font-editorial text-3xl text-white">
                    Thank You, {submittedDossier.clientName}
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    Your architectural inquiry has been logged under monograph reference{' '}
                    <strong className="text-[#F3DEAC] font-mono">{submittedDossier.id}</strong>. Ar. Sathwik Reddy and our senior design partners will review your site topography and schedule a confidential atelier consultation within two business days.
                  </p>
                </div>

                <div className="p-5 bg-[#0D0F14] border border-white/10 rounded-xl space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Dossier ID:</span>
                    <span className="text-white font-bold">{submittedDossier.id}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Typology:</span>
                    <span className="text-white">{submittedDossier.typology}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Target Location:</span>
                    <span className="text-white">{submittedDossier.siteLocation}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-gray-400">Budget Scope:</span>
                    <span className="text-[#C5A059]">{submittedDossier.budgetBracket}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Logged On:</span>
                    <span className="text-gray-300">{submittedDossier.timestamp}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs font-mono text-[#C5A059] hover:text-[#F3DEAC] underline"
                >
                  &larr; Submit Another Project Brief
                </button>
              </div>
            ) : (
              /* Actual Project Brief Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Client / Patron Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="vikram@enterprise.com"
                      className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Direct Mobile / Phone
                    </label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+91 98450 12345"
                      className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Project Typology
                    </label>
                    <select
                      value={typology}
                      onChange={(e) => setTypology(e.target.value)}
                      className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Residential">Bespoke Residential Villa / Estate</option>
                      <option value="Cultural">Cultural Facility / Museum / Gallery</option>
                      <option value="Commercial">Corporate Headquarters / Campus</option>
                      <option value="Hospitality">Hospitality Retreat / Sanctuary</option>
                      <option value="Interior">Luxury Penthouse / Interior Architecture</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Site Location / City
                    </label>
                    <input
                      type="text"
                      value={siteLocation}
                      onChange={(e) => setSiteLocation(e.target.value)}
                      placeholder="e.g. Alibaug / Hyderabad / Goa"
                      className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Target Area (sq.ft / acres)
                    </label>
                    <input
                      type="text"
                      value={targetArea}
                      onChange={(e) => setTargetArea(e.target.value)}
                      placeholder="e.g. 10,000 sq.ft or 2.5 acres"
                      className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Target Budget Scope
                    </label>
                    <select
                      value={budgetBracket}
                      onChange={(e) => setBudgetBracket(e.target.value)}
                      className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="₹3 Cr – ₹7 Cr">₹3 Cr – ₹7 Cr ($400k – $900k)</option>
                      <option value="₹7 Cr – ₹15 Cr">₹7 Cr – ₹15 Cr ($900k – $2M)</option>
                      <option value="₹15 Cr – ₹35 Cr">₹15 Cr – ₹35 Cr ($2M – $4.5M)</option>
                      <option value="₹35 Cr+">₹35 Cr+ ($4.5M+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Desired Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Immediate (< 3 months)">Immediate (&lt; 3 months)</option>
                      <option value="Within 6 months">Within 6 months</option>
                      <option value="12 months & Beyond">12 months &amp; Beyond (Land Acquired)</option>
                      <option value="Conceptual Planning">Conceptual / Site Feasibility</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                    Project Vision &amp; Spatial Aspirations
                  </label>
                  <textarea
                    rows={4}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Briefly describe your land topography, lifestyle, desire for light, materials, and functional requirements..."
                    className="w-full bg-[#0A0B0D] border border-white/10 focus:border-[#C5A059] rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#C5A059] to-[#A37F35] hover:brightness-110 text-[#0A0B0D] font-mono font-bold text-xs uppercase tracking-widest py-4 rounded transition-all shadow-xl shadow-[#C5A059]/20"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                      Registering Dossier...
                    </span>
                  ) : (
                    <>
                      <span>Transmit Architectural Dossier</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Atelier Studio Addresses & Physical Contact */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-editorial text-3xl text-white">
              Physical Ateliers
            </h3>

            <div className="space-y-6">
              {ATELIER_LOCATIONS.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#111317] border border-white/[0.08] rounded-xl space-y-4"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#C5A059]">
                    <span className="font-bold uppercase tracking-wider">{loc.city}</span>
                    <Compass className="w-3.5 h-3.5" />
                  </div>

                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {loc.address}
                  </p>

                  <div className="space-y-1.5 text-xs font-mono text-gray-400 pt-2 border-t border-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{loc.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{loc.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#161820] border border-[#C5A059]/30 rounded-xl space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C5A059] tracking-widest block">
                Press &amp; Monograph Inquiries
              </span>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                For high-resolution photographic publishing rights, architectural symposium keynotes, or academic critiques, reach out to <a href="mailto:press@sathwikstudio.com" className="text-[#C5A059] underline">press@sathwikstudio.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
