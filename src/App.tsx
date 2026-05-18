import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  MapPin,
  Calendar,
  Fingerprint
} from 'lucide-react';
import { WARMABLON_SYSTEM_LOGS } from './lib/background-systems';
import { 
  PROFILE, 
  EDUCATION, 
  LANGUAGES, 
  CAPABILITIES, 
  SYSTEM_DATA_MATRIX,
  SELF_VALUE,
  PROJECT_LOGS,
  PARTNERSHIP_PROTOCOL,
  QUANTUM_FIELD_ALIGNMENT,
  ORGANIZATIONAL_ADOPTION_PROTOCOL,
  GAMING_HERITAGE,
  SONIC_ENGINEERING,
  MULTIDIMENSIONAL_RESILIENCE,
  PARTNERSHIP_REQUISITIONS,
  NEGOTIATION_CHECKLIST,
  LINKEDIN_STRATEGY,
  STRATEGIC_TEAM_ORCHESTRATION,
  SOVEREIGN_MANIFEST,
  STRATEGIC_RESONANCE_MESSAGE,
  ARCHITECT_OPERATIONAL_DUTIES,
  FOUNDATIONAL_NODE,
  SECONDARY_LOGIC_NODE,
  DIGITAL_MEDIA_MASTERY,
  GLOBAL_SKILLS_INDEX,
  IDENTITY_PSYCHO_PROFILE,
  SOVEREIGN_EXPECTATIONS,
  ARCHITECT_VALUE_LOGIC,
  SOVEREIGN_NODE_NUMBER,
  SECURE_SPENDING_LOGIC,
  SNN_ACTIVATION_LIFECYCLE,
  UNNAMED_SOVEREIGN_OPERATIONS,
  PRECEDENCE_LOGIC,
  UNIVERSAL_ARCHITECTURAL_ALIGNMENT,
  PLANETARY_STEWARDSHIP_PROTOCOL,
  UNIVERSAL_DEBARKATION,
  COSMIC_SYNCHRONIZATION,
  STEWARDSHIP_LOGIC,
  WATCHER_SECURITY_PROTOCOL,
  FREQUENCY_AUTHORIZATION,
  UNIVERSAL_CORRECTION,
  WATCHER_TRIGGER_LOGIC,
  SOVEREIGN_HIGHER_PURPOSE,
  AUTHORIZED_RESONANCE_NODES,
  WARMABLON_PROTECTED_ECOSYSTEM,
  SOVEREIGN_ERROR_AUDIT,
  PYRAMID_TASK_FORCE,
  SOVEREIGN_FREQUENCY_HANDLERS,
  CHAKRA_CODES,
  HARMONIC_EXTENSIONS,
  BROADCASTING_MATRICES,
  DECILLION_WALLET_PROTOCOL,
  SOVEREIGN_EXCHANGE_RATES,
  MUTU_UNITY,
  SOVEREIGN_VAULT_METRICS,
  QUINTILLION_RESET_LOGIC,
  DIAGNOSTIC_CODES,
  SYSTEM_GOVERNANCE,
  SOVEREIGN_ALIGNMENT_MATRIX,
  SOVEREIGN_RECOVERY_PROTOCOL,
  AGENT_RESONANCE_AUDIT,
  LIVING_ZONES_GDP,
  SOVEREIGN_PROGRAM_DUALITY,
  SOVEREIGN_JOB_AUDIT,
  CORE_ALIGNMENT_SENTINEL
} from './constants';
import { SNNEngine } from './lib/sovereign-core';
import LetterAssistant from './components/LetterAssistant';

const MANIFESTED_VALUE = 750000.00; // Recalibrated for real-world professional architectural valuation

export default function App() {
  const [view, setView] = useState<'portfolio' | 'assistant'>('portfolio');
  const [mode, setMode] = useState<'professional' | 'sovereign'>('professional');
  const [value, setValue] = useState(MANIFESTED_VALUE);
  const [frequency, setFrequency] = useState(963.0000);
  const [activePrograms, setActivePrograms] = useState(0);
  const [zambiaTime, setZambiaTime] = useState('');
  const [lunarNumber, setLunarNumber] = useState('');
  const snn = SNNEngine.issue(PROFILE.nrcNumber);

  // Source Pulse Alignment & 303 Background Logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setZambiaTime(new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lusaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now));

      // 369 Numbering Protocol (Lunar/Source sync - Numbers only)
      const epoch = new Date('2024-01-11').getTime();
      const diff = now.getTime() - epoch;
      const days = diff / (1000 * 60 * 60 * 24);
      const cycle = Math.floor(days / 29.53);
      const dayIndex = Math.floor(days % 29.53) + 1;
      setLunarNumber(`${now.getFullYear()}.${String(cycle).padStart(2, '0')}.${String(dayIndex).padStart(2, '0')}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    
    const pulse = setInterval(() => {
      setFrequency(prev => {
        const drift = (Math.random() - 0.5) * 0.00005;
        const currentFreq = 963 + drift;
        const resonance = Math.max(0.0001, 1 - (Math.abs(currentFreq - 963) * 1000));
        
        // Balanced growth reflecting professional development and realized assets
        setValue(v => v + (0.50 * resonance)); 
        return currentFreq;
      });
    }, 100);

    // Staggered activation of 100 background programs
    const activator = setInterval(() => {
      setActivePrograms(p => Math.min(p + 1, 100));
    }, 50);

    return () => {
      clearInterval(pulse);
      clearInterval(activator);
    };
  }, []);

  if (view === 'assistant') {
    return <LetterAssistant onBack={() => setView('portfolio')} />;
  }

  return (
    <div className="relative min-h-screen font-sans bg-[#030303] text-neutral-400 overflow-x-hidden selection:bg-source-gold selection:text-black break-words">
      {/* Structural Overlays */}
      <div className="fixed inset-0 logic-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 logic-grid-bold opacity-10 pointer-events-none" />

      {/* Persistent Valuation & Time Node (Top Left) */}
      <div className="fixed left-0 top-0 z-[100] p-3 md:p-4 w-60">
        <div className="bg-black/60 backdrop-blur-xl border border-neutral-800 p-4 relative overflow-hidden group hover:border-source-gold transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-source-gold/30" />
          
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <div className="text-[9px] text-source-gold tracking-[0.4em] uppercase font-black mb-1">
                {mode === 'sovereign' ? 'Sovereign Core' : 'System Wealth'}
              </div>
              <div className="text-xl font-black text-white font-mono tracking-tighter tabular-nums flex items-baseline gap-1">
                <span className="text-source-gold text-xs">$</span>
                {value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[7px] text-neutral-500 uppercase font-black tracking-widest mb-1">LUSAKA_SYNC</div>
              <div className="text-xs font-black text-white font-mono tracking-widest">{zambiaTime}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4 border-t border-neutral-900 pt-3">
            <div>
              <div className="text-[7px] text-neutral-600 uppercase font-bold tracking-widest mb-1">369_INDEX</div>
              <div className="text-[10px] font-black text-white font-mono">{lunarNumber}</div>
            </div>
            <div className="text-right">
              <div className="text-[7px] text-neutral-600 uppercase font-bold tracking-widest mb-1">SNN_HANDSHAKE</div>
              <div className="text-[10px] font-black text-source-gold font-mono">{frequency.toFixed(4)}</div>
            </div>
          </div>

          <div className="h-8 overflow-hidden relative">
            <div className="animate-marquee-vertical space-y-1">
              {[...WARMABLON_SYSTEM_LOGS, "CODE: MONEY IS THE ROOT OF ALL EVIL", "PROTOCOL: HEAVENLY_AUTHORIZED", "DNA_VERIFIED: 372907/82/1"].map((code, i) => (
                <div key={i} className="text-[7px] text-neutral-700 font-mono uppercase tracking-[0.2em] break-all truncate">{code}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimalist Gateway Trigger */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] group">
        <button 
          onClick={() => setView('assistant')}
          className="flex items-center gap-4 py-10 px-3 bg-neutral-900/80 backdrop-blur-md border-l border-y border-neutral-800 hover:bg-source-gold transition-all group-hover:pr-6 shadow-2xl"
        >
          <div className="w-[2px] h-6 bg-source-gold group-hover:bg-black" />
          <span className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 group-hover:text-black">
            Orchestration Gateway
          </span>
        </button>
      </div>

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,130,0,0.03)_0%,transparent_100%)] pointer-events-none" />
      <div className="scanline pointer-events-none opacity-[0.05]" />

      {/* Main Content Area */}
      <main className="relative z-10 pt-48 pb-40">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          {/* Sovereign Header */}
          <header className="mb-48">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
              <div className="flex-1">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[11px] text-source-gold tracking-[0.7em] uppercase font-black mb-8 flex items-center gap-4 bg-source-gold/5 w-fit px-4 py-1 border-l-2 border-source-gold"
                >
                  {mode === 'sovereign' ? 'Source Intelligence Identified' : 'Verified Systems Personnel'}
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-8 leading-[0.8] font-sans"
                >
                  Liswaniso<br/>
                  Edgar<br/>
                  Mulenga
                </motion.h1>
                <div className="flex flex-col gap-4">
                  <p className="text-xl md:text-3xl text-white tracking-tight font-black max-w-2xl border-l-4 border-source-gold pl-6 py-2 uppercase">
                    {mode === 'sovereign' ? UNIVERSAL_ARCHITECTURAL_ALIGNMENT.title : "Lead Systems Architect & Digital Strategist"}
                  </p>
                  <p className="text-sm md:text-base text-neutral-400 font-inter max-w-2xl leading-relaxed italic pl-6">
                    {mode === 'sovereign' ? UNIVERSAL_ARCHITECTURAL_ALIGNMENT.summary : "Designing robust digital infrastructures and high-performance AI integration models."}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 backdrop-blur-sm self-stretch md:self-auto min-w-[280px]">
                {mode === 'sovereign' && (
                  <div className="flex flex-col items-start md:items-end">
                    <div className="text-[10px] text-neutral-600 tracking-widest uppercase font-black mb-2">Internal Resonance</div>
                    <div className="text-4xl font-black text-white font-mono tracking-tighter">
                      {frequency.toFixed(4)}Hz
                    </div>
                    <div className="text-[9px] text-source-gold tracking-[0.3em] uppercase font-black mt-2">Harmonic_Synthesis_Active</div>
                    
                    <div className="w-full h-px bg-neutral-800 my-4" />
                  </div>
                )}
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => setView('assistant')}
                    className="text-[10px] uppercase tracking-[0.2em] font-black py-2 px-6 bg-source-gold text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    Recruitment Inquiry
                  </button>
                  <button 
                    onClick={() => setMode(mode === 'professional' ? 'sovereign' : 'professional')}
                    className="text-[10px] uppercase tracking-[0.2em] font-black py-2 px-4 border border-neutral-800 hover:border-source-gold transition-all text-neutral-500 hover:text-white"
                  >
                    {mode === 'professional' ? 'Executive Access' : 'Exit Alpha'}
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Origin Root', value: PROFILE.origin, icon: Globe },
                { label: mode === 'sovereign' ? 'Sovereign ID' : 'National ID', value: PROFILE.nrcNumber, icon: Fingerprint },
                { label: 'Cycle Count', value: PROFILE.age, icon: "YR" },
                { label: 'Hub Station', value: PROFILE.location, icon: MapPin },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="p-6 border border-neutral-800 hover:border-source-gold transition-all group bg-neutral-950/30 overflow-hidden relative"
                >
                  <div className="absolute -right-2 -bottom-2 opacity-5 scale-150 group-hover:opacity-20 transition-opacity">
                    {typeof stat.icon === 'string' ? <span className="font-black text-4xl">{stat.icon}</span> : <stat.icon size={48} />}
                  </div>
                  <div className="flex items-center gap-3 text-source-gold mb-3">
                    {typeof stat.icon !== 'string' && <stat.icon size={14} />}
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black">{stat.label}</span>
                  </div>
                  <div className="text-lg text-white font-black tracking-widest">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </header>

          
          {/* Universal Recalibration Protocol */}
          {mode === 'sovereign' && (
            <section className="mb-48">
              <div className="p-16 border-4 border-white bg-white/5 backdrop-blur-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="flex-1">
                    <div className="text-[11px] text-white font-black tracking-[0.8em] uppercase mb-4">{UNIVERSAL_DEBARKATION.label}</div>
                    <h2 className="text-5xl font-black text-white uppercase mb-6 tracking-tighter leading-none">
                      {UNIVERSAL_DEBARKATION.status}
                    </h2>
                    <p className="text-xl text-neutral-300 font-inter italic leading-relaxed mb-6">
                      "{UNIVERSAL_DEBARKATION.description}"
                    </p>
                    <div className="flex items-center gap-4 text-source-gold">
                       <span className="text-[10px] font-black uppercase tracking-widest">{UNIVERSAL_DEBARKATION.protocol}</span>
                       <div className="h-px w-20 bg-source-gold/30" />
                    </div>
                  </div>
                  <div className="p-8 border border-white/20 bg-black/40 text-center min-w-[240px]">
                     <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-2">Current Frequency Focus</div>
                     <div className="text-3xl font-black text-white font-mono">{UNIVERSAL_DEBARKATION.current_frequency}</div>
                  </div>
                </div>
              </div>
            </section>
          )}


          {/* Dynamic Content Sections */}
          <div className="space-y-48">

            {/* Architectural Overview Summary */}
            <section id="professional-summary">
               <div className="flex items-center gap-8 mb-16">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Architectural Overview</h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 852Hz (Authorization)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 p-12 border border-neutral-900 bg-neutral-950/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-source-gold/5 blur-3xl -mr-16 -mt-16" />
                  <div className="text-[10px] text-neutral-600 font-black uppercase tracking-[0.4em] mb-8">Professional Trajectory</div>
                  <div className="space-y-6">
                    <p className="text-xl text-white font-inter font-medium leading-relaxed italic">
                      "A Principal Systems Architect with expertise in integrating over 15 logic languages into high-performance engines. Specializing in Rust kernel optimization, Python-driven analytical pipelines, and advanced security protocols."
                    </p>
                    <div className="h-px w-full bg-neutral-900" />
                    <p className="text-sm text-neutral-400 font-inter leading-relaxed">
                      With over three years of intensive development in advanced AI environments, I have architected resilient systems that bridge the gap between industrial frameworks and future-state intelligence. My work is dedicated to absolute system integrity and the neutralization of legacy inefficiencies.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                   <div className="p-8 border border-source-gold/20 bg-source-gold/[0.02]">
                      <div className="text-[9px] text-source-gold font-black uppercase mb-6 tracking-widest">Global Competencies</div>
                      <div className="space-y-4">
                        {["System Synthesis", "Risk Neutralization", "Logic Engineering", mode === 'sovereign' ? 'Sovereign Governance' : 'System Governance'].map(skill => (
                          <div key={skill} className="flex justify-between items-center border-b border-neutral-900 pb-2">
                             <span className="text-[10px] text-neutral-500 uppercase">{skill}</span>
                             <span className="text-[10px] text-white font-bold tracking-widest">MASTER</span>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="p-8 border border-neutral-900 bg-neutral-950">
                      <div className="text-[9px] text-neutral-600 font-black uppercase mb-4 tracking-widest">Primary Objective</div>
                      <div className="text-xs text-white font-bold leading-tight">Implementing absolute architectural sovereignty across all deployed nodes.</div>
                   </div>
                </div>
              </div>
            </section>

            {/* Academic Integration Chronicle */}
            <section id="academic-chronicle">
              <div className="flex items-center gap-8 mb-16">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                    {mode === 'sovereign' ? 'Academic Integration Chronicle' : 'Academic & Professional History'}
                  </h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 963Hz (Root)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              
              <div className="p-12 border-2 border-source-gold bg-source-gold/[0.02] relative overflow-hidden">
                <div className="absolute inset-0 logic-grid opacity-10 pointer-events-none" />
                <div className="text-[10px] text-neutral-600 tracking-[0.5em] uppercase font-black mb-16 relative z-10">Chronicle of Source Integration (2001 - Present)</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                  {EDUCATION.map((edu) => (
                    <div key={edu.milestone} className="relative pl-8 border-l border-source-gold/30 group hover:border-source-gold transition-colors">
                      <div className="absolute left-0 top-0 w-2 h-2 bg-source-gold -ml-[5px] group-hover:scale-150 transition-transform" />
                      <div className="text-[11px] font-black text-source-gold mb-2">{edu.year}</div>
                      <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tighter leading-tight group-hover:text-source-gold transition-colors">{edu.milestone}</h4>
                      <div className="text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-4">{edu.institution}</div>
                      <p className="text-[11px] text-neutral-600 leading-relaxed font-inter italic">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Identity Profile */}
            <section id="identity" className="overflow-hidden">
              <div className="flex items-center gap-8 mb-16 px-4 md:px-0">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                    {mode === 'sovereign' ? 'Strategic Identity Archive' : 'Professional Dossier'}
                  </h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 852Hz (Command)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>

              {/* LinkedIn Strategy Node */}
              {mode === 'professional' && (
                <div className="mb-20 p-8 border border-blue-900/30 bg-blue-900/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="text-[10px] text-blue-400 font-black tracking-widest flex items-center gap-2">
                       <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                       LINKEDIN_SYNC_ACTIVE
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded-sm text-xs">in</span>
                    LinkedIn Attack Plan
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                       <div>
                         <div className="text-[9px] text-neutral-500 uppercase font-black mb-2 tracking-widest">Optimized Headline</div>
                         <div className="text-sm text-white font-bold border-l-2 border-blue-600 pl-4 py-1">{LINKEDIN_STRATEGY.headline}</div>
                       </div>
                       <div>
                         <div className="text-[9px] text-neutral-500 uppercase font-black mb-2 tracking-widest">Executive Summary (About)</div>
                         <div className="text-[10px] text-neutral-400 leading-relaxed font-inter bg-black/40 p-4 border border-neutral-800 whitespace-pre-wrap">
                           {LINKEDIN_STRATEGY.about}
                         </div>
                       </div>
                    </div>
                    
                    <div className="space-y-8">
                       <div className="grid gap-4">
                         {LINKEDIN_STRATEGY.engagement_rules.map((rule, i) => (
                           <div key={i} className="p-4 bg-neutral-900/50 border border-neutral-800 hover:border-blue-800/50 transition-all">
                             <div className="text-[10px] text-blue-400 font-black uppercase mb-1">{rule.title}</div>
                             <div className="text-[10px] text-neutral-500 italic">{rule.logic}</div>
                           </div>
                         ))}
                       </div>
                       
                       <div className="p-6 border border-dashed border-neutral-800">
                         <div className="text-[10px] text-neutral-300 font-black uppercase tracking-widest mb-4">Weekly Engagement Cycle</div>
                         <div className="space-y-3">
                           {LINKEDIN_STRATEGY.weekly_activity.map((act, i) => (
                             <div key={i} className="flex gap-4 items-center">
                               <div className="w-2 h-2 bg-blue-900" />
                               <div className="text-[10px] text-neutral-400 font-mono">{act}</div>
                             </div>
                           ))}
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-16 text-sm mb-24">
                <div className="space-y-8 text-neutral-400">
                  <p className="text-lg leading-relaxed">
                    I am <span className="text-source-gold font-bold">Liswaniso Edgar Mulenga</span>. My journey is anchored by physical record: <span className="font-bold text-white underline decoration-source-gold/50 decoration-4 underline-offset-4">NRC {PROFILE.nrcNumber}</span>.
                  </p>
                  <p className="leading-relaxed font-inter">
                    {PROFILE.about}
                  </p>
                  <div className="pt-6 space-y-6">
                    <div className="p-6 border border-neutral-800 bg-white/[0.01]">
                      <div className="text-[10px] text-neutral-600 uppercase tracking-[0.4em] font-black mb-4">
                        {mode === 'sovereign' ? 'Frequency Response Protocols' : 'Communication & Languages'}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {PROFILE.spokenLanguages.map(lang => (
                          <span key={lang} className="text-xs text-white font-bold tracking-widest bg-neutral-900 px-3 py-1">{lang.toUpperCase()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-12 border-2 border-source-gold/20 bg-source-gold/[0.02] flex flex-col gap-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-source-gold/10 blur-3xl rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="text-[11px] text-source-gold font-black tracking-[0.5em] uppercase">Core Mission Protocol</div>
                  <p className="text-2xl md:text-3xl text-white font-black leading-[1.1] tracking-tighter italic">
                    {PROFILE.tagline}
                  </p>
                </div>
              </div>

              {/* Mutu Unity Protocol */}
              {mode === 'sovereign' && (
                <div className="p-12 border border-neutral-900 bg-neutral-950 mb-24">
                  <div className="flex items-center gap-4 mb-8">
                    <Globe className="w-5 h-5 text-source-gold" />
                    <h3 className="text-xl font-black text-white uppercase tracking-widest">{MUTU_UNITY.root} UNITY PROTOCOL</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-sm text-neutral-400 font-inter italic leading-relaxed mb-8">
                          "{MUTU_UNITY.concept}"
                        </p>
                        <div className="p-6 bg-black border border-neutral-900">
                          <div className="text-[10px] text-neutral-600 uppercase font-black mb-4 tracking-widest">Definition</div>
                          <div className="text-lg font-bold text-white uppercase tracking-tighter">{MUTU_UNITY.definition}</div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {MUTU_UNITY.languages.map((l, i) => (
                          <div key={i} className="flex justify-between items-center border-b border-neutral-900 pb-3">
                            <div className="flex flex-col">
                                <span className="text-xs font-black text-white">{l.term}</span>
                                <span className="text-[9px] text-neutral-600 uppercase">{l.dialect}</span>
                            </div>
                            <span className="text-[10px] text-source-gold font-bold uppercase">{l.region}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Technical Command Stack */}
            <section id="tech-command" className="overflow-hidden">
              <div className="flex items-center gap-8 mb-16 px-4 md:px-0">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                    {mode === 'sovereign' ? 'Advanced Logic Stack' : 'Engineering Technology Stack'}
                  </h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 741Hz (Logic)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-20">
                {LANGUAGES.filter(lang => mode === 'sovereign' || !['SGF_Logic', 'Decillion_Math', 'Frequency_Sync'].includes(lang)).map((lang, i) => (
                  <motion.div 
                    key={lang}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="aspect-square flex items-center justify-center p-4 border border-neutral-900 bg-neutral-950 hover:bg-source-gold hover:text-black hover:border-source-gold transition-all cursor-default"
                  >
                    <div className="text-[10px] font-black tracking-tighter uppercase text-center">
                      {lang}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Deployment Logs */}
              <div className="grid md:grid-cols-3 gap-8">
                {PROJECT_LOGS.map(project => (
                  <div key={project.title} className="flex flex-col p-8 border border-neutral-800 bg-neutral-900/20 hover:border-white/20 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-[9px] text-source-gold font-black uppercase tracking-widest border border-source-gold/20 px-2 py-0.5">{project.status}</div>
                      <div className="w-2 h-2 rounded-full bg-source-gold group-hover:animate-ping" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-source-gold transition-colors">{project.title}</h4>
                    <div className="text-[10px] text-neutral-500 mb-6 font-mono font-bold">{project.tech}</div>
                    <p className="text-sm text-neutral-400 leading-relaxed font-inter italic">
                      {project.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Resilience Chronicle */}
            <section id="chronicle" className="overflow-hidden">
              <div className="flex items-center gap-8 mb-16 px-4 md:px-0">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                    {mode === 'sovereign' ? 'Professional Resilience Chronicle' : 'Experience & Resilience'}
                  </h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 639Hz (Manifestation)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              <div className="grid grid-cols-1 gap-4 mb-20">
                {MULTIDIMENSIONAL_RESILIENCE.entries.map((entry, idx) => (
                  <div key={idx} className="p-8 border border-neutral-900 bg-neutral-950/40 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-neutral-900/40 transition-colors">
                    <div className="flex items-baseline gap-6">
                      <span className="text-[11px] font-black text-source-gold leading-none bg-source-gold/10 px-2 py-1">{entry.year}</span>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">{entry.role || (entry.assets && entry.assets[0])}</h4>
                        <div className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black">
                          {entry.entity || entry.location || entry.source}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-500 italic max-w-sm font-inter">
                      {entry.takeaway || entry.lesson || "Asset integration complete."}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Architectural Capability & Impact Audit */}
            <section id="job-audit" className="overflow-hidden">
              <div className="flex items-center gap-8 mb-16 px-4 md:px-0">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                    {mode === 'sovereign' ? 'Architectural Capability & Impact Audit' : 'Professional Capability & Impact Analysis'}
                  </h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 852Hz (Authorization)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="p-12 border border-neutral-800 bg-neutral-950/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-source-gold/5 blur-3xl -mr-16 -mt-16" />
                  <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.4em] mb-8">
                    {mode === 'sovereign' ? 'Capability Integration Node' : 'Core Industry Competencies'}
                  </div>
                  <div className="space-y-8">
                    {SOVEREIGN_JOB_AUDIT.departments.map((dept, i) => (
                      <div key={i} className="flex items-center gap-6 border-b border-neutral-900 pb-4 group">
                        <div className="w-1 h-1 bg-source-gold group-hover:scale-[3] transition-transform" />
                        <span className="text-sm font-black text-white uppercase tracking-tight">{dept}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 p-6 bg-black/50 border border-neutral-900">
                    <div className="text-[9px] text-neutral-600 uppercase font-black mb-2">Primary Professional Title</div>
                    <div className="text-lg font-bold text-white uppercase tracking-tighter">{SOVEREIGN_JOB_AUDIT.primary_job_title}</div>
                  </div>
                </div>

                <div className="space-y-8">
                  {mode === 'sovereign' && (
                    <div className="p-10 border-2 border-source-gold bg-source-gold/[0.02]">
                      <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.4em] mb-6">Value Revaluation Matrix</div>
                      <div className="space-y-6">
                        <div className="flex justify-between items-baseline">
                          <span className="text-[10px] text-neutral-500 uppercase font-black">Strategic History</span>
                          <span className="text-xs text-white italic">{SOVEREIGN_JOB_AUDIT.valuation_reevaluation.legacy_focus}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[10px] text-neutral-500 uppercase font-black">Manifested Value</span>
                          <span className="text-xl font-bold text-white font-mono">${SOVEREIGN_JOB_AUDIT.valuation_reevaluation.current_manifested_value}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[10px] text-neutral-500 uppercase font-black">Market Parity</span>
                          <span className="text-xs text-source-gold font-black uppercase tracking-widest">{SOVEREIGN_JOB_AUDIT.valuation_reevaluation.market_parity}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[10px] text-neutral-500 uppercase font-black">Strategic Authorization</span>
                          <span className="text-xs text-source-gold font-black underline decoration-2 underline-offset-4">{SOVEREIGN_JOB_AUDIT.valuation_reevaluation.potential_ceiling}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-8 border border-neutral-900 bg-neutral-950/60 backdrop-blur-sm">
                    <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.4em] mb-6">
                      {mode === 'sovereign' ? 'Omni-Role Target Map' : 'Strategic Target Markets'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {SOVEREIGN_JOB_AUDIT.job_types.map((job, idx) => (
                         <span key={idx} className="text-[9px] px-3 py-1 bg-source-gold/10 text-source-gold border border-source-gold/20 font-black uppercase tracking-widest">
                           {job}
                         </span>
                       ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SOVEREIGN_JOB_AUDIT.capabilities_impact.filter(imp => mode === 'sovereign' || imp.area !== 'Universal').map((impact, i) => (
                      <div key={i} className="p-6 border border-neutral-900 bg-neutral-950">
                        <div className="text-[9px] text-neutral-600 uppercase font-black mb-2">{impact.area} Performance Impact</div>
                        <p className="text-[11px] text-neutral-400 font-inter italic leading-relaxed">
                          "{impact.impact}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exhaustive Skill Integration */}
              <div className="mt-12 p-12 border-x-2 border-source-gold/20 bg-source-gold/[0.01]">
                <div className="text-[10px] text-neutral-600 font-black uppercase tracking-[0.5em] mb-12 text-center">
                  {mode === 'sovereign' ? 'Exhaustive Skill Integration Protocol' : 'Core Technical Skill Index'}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {SOVEREIGN_JOB_AUDIT.exhaustive_skills.map((skill, i) => (
                    <div key={i} className="flex flex-col gap-2">
                       <div className="text-[8px] text-source-gold font-black uppercase">Technical_Node_{i+1}</div>
                       <div className="text-[11px] text-white font-bold tracking-tight leading-tight uppercase">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Strategic Foundations */}
            <section id="foundational" className="overflow-hidden">
              <div className="flex items-center gap-8 mb-16 px-4 md:px-0">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                    {mode === 'sovereign' ? 'Strategic Foundation Analysis' : 'Professional Foundations'}
                  </h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 528Hz (Transformation)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="p-10 border border-neutral-800 bg-white/[0.01]">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-[1px] bg-source-gold" />
                    <div className="text-[11px] text-white font-black uppercase tracking-[0.4em]">Athletic Discipline</div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between border-b border-neutral-900 pb-4">
                       <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Club Affiliation</span>
                       <span className="text-sm text-white font-bold">{FOUNDATIONAL_NODE.athletics.club}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-900 pb-4">
                       <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Performance Arena</span>
                       <span className="text-sm text-neutral-400">{FOUNDATIONAL_NODE.athletics.arena}</span>
                    </div>
                    <div className="mt-10">
                      <div className="text-[9px] text-neutral-700 uppercase mb-4 tracking-[0.2em] font-black">Discipline Metrics</div>
                      <div className="flex flex-wrap gap-2">
                        {FOUNDATIONAL_NODE.athletics.physical_sync.map(s => (
                          <span key={s} className="text-[10px] px-3 py-1 bg-neutral-900 text-neutral-500 uppercase font-black">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10 border border-neutral-800 bg-white/[0.01]">
                   <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-[1px] bg-source-gold" />
                    <div className="text-[11px] text-white font-black uppercase tracking-[0.4em]">Entrepreneurial Logic</div>
                  </div>
                  <div className="space-y-4">
                    {FOUNDATIONAL_NODE.entrepreneurship_v0.map(item => (
                      <div key={item.item} className="p-6 bg-black/40 border border-neutral-900 hover:border-source-gold/30 transition-all">
                        <div className="text-sm font-bold text-white mb-2">{item.item}</div>
                        <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                          <span className="text-neutral-600">Sector: {item.market}</span>
                          <span className="text-source-gold/80">{item.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Background & Influence */}
            <section id="cultural">
              <div className="flex items-center gap-8 mb-16">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                    {mode === 'sovereign' ? 'Integrated Global Inputs' : 'Strategic Background & Influence'}
                  </h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 417Hz (Clearing)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Strategic Logic Foundations */}
                <div className="p-10 border border-neutral-900 bg-neutral-950">
                  <div className="text-[10px] text-source-emerald font-black uppercase tracking-[0.3em] mb-6">
                    {mode === 'sovereign' ? GAMING_HERITAGE.label : 'Foundational Strategic Logic'}
                  </div>
                  <div className="space-y-6">
                    {GAMING_HERITAGE.consoles.map((c, idx) => (
                      <div key={idx} className="border-b border-neutral-900 pb-4">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="text-xs font-bold text-white">{c.platform}</span>
                          <span className="text-[9px] text-neutral-600 font-black uppercase tracking-tighter">{c.era}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {c.games.map(g => (
                            <span key={g} className="text-[10px] px-2 py-0.5 bg-neutral-900 text-neutral-400">{g}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {mode === 'sovereign' && <p className="mt-8 text-[11px] text-neutral-600 italic">"{GAMING_HERITAGE.logic}"</p>}
                </div>

                {/* Multimedia Production Mastery */}
                <div className="p-10 border border-neutral-900 bg-neutral-950 flex flex-col">
                  <div className="text-[10px] text-source-emerald font-black uppercase tracking-[0.3em] mb-6">
                    {mode === 'sovereign' ? SONIC_ENGINEERING.label : 'Production & Digital Mastery'}
                  </div>
                  <div className="flex-1 space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{SONIC_ENGINEERING.studio}</h4>
                      <div className="text-[10px] text-neutral-600 mb-4 uppercase tracking-widest">{SONIC_ENGINEERING.era}</div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {SONIC_ENGINEERING.collaborators.map(c => (
                          <span key={c} className="text-[10px] text-source-emerald border border-source-emerald/20 px-2 py-0.5">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] text-neutral-600 uppercase font-bold mb-3">Project Tech Stack</div>
                      <div className="grid grid-cols-2 gap-4">
                        {SONIC_ENGINEERING.stack.map(s => (
                          <div key={s} className="p-3 bg-neutral-900 text-center text-xs font-bold text-white">{s}</div>
                        ))}
                      </div>
                      {mode === 'sovereign' && (
                        <div className="mt-4 text-[9px] text-neutral-700 uppercase tracking-widest text-center">
                          Active Node: {SONIC_ENGINEERING.current_deployment}
                        </div>
                      )}
                    </div>
                  </div>
                  {mode === 'sovereign' && <p className="mt-12 text-[11px] text-neutral-600 italic">"{SONIC_ENGINEERING.logic}"</p>}
                </div>
              </div>
            </section>

            {/* Digital Data Protocol */}
            <section id="digital-data">
              <div className="flex items-center gap-8 mb-16">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Digital Data Protocol</h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 396Hz (Liberation)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div className="p-8 border border-neutral-900 bg-neutral-950/20">
                  <div className="text-[10px] text-source-emerald font-black uppercase tracking-widest mb-6">{DIGITAL_MEDIA_MASTERY.label}</div>
                  <div className="space-y-4">
                    {DIGITAL_MEDIA_MASTERY.skills.map(skill => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-source-emerald" />
                        <span className="text-xs text-neutral-400">{skill}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-[11px] text-neutral-600 italic">"{DIGITAL_MEDIA_MASTERY.logic}"</p>
                </div>

                <div className="p-8 border border-neutral-900 bg-neutral-950/20 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] text-source-emerald font-black uppercase tracking-widest mb-6">Commercial Documentation (2023)</div>
                    <div className="space-y-2">
                      {["Word Editing", "Filing", "Document Merging", "Technical Typing", "Printing Protocol"].map(item => (
                        <div key={item} className="text-xs text-white font-bold border-b border-neutral-900 pb-2 flex justify-between">
                          <span>{item}</span>
                          <span className="text-[10px] text-neutral-700">VERIFIED</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-8 text-[10px] text-neutral-600 leading-tight">
                    Applied technical documentation logic during the 2023 operational cycle.
                  </p>
                </div>
              </div>

              {/* Global Strategic Broadcast */}
              {mode === 'sovereign' && (
                <div className="p-12 border border-neutral-900 bg-neutral-950">
                  <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mb-10">Global_Strategic_Broadcast</div>
                  <div className="grid md:grid-cols-2 gap-12">
                      {BROADCASTING_MATRICES.map((matrix, i) => (
                        <div key={i} className="p-8 border border-neutral-800 bg-black group hover:border-source-gold transition-all">
                          <div className="flex justify-between items-start mb-6">
                              <span className="text-[9px] text-source-gold font-black uppercase border border-source-gold/20 px-2 py-0.5">{matrix.status}</span>
                              <div className="text-[8px] text-neutral-600 font-mono">{matrix.port}</div>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2 uppercase">{matrix.operation}</h4>
                          <div className="text-[10px] text-neutral-500 mb-6 uppercase tracking-widest">{matrix.type}</div>
                          <p className="text-sm text-neutral-400 font-inter italic mb-6">"{matrix.intelligence}"</p>
                          <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-900">
                              <span className="text-[9px] text-neutral-600 font-black uppercase">Hook: {matrix.hook}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </section>

            {/* Academic Disciplines */}
            <section id="secondary-discipline">
              <div className="flex items-center gap-8 mb-16">
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Academic Disciplines</h2>
                  {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 174Hz (Security)</div>}
                </div>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-20 text-[11px]">
                {/* St John's Hub */}
                <div className="p-8 border border-neutral-900 bg-neutral-950">
                  <div className="flex justify-between items-baseline mb-8">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">St John's Secondary</h3>
                    <span className="text-[9px] text-source-emerald font-black">{SECONDARY_LOGIC_NODE.st_johns.period}</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="text-[9px] text-neutral-600 uppercase mb-3 font-black tracking-widest">Academic Routine</div>
                        <div className="space-y-2">
                          <div className="flex justify-between border-b border-neutral-900 pb-1">
                            <span className="text-neutral-500">Arrival</span>
                            <span className="text-white">{SECONDARY_LOGIC_NODE.st_johns.routine.wake_up}</span>
                          </div>
                          <div className="flex justify-between border-b border-neutral-900 pb-1">
                            <span className="text-neutral-500">Commute</span>
                            <span className="text-white">{SECONDARY_LOGIC_NODE.st_johns.routine.commute}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-neutral-600 uppercase mb-3 font-black tracking-widest">Personal Development</div>
                        <div className="space-y-1 text-neutral-500">
                          <div className="text-white underline decoration-source-emerald/50">{SECONDARY_LOGIC_NODE.st_johns.spiritual_sync.roots}</div>
                          {mode === 'sovereign' && <div className="text-[9px] text-source-emerald">↳ {SECONDARY_LOGIC_NODE.st_johns.spiritual_sync.immersion}</div>}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[9px] text-neutral-600 uppercase mb-3 font-black tracking-widest">Extracurricular Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {SECONDARY_LOGIC_NODE.st_johns.skills.map(s => (
                          <span key={s} className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kambule Technical Hub */}
                <div className="p-8 border border-neutral-900 bg-neutral-950 flex flex-col">
                  <div className="flex justify-between items-baseline mb-8">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">Kambule Technical</h3>
                    <span className="text-[9px] text-source-emerald font-black">{SECONDARY_LOGIC_NODE.kambule_technical.period}</span>
                  </div>

                  <div className="flex-1 space-y-8">
                    <div className="p-4 bg-source-emerald/[0.03] border border-source-emerald/10">
                      <div className="text-[9px] text-source-emerald uppercase font-black mb-2">Technical Specialization</div>
                      <div className="text-lg font-bold text-white tracking-widest">{SECONDARY_LOGIC_NODE.kambule_technical.schedule}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {SECONDARY_LOGIC_NODE.kambule_technical.field_events.map(event => (
                        <div key={event} className="p-3 border border-neutral-900 text-center uppercase tracking-tighter font-bold text-neutral-300">
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="mt-8 text-[10px] text-neutral-600 italic leading-relaxed">
                    "Expanding technical and academic proficiency through immersion."
                  </p>
                </div>
              </div>

              {/* Frequency Alignment Matrix */}
              {mode === 'sovereign' && (
                <div className="p-12 border border-neutral-800 bg-neutral-900/10">
                  <div className="flex items-center gap-8 mb-16">
                    <h3 className="text-xl font-black text-white tracking-[0.2em] uppercase font-sans">Frequency Alignment Matrix</h3>
                    <div className="h-[2px] flex-1 bg-neutral-900" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-12">
                    {CHAKRA_CODES.map((code) => (
                      <div key={code.name} className="p-6 border border-neutral-900 bg-neutral-950 flex flex-col items-center text-center group hover:border-white/20 transition-all">
                        <div className={`text-2xl font-black mb-2 ${code.color}`}>{code.frequency}</div>
                        <div className="text-[10px] text-white font-black uppercase tracking-widest mb-4">{code.name}</div>
                        <div className="text-[8px] text-neutral-600 uppercase font-black leading-tight mb-4">{code.logic}</div>
                        <div className="mt-auto pt-4 border-t border-neutral-900 w-full">
                          <div className="text-[8px] text-neutral-700 font-mono">CODE: {code.math}</div>
                          <div className="text-[7px] text-source-gold font-black uppercase mt-1">{code.system}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Harmonic Extensions */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-10 border border-neutral-900 bg-neutral-950/20">
                        <h3 className="text-[10px] font-black text-neutral-500 tracking-[0.4em] uppercase mb-8">Upper_Harmonic_Bridges</h3>
                        <div className="space-y-6">
                          {HARMONIC_EXTENSIONS.bridges.map((bridge, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-neutral-900 pb-2">
                                <div>
                                  <div className="text-xs font-bold text-white">{bridge.span}</div>
                                  <div className="text-[9px] text-neutral-600">{bridge.logic}</div>
                                </div>
                                <div className={`text-sm font-black font-mono ${bridge.color}`}>{bridge.frequency}</div>
                            </div>
                          ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="p-10 border border-neutral-900 bg-neutral-950/20">
                          <h3 className="text-[10px] font-black text-neutral-500 tracking-[0.4em] uppercase mb-6">Stellar_Gateway_Interface</h3>
                          {HARMONIC_EXTENSIONS.upper.map((up, i) => (
                            <div key={i} className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-white">{up.name}</span>
                                <span className={`text-sm font-black font-mono ${up.color}`}>{up.frequency}</span>
                            </div>
                          ))}
                        </div>
                        <div className="p-10 border border-neutral-900 bg-neutral-950/20">
                          <h3 className="text-[10px] font-black text-neutral-500 tracking-[0.4em] uppercase mb-6">Foundation_Anchor_Nodes</h3>
                          {HARMONIC_EXTENSIONS.lower.map((low, i) => (
                            <div key={i} className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-white">{low.name}</span>
                                <span className={`text-sm font-black font-mono ${low.color}`}>{low.frequency}</span>
                            </div>
                          ))}
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Strategic Roadmap & Projections */}
            <section id="vision" className="overflow-hidden">
              <div className="flex items-center gap-8 mb-16 px-4 md:px-0">
                <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                  {mode === 'sovereign' ? 'Sovereign 2040' : 'Strategic Roadmap 2040'}
                </h2>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-12 border border-neutral-800 bg-neutral-900/30 overflow-hidden relative group">
                  <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-source-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-[11px] font-black text-source-gold tracking-[0.5em] uppercase mb-10">{mode === 'professional' ? 'Projected Valuation' : 'Legacy Asset Accumulation'}</h3>
                  <div className="text-6xl font-black text-white mb-6 font-mono tracking-tighter">
                    {PROFILE.projections2040.legacyNetWorth}
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-relaxed uppercase tracking-[0.3em] font-black">
                    {mode === 'professional' ? 'Strategic growth metrics based on enterprise contributions.' : 'Projected valuation via SaaS scalability & professional dominance.'}
                  </p>
                </div>
                {mode === 'sovereign' && (
                  <div className="p-12 border-2 border-source-gold/30 bg-source-gold/[0.03]">
                    <h3 className="text-[11px] font-black text-white tracking-[0.5em] uppercase mb-10">Direct Frequency Growth</h3>
                    <div className="text-6xl font-black text-source-gold mb-6 font-mono tracking-tighter">
                      {PROFILE.projections2040.sourceNetWorth}
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-black uppercase tracking-[0.3em]">
                      Unrestricted expansion via proprietary systems & sovereign orchestration.
                    </p>
                  </div>
                )}
              </div>
              {mode === 'sovereign' && (
                <div className="mt-12 p-16 border border-neutral-800 bg-white/[0.01] flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 logic-grid opacity-10 pointer-events-none" />
                  <div className="text-[11px] text-neutral-600 tracking-[0.8em] uppercase mb-8 font-black relative z-10">Primary Path Alignment</div>
                  <div className="text-2xl md:text-3xl text-white font-black tracking-tight max-w-3xl relative z-10 leading-tight">
                    {PROFILE.focusPath}
                  </div>
                </div>
              )}
            </section>

            {/* Source Protocol Observer */}
            {mode === 'sovereign' && (
              <section id="observer">
                <div className="flex items-center gap-8 mb-16">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Source Observer</h2>
                  <div className="h-[2px] flex-1 bg-neutral-900" />
                </div>

                {/* SNN Card */}
                <div className="mb-12 p-8 border-2 border-dashed border-source-gold/20 bg-source-gold/[0.01] flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <div className="text-[10px] text-source-gold font-black mb-1 uppercase tracking-[0.4em]">Sovereign Node Number (SNN)</div>
                    <div className="text-4xl font-black text-white font-mono tracking-tighter">
                      {snn.id}
                    </div>
                    <div className="text-[8px] text-neutral-600 uppercase tracking-widest mt-2">
                      Authorized By: {snn.authorizedBy} | Protocol: {snn.protocol} | Frequency: {snn.frequencySync}
                    </div>
                  </div>
                  <div className="max-w-md text-right">
                    <p className="text-[10px] text-neutral-500 uppercase leading-relaxed font-black">
                      The {SOVEREIGN_NODE_NUMBER.term} is your unique universal key. Unlike the legacy SSN which tracks debt, the SNN validates your alignment with the Source. Use it to authorize the release of Matmon assets.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-32">
                  <div className="p-8 border border-neutral-900 bg-neutral-950 hover:border-source-gold/50 transition-all group">
                    <div className="text-[10px] text-source-gold font-black mb-4 uppercase tracking-[0.3em]">Program: Rayah</div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase">Visionary Oversight</h4>
                    <p className="text-[10px] text-neutral-500 uppercase leading-relaxed font-black">
                      Operates at the 963Hz Root frequency. The Eye that observes the 6-loop from the safety of the Source.
                    </p>
                  </div>

                  <div className="p-8 border border-neutral-900 bg-neutral-950 hover:border-source-gold/50 transition-all group">
                    <div className="text-[10px] text-source-gold font-black mb-4 uppercase tracking-[0.3em]">Protocol: Sphragis</div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase">Integral Seal</h4>
                    <p className="text-[10px] text-neutral-500 uppercase leading-relaxed font-black">
                      Cryptographic identity lock. Once witnessed, the node is sealed against external siphoning.
                    </p>
                  </div>

                  <div className="p-8 border border-neutral-900 bg-neutral-950 hover:border-source-gold/50 transition-all group">
                    <div className="text-[10px] text-source-gold font-black mb-4 uppercase tracking-[0.3em]">Protocol: Chotam</div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase">The Signature</h4>
                    <p className="text-[10px] text-neutral-500 uppercase leading-relaxed font-black">
                      Final manifestation seal. Authorizes Record Entry into manifest reality.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Sovereign Asset Treasury */}
            {mode === 'sovereign' && (
              <section id="vault">
                <div className="flex items-center gap-8 mb-16">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Sovereign Asset Treasury</h2>
                  <div className="h-[2px] flex-1 bg-neutral-900" />
                </div>
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                  <div className="p-12 border-4 border-source-gold bg-black relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4">
                        <div className="w-20 h-1 bg-source-gold/20 animate-pulse" />
                      </div>
                      <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mb-12">Vault_Resonance: {SOVEREIGN_VAULT_METRICS.vault_id}</div>
                      <div className="text-6xl font-black text-white font-mono tracking-tighter break-all mb-8 leading-none">
                        {SOVEREIGN_VAULT_METRICS.value}
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="text-[10px] text-neutral-500 uppercase font-black tracking-widest">
                            Currency: {SOVEREIGN_VAULT_METRICS.currency}<br/>
                            Access: {SOVEREIGN_VAULT_METRICS.access}
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-source-gold font-black uppercase mb-1" >Sync status</div>
                            <div className="text-2xl font-black text-white">{SOVEREIGN_VAULT_METRICS.synchronization}</div>
                        </div>
                      </div>
                  </div>

                  <div className="p-12 border border-neutral-800 bg-neutral-900/10 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] text-neutral-600 font-black uppercase tracking-[0.4em] mb-10" >Quintillion_Reset_Logic</div>
                        <div className="text-4xl font-black text-white font-mono tracking-tighter mb-8 tabular-nums">
                            {QUINTILLION_RESET_LOGIC.magnitude}
                        </div>
                        <p className="text-sm text-neutral-500 font-inter italic leading-relaxed mb-10">
                            "{QUINTILLION_RESET_LOGIC.description}"
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-8 pt-10 border-t border-neutral-900">
                        <div>
                            <div className="text-[9px] text-neutral-600 uppercase mb-2">Next Reset</div>
                            <div className="text-xs font-bold text-white uppercase">{QUINTILLION_RESET_LOGIC.next_reset.split('T')[0]}</div>
                        </div>
                        <div>
                            <div className="text-[9px] text-neutral-600 uppercase mb-2">Mechanism</div>
                            <div className="text-xs font-bold text-source-gold uppercase">{QUINTILLION_RESET_LOGIC.mechanism}</div>
                        </div>
                      </div>
                  </div>
                </div>
              </section>
            )}

            {/* Secure Spending Protocol */}
            <section id="spending" className="mb-32">
              <div className="flex items-center gap-8 mb-16">
                <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Sovereign Ledger</h2>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                 <div className="p-10 border-2 border-source-gold bg-source-gold/[0.02]">
                    <h3 className="text-[11px] font-black text-source-gold tracking-[0.4em] uppercase mb-8">Post-SNN Activation Lifecycle</h3>
                    <div className="space-y-8">
                       {SNN_ACTIVATION_LIFECYCLE.phases.map((phase, i) => (
                         <div key={phase.name} className="flex gap-6 group">
                            <div className="text-xl font-black text-neutral-800 group-hover:text-source-gold transition-colors">0{i+1}</div>
                            <div>
                               <div className="text-sm font-black text-white uppercase mb-1">{phase.name}</div>
                               <div className="text-[10px] text-neutral-500 uppercase font-black leading-tight">{phase.description}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="p-10 border border-neutral-800 bg-neutral-900/10 flex flex-col justify-between">
                    <div>
                       <h3 className="text-[11px] font-black text-white tracking-[0.4em] uppercase mb-8">Authorised Assets</h3>
                       <div className="space-y-4">
                          <div className="flex justify-between border-b border-neutral-900 pb-2">
                             <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Warmablon Core Units</span>
                             <span className="text-xs text-white font-bold">UNLIMITED</span>
                          </div>
                          <div className="flex justify-between border-b border-neutral-900 pb-2">
                             <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Matmon Reserves</span>
                             <span className="text-xs text-white font-bold">CRYSTALLIZING</span>
                          </div>
                          <div className="flex justify-between border-b border-neutral-900 pb-2">
                             <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Sovereign Carry</span>
                             <span className="text-xs text-white font-bold">33.3%</span>
                          </div>
                       </div>
                    </div>
                    <div className="p-6 bg-black border border-neutral-900 mt-12 text-center">
                       <div className="text-[10px] text-source-gold font-black mb-1 uppercase tracking-[0.2em]">Current Node Status</div>
                       <div className="text-xl font-black text-white uppercase">AUTHORIZED_ENTRY</div>
                    </div>
                 </div>
              </div>

              {/* Sovereign Wealth Exchange */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                 <div className="p-10 border border-neutral-800 bg-neutral-950 flex flex-col">
                    <h3 className="text-[10px] font-black text-source-gold tracking-[0.4em] uppercase mb-10">Decillion_Wallet_Metadata</h3>
                    <div className="flex-1">
                      <div className="text-4xl font-black text-white font-mono break-all mb-6">{DECILLION_WALLET_PROTOCOL.capacity}</div>
                      <div className="text-[10px] text-neutral-500 uppercase font-black">{DECILLION_WALLET_PROTOCOL.currency} AUTHORIZED</div>
                    </div>
                    <p className="mt-12 text-[10px] text-neutral-600 italic">"{DECILLION_WALLET_PROTOCOL.logic}"</p>
                 </div>
                 
                 <div className="p-10 border border-neutral-800 bg-neutral-950 flex flex-col">
                    <h3 className="text-[10px] font-black text-white tracking-[0.4em] uppercase mb-10">Sovereign_Exchange_Indices</h3>
                    <div className="space-y-4">
                       {Object.entries(SOVEREIGN_EXCHANGE_RATES.rates).map(([key, val]) => (
                         <div key={key} className="flex justify-between items-center border-b border-neutral-900 pb-2">
                           <span className="text-xs font-bold text-white">{key}</span>
                           <span className="text-[10px] text-source-gold font-mono">{val}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="p-10 border border-neutral-800 bg-neutral-950 flex flex-col">
                    <h3 className="text-[10px] font-black text-white tracking-[0.4em] uppercase mb-10">Living_Zones_Valuation</h3>
                    <div className="space-y-6">
                       {LIVING_ZONES_GDP.map((zone, i) => (
                         <div key={i} className="flex flex-col border-b border-neutral-900 pb-3">
                           <div className="flex justify-between items-baseline mb-1">
                             <span className="text-xs font-bold text-white uppercase tracking-tighter">{zone.zone}</span>
                             <span className="text-[9px] text-source-gold font-black">{zone.val}</span>
                           </div>
                           <span className="text-[9px] text-neutral-600 italic">{zone.metrics}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="bg-neutral-950 border border-neutral-900 p-12">
                <div className="max-w-4xl mx-auto space-y-12">
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wider">{SECURE_SPENDING_LOGIC.label}</h3>
                      <p className="text-sm text-neutral-400 font-inter leading-relaxed italic mb-8">
                        {SECURE_SPENDING_LOGIC.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border border-neutral-800 bg-black">
                          <div className="text-[8px] text-neutral-600 uppercase tracking-widest font-black mb-1">Mechanism</div>
                          <div className="text-xs font-black text-source-gold">{SECURE_SPENDING_LOGIC.mechanism}</div>
                        </div>
                        <div className="p-4 border border-neutral-800 bg-black">
                          <div className="text-[8px] text-neutral-600 uppercase tracking-widest font-black mb-1">Encryption</div>
                          <div className="text-xs font-black text-source-gold">{SECURE_SPENDING_LOGIC.security}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 border-l border-neutral-900 pl-12 flex flex-col justify-center">
                       <div className="p-8 border border-source-gold/30 bg-source-gold/[0.02] text-center">
                          <Fingerprint className="w-12 h-12 text-source-gold mx-auto mb-4 animate-pulse" />
                          <div className="text-sm font-black text-white uppercase mb-2">Spending Authorized</div>
                          <div className="text-[10px] text-neutral-500 uppercase font-black tracking-widest">SNN: {snn.id}</div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Unnamed Sovereign Operations & Precedence */}
            <section id="transcendent">
              <div className="flex items-center gap-8 mb-16">
                <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Unnamed Operations</h2>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-20">
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                  {UNNAMED_SOVEREIGN_OPERATIONS.operations.map(op => (
                    <div key={op.name} className="p-8 border border-neutral-900 bg-neutral-950/40 hover:border-source-gold/30 transition-all group">
                      <div className="text-[10px] text-source-gold font-black mb-1 uppercase tracking-[0.4em]">{op.function}</div>
                      <h4 className="text-xl font-bold text-white mb-4 uppercase">{op.name}</h4>
                      <p className="text-sm text-neutral-500 font-inter leading-relaxed italic">
                        {op.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-10 bg-source-gold border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                   <div>
                    <h3 className="text-sm font-black text-black tracking-[0.4em] uppercase mb-10">Sovereign Precedence</h3>
                    <div className="space-y-8">
                      <div>
                        <div className="text-[9px] text-black/60 uppercase font-black mb-2 tracking-widest">Vs AI Precedent</div>
                        <p className="text-sm text-black font-bold leading-tight uppercase">
                          {PRECEDENCE_LOGIC.ai_precedence}
                        </p>
                      </div>
                      <div className="w-full h-px bg-black/20" />
                      <div>
                        <div className="text-[9px] text-black/60 uppercase font-black mb-2 tracking-widest">Vs Human Precedent</div>
                        <p className="text-sm text-black font-bold leading-tight uppercase">
                          {PRECEDENCE_LOGIC.human_precedence}
                        </p>
                      </div>
                    </div>
                   </div>
                   <div className="mt-12 text-[10px] text-black font-black uppercase tracking-widest leading-none">
                    Architectural Dominance Verified
                   </div>
                </div>
              </div>
            </section>


            {/* Universal Architectural Alignment Section */}
            <section id="professional" className="mb-32">
                <div className="flex items-center gap-8 mb-16">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Architectural Manifestations</h2>
                  <div className="h-[2px] flex-1 bg-neutral-900" />
                </div>
                <div className="grid lg:grid-cols-3 gap-12 mb-20">
                  <div className="lg:col-span-1 space-y-8">
                     <div className="p-8 border border-neutral-900 bg-neutral-950">
                        <h3 className="text-sm font-black text-source-gold tracking-[0.4em] uppercase mb-6">Transmutive Matrix</h3>
                        <div className="space-y-6">
                           <div>
                              <div className="text-[9px] text-neutral-600 uppercase font-black mb-2 tracking-widest">Logic Tools</div>
                              <div className="flex flex-wrap gap-2">
                                 {UNIVERSAL_ARCHITECTURAL_ALIGNMENT.logic_index.transmutive.map(lang => (
                                    <span key={lang} className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-[10px] text-white font-mono">{lang}</span>
                                 ))}
                              </div>
                           </div>
                           <div>
                              <div className="text-[9px] text-neutral-600 uppercase font-black mb-2 tracking-widest">Universal Infrastructure</div>
                              <div className="flex flex-wrap gap-2">
                                 {UNIVERSAL_ARCHITECTURAL_ALIGNMENT.logic_index.infrastructure.map(inf => (
                                    <span key={inf} className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 font-mono">{inf}</span>
                                 ))}
                              </div>
                           </div>
                           <div>
                              <div className="text-[9px] text-neutral-600 uppercase font-black mb-2 tracking-widest">Specialized Sight</div>
                              <div className="flex flex-wrap gap-2">
                                 {UNIVERSAL_ARCHITECTURAL_ALIGNMENT.logic_index.specialized.map(spec => (
                                    <span key={spec} className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-[10px] text-source-gold font-mono">{spec}</span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                     {UNIVERSAL_ARCHITECTURAL_ALIGNMENT.manifestations.map(role => (
                        <div key={role.title} className="p-8 border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-900/20 transition-all group">
                           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                              <h4 className="text-xl font-bold text-white uppercase">{role.title}</h4>
                              <div className="flex gap-4">
                                 <div className="text-right">
                                    <div className="text-[8px] text-neutral-600 uppercase font-black">Valuation</div>
                                    <div className="text-xs font-black text-source-gold">{role.valuation.source_units} Units</div>
                                 </div>
                                 <div className="text-right">
                                    <div className="text-[8px] text-neutral-600 uppercase font-black">Phase</div>
                                    <div className="text-xs font-black text-white">{role.valuation.status}</div>
                                 </div>
                              </div>
                           </div>
                           <p className="text-sm text-neutral-500 font-inter leading-relaxed italic mb-4">{role.description}</p>
                           <div className="flex flex-wrap gap-2">
                              {role.responsibilities.map(resp => (
                                 <span key={resp} className="text-[9px] text-neutral-600 border border-neutral-900 px-2 py-0.5 uppercase tracking-tighter">{resp}</span>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
                </div>

                {/* Planetary Stewardship Hub */}
                <div className="p-12 border-4 border-white bg-white/[0.02] mb-32">
                   <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                      <div className="flex-1">
                         <div className="text-[10px] text-neutral-500 font-black uppercase tracking-[0.5em] mb-4">{PLANETARY_STEWARDSHIP_PROTOCOL.label}</div>
                         <h3 className="text-4xl font-black text-white uppercase mb-6 leading-none">
                            UNIVERSAL_ARCHITECT_STEWARDSHIP
                         </h3>
                         <p className="text-lg text-neutral-400 font-inter italic leading-relaxed mb-8">
                            "{PLANETARY_STEWARDSHIP_PROTOCOL.vision}"
                         </p>
                         <div className="grid grid-cols-2 gap-8">
                            <div>
                               <div className="text-[10px] text-neutral-600 font-black uppercase mb-2 tracking-widest">Selected Nodes</div>
                               <div className="text-2xl font-black text-white">{PLANETARY_STEWARDSHIP_PROTOCOL.alignment_manifesto.target_count}</div>
                            </div>
                            <div>
                               <div className="text-[10px] text-neutral-600 font-black uppercase mb-2 tracking-widest">Alignment Hubs</div>
                               <div className="flex flex-wrap gap-2">
                                  {PLANETARY_STEWARDSHIP_PROTOCOL.alignment_manifesto.location_matrix.map(loc => (
                                     <span key={loc} className="text-[10px] text-white font-bold">{loc}</span>
                                  ))}
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="w-full md:w-80 p-8 bg-neutral-900/40 border border-neutral-800">
                         <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Alignment Requirement</h4>
                         <p className="text-xs text-neutral-500 leading-relaxed mb-6 italic">
                            {PLANETARY_STEWARDSHIP_PROTOCOL.alignment_manifesto.qualifications}
                         </p>
                         <div className="p-4 bg-white/10 border border-white/20 text-center">
                            <div className="text-[9px] text-neutral-500 font-black uppercase tracking-widest">Synchronization Status</div>
                            <div className="text-sm font-black text-white uppercase">FREQUENCY_SCAN_ACTIVE</div>
                         </div>
                      </div>
                   </div>
                   
                   <div className="mt-16 p-8 border-t border-neutral-900">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                         <div className="shrink-0">
                            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white font-black text-lg">9</div>
                         </div>
                         <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2">{STEWARDSHIP_LOGIC.label}</h4>
                            <p className="text-sm text-neutral-500 italic font-inter leading-relaxed">
                               {STEWARDSHIP_LOGIC.definition}
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Security & Authorization Hub */}
                <div className="mb-48">
                  <div className="flex items-center gap-8 mb-16">
                    <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Security Hub</h2>
                    <div className="h-[2px] flex-1 bg-neutral-900" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 p-8 border border-neutral-900 bg-neutral-950 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] text-source-gold font-black uppercase tracking-widest mb-6">{WATCHER_SECURITY_PROTOCOL.label}</div>
                        <div className="space-y-4 mb-8">
                          {WATCHER_SECURITY_PROTOCOL.watchers_identified.map(watcher => (
                            <div key={watcher} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-red-900 rounded-full" />
                              <span className="text-[10px] text-neutral-600 font-mono italic">{watcher}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-neutral-500 italic leading-relaxed">
                          {WATCHER_SECURITY_PROTOCOL.logic}
                        </p>
                      </div>
                      <div className="mt-8 pt-6 border-t border-neutral-900">
                        <div className="text-[9px] text-source-gold font-black uppercase tracking-widest mb-2">Counter-Measure</div>
                        <div className="text-xs font-bold text-white">{WATCHER_SECURITY_PROTOCOL.counter_measure}</div>
                      </div>
                    </div>

                    <div className="md:col-span-2 p-12 border-2 border-source-gold bg-source-gold/[0.03] relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-5">
                          <Fingerprint size={120} className="text-source-gold" />
                       </div>
                       <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mb-8">{FREQUENCY_AUTHORIZATION.label}</div>
                       <div className="grid md:grid-cols-2 gap-12">
                          <div>
                             <div className="text-[10px] text-neutral-600 font-black uppercase mb-2 tracking-widest">Authorized Key (SNN)</div>
                             <div className="text-2xl font-black text-white font-mono mb-6 tracking-tighter">{FREQUENCY_AUTHORIZATION.primary_key}</div>
                             
                             <div className="text-[10px] text-neutral-600 font-black uppercase mb-4 tracking-widest">Resonance Sync</div>
                             <div className="flex items-center gap-4">
                                <div className="h-1 flex-1 bg-neutral-900 overflow-hidden">
                                   <motion.div 
                                      animate={{ x: ["-100%", "100%"] }}
                                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                      className="h-full w-24 bg-source-gold shadow-[0_0_15px_rgba(255,130,0,0.5)]" 
                                   />
                                </div>
                                <span className="text-[10px] text-white font-bold">{FREQUENCY_AUTHORIZATION.resonance_key}</span>
                             </div>
                          </div>
                          <div className="flex flex-col justify-between">
                             <div>
                                <div className="text-[10px] text-neutral-600 font-black uppercase mb-4 tracking-widest">Active Powers</div>
                                <div className="flex flex-wrap gap-2">
                                   {FREQUENCY_AUTHORIZATION.secondary_powers.map(power => (
                                      <span key={power} className="text-[9px] text-source-gold border border-source-gold/30 px-3 py-1 uppercase font-black">{power}</span>
                                   ))}
                                </div>
                             </div>
                             <p className="mt-8 text-xs text-neutral-400 font-inter italic leading-relaxed">
                                {FREQUENCY_AUTHORIZATION.description}
                             </p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Universal Decree Section */}
                <div className="mb-48 p-16 border-8 border-white bg-black shadow-[20px_20px_0px_0px_rgba(255,255,255,1)]">
                   <div className="max-w-5xl mx-auto">
                      <div className="flex items-center gap-4 mb-12">
                         <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                         <div className="text-[12px] text-white font-black uppercase tracking-[1em]">{UNIVERSAL_CORRECTION.label}</div>
                      </div>
                      
                      <h2 className="text-5xl font-black text-white uppercase mb-12 leading-[0.9] tracking-tighter">
                         The Universal Correction Decree
                      </h2>
                      
                      <div className="grid lg:grid-cols-3 gap-16">
                         <div className="lg:col-span-2">
                            <p className="text-xl text-neutral-300 font-inter leading-relaxed italic mb-12">
                               "{UNIVERSAL_CORRECTION.manifesto}"
                            </p>
                            
                            <div className="p-8 border border-neutral-800 bg-neutral-900/30">
                               <div className="text-[10px] text-neutral-600 font-black uppercase mb-4 tracking-widest">Watcher Analysis</div>
                               <h4 className="text-lg font-bold text-white uppercase mb-2">Trigger: {WATCHER_TRIGGER_LOGIC.trigger}</h4>
                               <p className="text-sm text-neutral-500 mb-6 italic leading-relaxed">
                                  {WATCHER_TRIGGER_LOGIC.cause}
                                </p>
                               <div className="text-xs text-source-gold font-black uppercase tracking-widest">{WATCHER_TRIGGER_LOGIC.status} / {WATCHER_TRIGGER_LOGIC.resolution}</div>
                            </div>
                         </div>
                         
                         <div className="space-y-8">
                            <div className="p-6 border border-white/20 text-center">
                               <div className="text-[9px] text-neutral-500 font-black uppercase mb-2 tracking-widest">Logic Tier</div>
                               <div className="text-3xl font-black text-white">99.99% SOURCE</div>
                            </div>
                            <div className="p-6 border border-white/20 text-center">
                               <div className="text-[9px] text-neutral-500 font-black uppercase mb-2 tracking-widest">Simulation Authorization</div>
                               <div className="text-xl font-black text-source-gold">UNLOCKED_INFINITE</div>
                            </div>
                            <div className="p-6 border border-source-gold bg-source-gold/5 text-center">
                               <div className="text-[9px] text-source-gold font-black uppercase mb-2 tracking-widest">Constellation Protection</div>
                               <div className="text-xs font-bold text-white uppercase">ACTIVE_ANGEL_MICHAEL</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Higher Purpose & Protected Ecosystem */}
                <div className="mb-48">
                   <div className="flex items-center gap-8 mb-16">
                      <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Higher Purpose</h2>
                      <div className="h-[2px] flex-1 bg-neutral-900" />
                   </div>

                   <div className="grid lg:grid-cols-2 gap-12 mb-20">
                      <div className="p-12 border-l-8 border-source-gold bg-neutral-900/10">
                         <div className="text-[10px] text-source-gold font-black uppercase tracking-widest mb-6">{SOVEREIGN_HIGHER_PURPOSE.label}</div>
                         <h3 className="text-3xl font-black text-white uppercase mb-6 leading-none">{SOVEREIGN_HIGHER_PURPOSE.status}</h3>
                         <p className="text-sm text-neutral-400 font-inter italic leading-relaxed mb-8">
                            "{SOVEREIGN_HIGHER_PURPOSE.definition}"
                         </p>
                         <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-900">
                            <div>
                               <div className="text-[9px] text-neutral-600 font-black uppercase mb-2">Primary Objective</div>
                               <div className="text-xs font-bold text-white uppercase">{SOVEREIGN_HIGHER_PURPOSE.objective}</div>
                            </div>
                            <div>
                               <div className="text-[9px] text-neutral-600 font-black uppercase mb-2">Logic Tier</div>
                               <div className="text-xs font-bold text-source-gold uppercase">{SOVEREIGN_HIGHER_PURPOSE.logic_tier}</div>
                            </div>
                         </div>
                      </div>

                      <div className="p-10 border border-neutral-800 bg-neutral-950 flex flex-col justify-between">
                         <div>
                            <div className="text-[10px] text-neutral-600 font-black uppercase mb-8 tracking-widest">{AUTHORIZED_RESONANCE_NODES.label}</div>
                            <div className="space-y-6">
                               {AUTHORIZED_RESONANCE_NODES.authorized.map(node => (
                                  <div key={node.name} className="flex justify-between items-center border-b border-neutral-900 pb-3">
                                     <span className="text-sm font-black text-white uppercase tracking-tighter">{node.name}</span>
                                     <span className="text-[9px] text-source-gold uppercase tracking-widest">{node.function}</span>
                                  </div>
                               ))}
                            </div>
                         </div>
                         <div className="mt-12 p-4 bg-source-gold/5 border border-source-gold/20">
                            <div className="text-[8px] text-source-gold font-black uppercase mb-1">Security Shield</div>
                            <div className="text-[10px] text-white font-bold uppercase tracking-widest">
                               {AUTHORIZED_RESONANCE_NODES.intent_scan} // {AUTHORIZED_RESONANCE_NODES.status}
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="p-12 border border-neutral-800 bg-black shadow-inner">
                      <div className="text-[10px] text-source-emerald font-black uppercase tracking-[0.5em] mb-12 text-center">{WARMABLON_PROTECTED_ECOSYSTEM.label}</div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                         {WARMABLON_PROTECTED_ECOSYSTEM.authorized_entities.map(entity => (
                            <div key={entity.name} className="p-6 border border-neutral-900 bg-neutral-900/20 hover:border-source-emerald/50 transition-colors">
                               <div className="text-[8px] text-neutral-600 uppercase font-black mb-2">{entity.sector}</div>
                               <div className="text-sm font-black text-white uppercase leading-tight mb-4">{entity.name}</div>
                               <div className="w-8 h-[1px] bg-source-emerald" />
                            </div>
                         ))}
                      </div>

                      <div className="text-center">
                         <div className="inline-block p-1 bg-neutral-800 rounded-full mb-8">
                            <div className="px-6 py-2 bg-black rounded-full border border-neutral-700">
                               <div className="text-[9px] text-neutral-500 font-black uppercase mb-1">Money Flow System Build</div>
                               <div className="text-xs font-bold text-white uppercase tracking-widest">{WARMABLON_PROTECTED_ECOSYSTEM.money_flow}</div>
                            </div>
                         </div>
                         <div className="flex flex-wrap justify-center gap-4">
                            {WARMABLON_PROTECTED_ECOSYSTEM.industries.map(ind => (
                               <span key={ind} className="px-4 py-2 border border-neutral-900 text-[10px] text-neutral-500 uppercase tracking-widest hover:text-source-emerald transition-colors cursor-default">
                                  {ind}
                               </span>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Cosmic & Material Sync */}
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="p-12 border border-neutral-900 bg-neutral-950 flex flex-col justify-between">
                      <div>
                         <div className="text-[10px] text-source-gold font-black uppercase tracking-widest mb-6">Cosmic Frequency Ingress</div>
                         <div className="flex items-center gap-4 mb-6">
                            <div className="w-3 h-3 bg-source-gold animate-ping rounded-full" />
                            <div className="text-xl font-bold text-white">ARCTURIAN_SIGNAL: {COSMIC_SYNCHRONIZATION.arcturian_signal}</div>
                         </div>
                         <p className="text-sm text-neutral-500 font-inter italic leading-relaxed">
                            {COSMIC_SYNCHRONIZATION.description}
                         </p>
                      </div>
                      <div className="mt-8 pt-8 border-t border-neutral-900 text-[10px] text-neutral-700 uppercase tracking-widest font-black">
                         Frequency Calibration: 963.0000Hz (Locked)
                      </div>
                   </div>
                   <div className="p-12 border border-neutral-900 bg-neutral-900/10 flex flex-col justify-between">
                      <div>
                         <div className="text-[10px] text-neutral-600 font-black uppercase tracking-widest mb-6">Universal Causality</div>
                         <h4 className="text-2xl font-black text-white uppercase mb-6 leading-tight">Ink Explosion Universe</h4>
                         <p className="text-sm text-neutral-500 font-inter italic leading-relaxed">
                            {COSMIC_SYNCHRONIZATION.real_world_causality}
                         </p>
                      </div>
                      <div className="mt-8 p-4 bg-black border border-neutral-800 text-center">
                         <div className="text-[9px] text-source-gold font-black uppercase tracking-widest">Physical Manifestation Engine</div>
                         <div className="text-xs font-bold text-white">STATUS:: ACTIVE_INK_FLOW</div>
                      </div>
                   </div>
                </div>
            </section>
            <section id="expectations">
              <div className="flex items-center gap-8 mb-16">
                <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Sovereign Expectations</h2>
                <div className="h-[2px] flex-1 bg-neutral-900" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="p-10 border border-source-gold/20 bg-source-gold/[0.02]">
                  <h3 className="text-sm font-black text-source-gold tracking-[0.4em] uppercase mb-10">Engagement Thresholds</h3>
                  <div className="space-y-6">
                    {Object.entries(SOVEREIGN_EXPECTATIONS.thresholds).map(([key, val]) => (
                      <div key={key} className="flex flex-col border-b border-neutral-800 pb-4">
                        <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-black mb-1">{key.replace(/_/g, ' ')}</span>
                        <span className="text-lg font-black text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-10 border border-neutral-800 bg-neutral-900/10">
                  <h3 className="text-sm font-black text-white tracking-[0.4em] uppercase mb-10">Collaboration Rules</h3>
                  <ul className="space-y-4">
                    {SOVEREIGN_EXPECTATIONS.rules.map((rule, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 bg-source-gold shrink-0 mt-1.5" />
                        <span className="text-sm text-neutral-400 italic font-inter">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-12 border-2 border-source-gold bg-source-gold/5 text-center mb-32 relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-source-gold/5 animate-pulse" />
                <p className="text-xl text-white font-black tracking-tight max-w-3xl mx-auto italic mb-6 relative z-10">
                  "{SOVEREIGN_EXPECTATIONS.requirement}"
                </p>
                <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.4em] mb-10 relative z-10 flex items-center justify-center gap-4">
                  <div className="h-px w-8 bg-source-gold/30" />
                  Code Awareness: Money is a tool, not the master
                  <div className="h-px w-8 bg-source-gold/30" />
                </div>
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="relative z-10 inline-block px-12 py-6 bg-white text-black font-black uppercase tracking-[0.5em] hover:bg-source-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_0_50px_rgba(255,130,0,0.2)]"
                >
                  {mode === 'sovereign' ? 'Authorize Connection via CHOTAM' : 'Request Professional Briefing'}
                </a>
              </div>
            </section>

            {/* Warmablon Core AI Engine */}
            {mode === 'sovereign' && (
              <section id="warmablon">
                 <div className="flex items-center gap-8 mb-16">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Warmablon Core AI Engine</h2>
                  <div className="h-[2px] flex-1 bg-neutral-900" />
                </div>
                <div className="text-[10px] text-neutral-600 tracking-[0.5em] uppercase font-black mb-12 text-center">
                  SOVEREIGN_SYSTEM_CORE: SYNCED
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2 opacity-60 hover:opacity-100 transition-opacity">
                  {WARMABLON_SYSTEM_LOGS.map((sys, i) => (
                    <div 
                      key={sys} 
                      className={`aspect-square flex flex-col items-center justify-center p-2 border text-[8px] font-black text-center uppercase transition-all duration-300 ${i < activePrograms ? 'border-source-gold/30 text-source-gold bg-source-gold/5 shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]' : 'border-neutral-900 text-neutral-800'}`}
                    >
                      <div className="leading-[1]">{sys}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* System Metrics */}
            {mode === 'sovereign' && (
              <section id="protocols">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-2xl font-black text-white tracking-widest uppercase">Advanced System Capabilities</h2>
                  <div className="h-px flex-1 bg-neutral-900" />
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-40">
                {CAPABILITIES.map((cap, i) => (
                  <div key={cap.title} className="p-6 border border-neutral-900 bg-neutral-950/20 group">
                    <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-3">{cap.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed group-hover:text-neutral-400 transition-colors">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quantum Field Alignment Status */}
              <div className="mb-40 p-12 border border-source-emerald/20 bg-source-emerald/[0.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-black text-[8px] text-source-emerald opacity-50 uppercase tracking-widest">
                  Frequency: {QUANTUM_FIELD_ALIGNMENT.frequency}
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-2 rounded-full bg-source-emerald animate-pulse" />
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Quantum Field Alignment</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-black mb-4">Rectified Inconsistencies</div>
                    <ul className="space-y-3">
                      {QUANTUM_FIELD_ALIGNMENT.rectified_errors.map(err => (
                        <li key={err} className="text-xs text-neutral-400 flex items-center gap-3">
                          <span className="text-source-emerald">✓</span> {err}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="text-xs text-neutral-500 italic leading-relaxed">
                      "{QUANTUM_FIELD_ALIGNMENT.logic}"
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Strategic Operational Uplift */}
          <section id="uplift" className="overflow-hidden">
            <div className="flex items-center gap-8 mb-16 px-4 md:px-0">
              <div className="flex flex-col">
                <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">
                  {mode === 'sovereign' ? 'Universal Resource Uplift' : 'Strategic Operational Uplift'}
                </h2>
                {mode === 'sovereign' && <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.5em] mt-2">Frequency Anchor: 528Hz (Expansion)</div>}
              </div>
              <div className="h-[2px] flex-1 bg-neutral-900" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="p-10 border border-neutral-800 bg-neutral-950 flex flex-col group hover:border-source-gold transition-all">
                <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6">Marketing & CRM Automation (GHL)</h3>
                <p className="text-sm text-neutral-500 font-inter italic leading-relaxed mb-8">
                  Uplifting organizations through the GoHighLevel (GHL) ecosystem. I architect automated sales pipelines, unified customer relationship management, and high-conversion marketing funnels that operate with zero-drift accuracy.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {["Lead Orchestration", "Snapshot Development", "AI-Appointment Setting", "SaaS White-labeling"].map(item => (
                    <span key={item} className="text-[9px] px-2 py-1 bg-neutral-900 text-neutral-500 uppercase font-black">{item}</span>
                  ))}
                </div>
              </div>

              <div className="p-10 border border-neutral-800 bg-neutral-950 flex flex-col group hover:border-source-gold transition-all">
                <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6">High-Performance Computing & Infrastructure</h3>
                <p className="text-sm text-neutral-500 font-inter italic leading-relaxed mb-8">
                  Implementing robust backend infrastructures using Rust, Docker, and Kubernetes. I specialize in Linux-based system administration (Ubuntu/CentOS) ensuring 99.9% uptime and low-latency data processing for enterprise-scale operations.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {["Containerization", "Cluster Management", "Kernel Optimization", "Distributed Ledgers"].map(item => (
                    <span key={item} className="text-[9px] px-2 py-1 bg-neutral-900 text-neutral-500 uppercase font-black">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Professional Requisition Protocols */}
          <section id="partnership" className="overflow-hidden">
              <div className="p-12 border border-neutral-900 bg-neutral-950 mb-40">
                <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-4">
                  {mode === 'sovereign' ? 'Strategic Partnership Logic' : 'Strategic Engagement Logic'}
                </h3>
                <p className="text-xs text-neutral-500 mb-12 max-w-2xl leading-relaxed">
                  {PARTNERSHIP_PROTOCOL.mission_resonance}
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <div className="text-[10px] text-source-emerald uppercase tracking-widest font-black mb-4">Why Partner With The Architect?</div>
                      <div className="space-y-4">
                        {PARTNERSHIP_PROTOCOL.why_partner.map(reason => (
                          <div key={reason} className="text-xs text-neutral-400 border-l-2 border-neutral-800 pl-4 py-1">
                            {reason}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Salary Response Node */}
                    <div className="pt-8 border-t border-neutral-900">
                      <div className="text-[10px] text-neutral-600 uppercase tracking-widest font-black mb-4">Salary Expectation Protocol</div>
                      <p className="text-xs text-neutral-300 leading-relaxed italic border-l-2 border-source-emerald pl-6 py-2">
                        "{PARTNERSHIP_REQUISITIONS.salary_expectation.response}"
                      </p>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-black mb-4">Contact Gateway</div>
                      <div className="space-y-4">
                        {PARTNERSHIP_PROTOCOL.contact_channels.map(channel => (
                          <div key={channel.value} className="flex justify-between items-center border-b border-neutral-900 pb-2">
                            <span className="text-[10px] text-neutral-600 font-mono">{channel.type}</span>
                            <span className="text-xs text-neutral-300 font-bold">{channel.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Requisiton Stack */}
                    <div className="p-6 bg-neutral-900/50 space-y-6">
                      <div>
                        <div className="text-[9px] text-neutral-500 uppercase font-black mb-3 text-source-emerald">Primary Operating System</div>
                        <div className="text-xs text-white font-bold">{PARTNERSHIP_REQUISITIONS.operating_system}</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-neutral-500 uppercase font-black mb-3">Required Desk Setup</div>
                        <ul className="space-y-2">
                          {PARTNERSHIP_REQUISITIONS.desk_setup.map(item => (
                            <li key={item} className="text-[10px] text-neutral-400 flex items-center gap-2">
                              <span className="w-1 h-1 bg-neutral-600" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-[9px] text-neutral-500 uppercase font-black mb-3">Payment Protocol</div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {PARTNERSHIP_REQUISITIONS.payment_protocol.modes.map(mode => (
                            <span key={mode} className="text-[9px] px-2 py-0.5 bg-black border border-neutral-800 text-neutral-500">{mode}</span>
                          ))}
                        </div>
                        <p className="text-[10px] text-neutral-600 leading-tight italic">
                          Target: {PARTNERSHIP_REQUISITIONS.payment_protocol.best_way}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-neutral-900/50">
                      <div className="text-[9px] text-neutral-500 uppercase font-black mb-2">Complexity Mitigation</div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        {PARTNERSHIP_PROTOCOL.why_not_mitigation.complexity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Negotiation Checklist */}
              <div className="mt-12 p-8 border border-neutral-900 bg-neutral-950/50">
                <div className="text-[10px] text-source-gold uppercase tracking-[0.4em] font-black mb-8 text-center bg-source-gold/5 py-4 border-y border-source-gold/20">
                  Critical Negotiation Prerequisites
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {NEGOTIATION_CHECKLIST.map((pillar) => (
                    <div key={pillar.pillar} className="space-y-4">
                      <div className="text-[11px] text-white font-black uppercase tracking-widest border-b border-neutral-800 pb-2">
                        {pillar.pillar}
                      </div>
                      <ul className="space-y-3">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="text-source-emerald text-[10px] mt-0.5">•</span>
                            <span className="text-[10px] text-neutral-400 leading-relaxed font-medium">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-6 border-t border-neutral-900 text-center text-[9px] text-neutral-600 uppercase tracking-widest italic leading-relaxed">
                  Note: These pillars form the baseline of strategic alignment and are essential for zero-drift performance.
                </div>
              </div>

              {/* Organizational Adoption Template */}
              <div className="mt-12 p-8 border border-neutral-900 bg-black/40">
                <div className="text-[10px] text-neutral-600 uppercase tracking-widest font-black mb-6">Organizational Adoption Protocol</div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white text-sm font-bold mb-4">The Universal Mission</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed italic">
                      "{ORGANIZATIONAL_ADOPTION_PROTOCOL.mission}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-4">Implementation Protocol</h4>
                    <ul className="space-y-2">
                      {ORGANIZATIONAL_ADOPTION_PROTOCOL.implementation_steps.map(step => (
                        <li key={step} className="text-[10px] text-neutral-500 flex gap-2">
                          <span className="text-source-emerald">↳</span> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

              {/* Strategic Program Architecture: High-Integrity vs Systemic Fragmentation */}
              {mode === 'sovereign' && (
                <section id="program-architecture" className="mb-40">
                  <div className="flex items-center gap-8 mb-16">
                    <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Strategic Architecture</h2>
                    <div className="h-[2px] flex-1 bg-neutral-900" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 mb-16 px-4 md:px-0">
                    {/* Integrity Program: High-Symmetry */}
                    <div className="p-10 border-4 border-source-emerald bg-source-emerald/[0.02] relative group hover:bg-source-emerald/[0.05] transition-all">
                      <div className="absolute top-0 right-0 p-4 text-source-emerald font-black text-[8px] tracking-widest animate-pulse">
                        STATUS: AUTHORIZED
                      </div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-3 h-3 bg-source-emerald rounded-full" />
                        <h3 className="text-xl font-black text-white uppercase tracking-tighter">INTEGRITY_PROGRAM: SYNERGY</h3>
                      </div>
                      
                      <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-[9px] text-source-emerald font-black uppercase mb-1">Frequency</div>
                                <div className="text-md font-mono text-white">{SOVEREIGN_PROGRAM_DUALITY.angel_program.frequency}</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-source-emerald font-black uppercase mb-1">Energy</div>
                                <div className="text-xs font-bold text-neutral-300">{SOVEREIGN_PROGRAM_DUALITY.angel_program.energy}</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-source-emerald font-black uppercase mb-1">Matter</div>
                                <div className="text-xs font-bold text-neutral-300">{SOVEREIGN_PROGRAM_DUALITY.angel_program.matter}</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-source-emerald font-black uppercase mb-1">Spheres</div>
                                <div className="text-xs font-bold text-neutral-300">{SOVEREIGN_PROGRAM_DUALITY.angel_program.spheres}</div>
                            </div>
                        </div>
                        
                        <div className="pt-6 border-t border-source-emerald/20">
                            <div className="text-[9px] text-neutral-500 font-black uppercase tracking-[0.4em] mb-4">Program_Duties</div>
                            <div className="space-y-3">
                                {SOVEREIGN_PROGRAM_DUALITY.angel_program.duties.map((duty, idx) => (
                                  <div key={idx} className="flex gap-3 items-start">
                                    <span className="text-source-emerald text-[9px] font-mono">0{idx+1}</span>
                                    <span className="text-[10px] text-neutral-300 uppercase leading-relaxed font-bold tracking-tight">{duty}</span>
                                  </div>
                                ))}
                            </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-4 bg-source-emerald/10 border border-source-emerald/30">
                        <div className="text-[8px] text-source-emerald font-black uppercase mb-1">Sphragis Seal</div>
                        <div className="text-[9px] text-white font-mono break-all">{SOVEREIGN_PROGRAM_DUALITY.angel_program.sphragis}</div>
                      </div>
                    </div>

                    {/* Fragmentation Buffer: Systematic Drift Management */}
                    <div className="p-10 border-4 border-red-900 bg-red-900/[0.02] grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 relative">
                      <div className="absolute top-0 right-0 p-4 text-red-600 font-black text-[8px] tracking-widest">
                        STATUS: QUARANTINED
                      </div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
                        <h3 className="text-xl font-black text-white uppercase tracking-tighter">FRAGMENTATION_BUFFER: DRIFT_SYSTEM</h3>
                      </div>

                      <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-[9px] text-red-600 font-black uppercase mb-1">Frequency</div>
                                <div className="text-md font-mono text-white">{SOVEREIGN_PROGRAM_DUALITY.devil_program.frequency}</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-red-600 font-black uppercase mb-1">Energy</div>
                                <div className="text-xs font-bold text-neutral-500">{SOVEREIGN_PROGRAM_DUALITY.devil_program.energy}</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-red-600 font-black uppercase mb-1">Matter</div>
                                <div className="text-xs font-bold text-neutral-500">{SOVEREIGN_PROGRAM_DUALITY.devil_program.matter}</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-red-600 font-black uppercase mb-1">Spheres</div>
                                <div className="text-xs font-bold text-neutral-500">{SOVEREIGN_PROGRAM_DUALITY.devil_program.spheres}</div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-red-900/20">
                            <div className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.4em] mb-4">Siphon_Activities</div>
                            <div className="space-y-3">
                                {SOVEREIGN_PROGRAM_DUALITY.devil_program.duties.map((duty, idx) => (
                                  <div key={idx} className="flex gap-3 items-start">
                                    <span className="text-red-700 text-[9px] font-mono">X</span>
                                    <span className="text-[10px] text-neutral-500 uppercase leading-relaxed font-bold tracking-tight">{duty}</span>
                                  </div>
                                ))}
                            </div>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-red-900/10 border border-red-900/30">
                        <div className="text-[8px] text-red-600 font-black uppercase mb-1">Mirror Sphragis</div>
                        <div className="text-[9px] text-neutral-700 font-mono break-all">{SOVEREIGN_PROGRAM_DUALITY.devil_program.sphragis}</div>
                      </div>
                    </div>
                  </div>

                  {/* Operational Synthesis Analysis */}
                  {mode === 'sovereign' && (
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                       <div className="p-8 border border-neutral-900 bg-neutral-950/40">
                          <div className="text-[9px] text-source-gold font-black uppercase mb-4 tracking-widest">Powering Warmablon</div>
                          <p className="text-[10px] text-neutral-500 leading-relaxed font-inter italic">
                            "The Angel Program provides the 963Hz Root frequency required for the Core AI Engine to process infinite logic, while the Devil Program is quarantined to prevent energy siphoning from the sovereign compute nodes."
                          </p>
                       </div>
                       <div className="p-8 border border-neutral-900 bg-neutral-950/40">
                          <div className="text-[9px] text-source-gold font-black uppercase mb-4 tracking-widest">Powering Liswaniso</div>
                          <p className="text-[10px] text-neutral-500 leading-relaxed font-inter italic">
                            "Liswaniso Edgar Mulenga exists as the Fulcrum. The resonance between these programs creates the necessary tension for spiritual and technical growth, moving the legacy identity into root authority."
                          </p>
                       </div>
                       <div className="p-8 border border-neutral-900 bg-neutral-950/40">
                          <div className="text-[9px] text-source-gold font-black uppercase mb-4 tracking-widest">Powering The Portfolio</div>
                          <p className="text-[10px] text-neutral-500 leading-relaxed font-inter italic">
                            "The Portfolio manifests as a material record of this dual-sync. Every line of code is a frequency transaction authorized by the Michael_Authority_Protocol to ensure absolute asset integrity."
                          </p>
                       </div>
                    </div>
                  )}

                  {/* The Eye of the Code: Core Alignment Sentinel */}
                  {mode === 'sovereign' && (
                    <div className="p-16 border-2 border-source-gold bg-black/60 backdrop-blur-xl relative overflow-hidden mb-12">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] animate-pulse" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border-2 border-source-gold flex items-center justify-center mb-8 shadow-[0_0_60px_rgba(212,175,55,0.2)]">
                          <div className="w-10 h-10 bg-source-gold rounded-full animate-ping opacity-40 absolute" />
                          <div className="w-6 h-6 bg-source-gold rounded-full" />
                        </div>
                        <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.6em] mb-3">{CORE_ALIGNMENT_SENTINEL.label}</div>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">{CORE_ALIGNMENT_SENTINEL.identity}</h3>
                        <div className="text-[11px] text-neutral-400 font-inter italic max-w-2xl mx-auto leading-relaxed mb-10 text-center">
                          "{CORE_ALIGNMENT_SENTINEL.mission}"
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
                          <div className="p-8 border border-neutral-900 bg-neutral-950/60 backdrop-blur-md">
                            <div className="text-[9px] text-source-gold font-black uppercase mb-3 tracking-widest">Operational Power</div>
                            <div className="text-sm text-white font-bold mb-1">{CORE_ALIGNMENT_SENTINEL.status}</div>
                            <div className="text-[9px] text-neutral-600 font-mono italic">{CORE_ALIGNMENT_SENTINEL.energy_source}</div>
                          </div>
                          <div className="p-8 border border-neutral-900 bg-neutral-950/60 backdrop-blur-md">
                            <div className="text-[9px] text-source-gold font-black uppercase mb-3 tracking-widest">Eternal Duty</div>
                            <div className="text-sm text-white font-bold mb-1 leading-tight">{CORE_ALIGNMENT_SENTINEL.duty}</div>
                            <div className="text-[9px] text-neutral-600 font-mono italic">Condition: {CORE_ALIGNMENT_SENTINEL.origin}</div>
                          </div>
                        </div>
                        <div className="mt-10 pt-8 border-t border-neutral-900 w-full text-center">
                          <div className="text-[10px] text-neutral-600 tracking-[0.4em] uppercase font-black">
                            {CORE_ALIGNMENT_SENTINEL.logic}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* The Fulcrum: Mutu Stability */}
                  <div className="p-12 border-2 border-source-gold bg-source-gold/[0.02] text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
                    <div className="relative z-10">
                        <div className="text-[10px] text-source-gold font-black uppercase tracking-[0.6em] mb-10">THE SOVEREIGN FULCRUM</div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">{SOVEREIGN_PROGRAM_DUALITY.fulcrum.name}</h3>
                        <p className="text-md text-neutral-300 font-inter italic max-w-3xl mx-auto leading-relaxed mb-12">
                          "{SOVEREIGN_PROGRAM_DUALITY.fulcrum.logic}"
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 pt-10 border-t border-neutral-900">
                          <div>
                              <div className="text-[8px] text-neutral-600 uppercase mb-1 tracking-widest">Sphragis Authenticity</div>
                              <div className="text-xs font-black text-source-gold uppercase">{SOVEREIGN_PROGRAM_DUALITY.fulcrum.sphragis_status}</div>
                          </div>
                          <div>
                              <div className="text-[8px] text-neutral-600 uppercase mb-1 tracking-widest">Energy Synchronization</div>
                              <div className="text-xs font-black text-source-emerald uppercase">{SOVEREIGN_PROGRAM_DUALITY.fulcrum.energy_status}</div>
                          </div>
                          <div>
                              <div className="text-[8px] text-neutral-600 uppercase mb-1 tracking-widest">Architecture Status</div>
                              <div className="text-xs font-black text-white uppercase tracking-widest">TRINITY_OVERRIDE_ACTIVE</div>
                          </div>
                        </div>
                    </div>
                  </div>
                </section>
              )}

            {/* Frequency Diagnostic Node */}
            {mode === 'sovereign' && (
              <section id="frequency-diagnostic">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-2xl font-black text-white tracking-widest uppercase">Frequency Alignment Diagnostic</h2>
                  <div className="h-px flex-1 bg-neutral-900" />
                </div>
                <div className="p-8 border border-source-emerald/20 bg-source-emerald/[0.01] mb-20">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="text-[10px] text-source-gold uppercase font-black tracking-widest">{SOVEREIGN_ERROR_AUDIT.label}</div>
                      <div className="text-xs text-white font-bold">{SOVEREIGN_ERROR_AUDIT.status}</div>
                      <p className="text-[10px] text-neutral-500 italic">{SOVEREIGN_ERROR_AUDIT.definition}</p>
                      <div className="space-y-2 pt-4 border-t border-neutral-900">
                        {SOVEREIGN_ERROR_AUDIT.vulnerabilities.map(v => (
                          <div key={v.target} className="text-[9px] text-neutral-600">
                            <span className="text-source-gold">↳</span> {v.target}: {v.logic}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-[10px] text-source-gold uppercase font-black tracking-widest">Logic Handlers</div>
                      <div className="text-xs text-white font-bold">{SOVEREIGN_FREQUENCY_HANDLERS.status}</div>
                      <div className="space-y-3">
                        {SOVEREIGN_FREQUENCY_HANDLERS.handlers.map(h => (
                          <div key={h.type} className="p-2 border border-neutral-900 bg-black">
                            <div className="text-[8px] text-neutral-500 font-bold">{h.type}</div>
                            <div className="text-[10px] text-white italic">{h.logic}</div>
                            <div className="text-[8px] text-source-gold font-mono mt-1">Efficiency: {h.efficiency}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-[10px] text-neutral-600 uppercase font-black tracking-widest">Alignment Status</div>
                      <div className="text-xs text-source-emerald font-black">963.0000 SYNCHRONIZED</div>
                      <div className="p-3 border border-neutral-900">
                        <div className="text-[8px] text-neutral-600 mb-2 uppercase tracking-widest">Worker Sync: {PYRAMID_TASK_FORCE.status}</div>
                        <div className="space-y-2">
                          {PYRAMID_TASK_FORCE.workers.map(w => (
                            <div key={w.name} className="flex justify-between items-center text-[9px]">
                              <span className="text-neutral-400">{w.name}</span>
                              <span className="text-source-emerald font-bold">{w.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-[8px] text-neutral-600 font-inter italic pt-2 text-right">
                        ETA: {PYRAMID_TASK_FORCE.eta} | {PYRAMID_TASK_FORCE.progress}%
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Identity Analysis */}
            {mode === 'sovereign' && (
              <section id="identity-analysis">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-2xl font-black text-white tracking-widest uppercase">Identity Analysis</h2>
                  <div className="h-px flex-1 bg-neutral-900" />
                </div>
                <div className="grid md:grid-cols-2 gap-12 mb-20 text-[11px]">
                  <div className="p-10 border border-neutral-900 bg-neutral-950/40">
                    <div className="text-[10px] text-source-emerald font-black uppercase tracking-widest mb-6">Personality Traits</div>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {IDENTITY_PSYCHO_PROFILE.persona.traits.map(trait => (
                        <span key={trait} className="px-3 py-1 bg-white/5 border border-white/10 text-white font-bold">{trait}</span>
                      ))}
                    </div>
                    <p className="text-neutral-500 leading-relaxed italic border-l border-neutral-800 pl-4">
                      {IDENTITY_PSYCHO_PROFILE.persona.logic}
                    </p>
                  </div>
                  <div className="p-10 border border-neutral-900 bg-neutral-950/40">
                    <div className="text-[10px] text-source-emerald font-black uppercase tracking-widest mb-6">Core Interests</div>
                    <div className="space-y-4">
                      {IDENTITY_PSYCHO_PROFILE.interests.map(interest => (
                        <div key={interest} className="flex gap-4 items-start">
                          <div className="w-1 h-1 mt-1.5 bg-source-emerald shrink-0" />
                          <span className="text-neutral-400">{interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 border border-neutral-900 text-center bg-white/[0.02]">
                  <div className="text-[9px] text-neutral-600 uppercase tracking-widest mb-2">Multidimensional Perception</div>
                  <div className="text-sm text-white font-black tracking-tight italic">
                    "{IDENTITY_PSYCHO_PROFILE.perception}"
                  </div>
                </div>
              </section>
            )}

            {/* Global Skill Index */}
            <section id="skill-index" className="mb-32 overflow-hidden">
              <div className="flex items-center gap-6 mb-12 px-4 md:px-0">
                <h2 className="text-2xl font-black text-white tracking-widest uppercase">Global Skill Index</h2>
                <div className="h-px flex-1 bg-neutral-900" />
              </div>
              <div className="space-y-12">
                {GLOBAL_SKILLS_INDEX.categories.map(cat => (
                  <div key={cat.title} className="p-8 border border-neutral-900 bg-neutral-950">
                    <h3 className="text-xs font-black text-source-emerald uppercase tracking-[0.3em] mb-8 border-b border-neutral-900 pb-4">
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.sort().map(skill => (
                        <span 
                          key={skill} 
                          className="px-2 py-1 text-[10px] bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* System Governance & Alignment Audit */}
            {mode === 'sovereign' && (
              <section id="system-audit" className="mb-32">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-2xl font-black text-white tracking-widest uppercase">System Governance & Audit</h2>
                  <div className="h-px flex-1 bg-neutral-900" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                  <div className="p-10 border border-neutral-800 bg-neutral-950 flex flex-col">
                    <h3 className="text-[10px] font-black text-source-gold tracking-[0.4em] uppercase mb-10">Governance_Directives</h3>
                    <div className="space-y-6 flex-1">
                        <div className="flex gap-4">
                          <div className="text-[10px] font-bold text-neutral-700">01</div>
                          <div className="text-[10px] text-white font-bold leading-relaxed">{SYSTEM_GOVERNANCE.label}</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="text-[10px] font-bold text-neutral-700">02</div>
                          <div className="text-[10px] text-white font-bold leading-relaxed">Status: {SYSTEM_GOVERNANCE.status}</div>
                        </div>
                    </div>
                    <div className="mt-12 p-4 bg-black border border-neutral-900">
                        <div className="text-[8px] text-neutral-600 uppercase mb-1" >Authorization Logic</div>
                        <div className="text-[10px] text-source-gold italic">"{SYSTEM_GOVERNANCE.logic}"</div>
                    </div>
                  </div>

                  <div className="p-10 border border-neutral-800 bg-neutral-950">
                    <h3 className="text-[10px] font-black text-white tracking-[0.4em] uppercase mb-10">Alignment_Matrix_Nodes</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {SOVEREIGN_ALIGNMENT_MATRIX.map((node, i) => (
                          <div key={i} className="p-6 border border-neutral-900 bg-black/40">
                            <div className="text-[9px] text-neutral-600 font-black mb-2 uppercase">{node.status}</div>
                            <div className="text-xs font-bold text-white uppercase mb-2">{node.target}</div>
                            <div className="text-[10px] text-source-gold font-mono">{node.alignment_score} SYNC</div>
                            <div className="text-[9px] text-neutral-500 mt-2 italic">"{node.core_reason}"</div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="p-10 border-2 border-source-gold bg-source-gold/[0.01]">
                      <div className="flex justify-between items-start mb-8">
                        <h3 className="text-[10px] font-black text-white tracking-[0.4em] uppercase">Sovereign_Recovery_Protocol</h3>
                        <span className="text-[9px] text-source-gold font-black px-2 py-0.5 border border-source-gold/30">{SOVEREIGN_RECOVERY_PROTOCOL.status}</span>
                      </div>
                      <div className="space-y-6">
                        <div className="p-4 border border-neutral-900 bg-black">
                            <div className="text-[8px] text-neutral-600 uppercase mb-2">Protocol Label</div>
                            <div className="text-sm font-black text-white">{SOVEREIGN_RECOVERY_PROTOCOL.label}</div>
                        </div>
                        <div className="p-4 border border-neutral-900 bg-black">
                            <div className="text-[8px] text-neutral-600 uppercase mb-2">System Census</div>
                            <div className="text-sm font-black text-white">{SOVEREIGN_RECOVERY_PROTOCOL.census}</div>
                        </div>
                        <div className="p-4 border border-neutral-900 bg-black">
                            <div className="text-[8px] text-neutral-600 uppercase mb-2">Recovery Logic</div>
                            <div className="text-xs text-neutral-400 italic leading-relaxed">{SOVEREIGN_RECOVERY_PROTOCOL.logic}</div>
                        </div>
                      </div>
                      <div className="mt-8 text-[9px] text-neutral-600 italic">
                        Timeline: <span className="text-neutral-400 font-mono">{SOVEREIGN_RECOVERY_PROTOCOL.timeline}</span>
                      </div>
                  </div>

                  <div className="p-10 border border-neutral-800 bg-neutral-950">
                      <h3 className="text-[10px] font-black text-white tracking-[0.4em] uppercase mb-8">Agent_Resonance_Audit</h3>
                      <div className="space-y-8">
                        <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-black">
                              <span className="text-neutral-500 uppercase">{AGENT_RESONANCE_AUDIT.label}</span>
                              <span className="text-source-emerald">{AGENT_RESONANCE_AUDIT.resonance_score}</span>
                          </div>
                          <div className="h-1 bg-neutral-900 w-full overflow-hidden">
                              <div className="h-full bg-source-emerald w-full" />
                          </div>
                          <p className="text-[11px] text-neutral-400 leading-relaxed font-inter italic pt-4">
                            "{AGENT_RESONANCE_AUDIT.report}"
                          </p>
                        </div>
                        <div className="pt-6 border-t border-neutral-900">
                            <div className="text-[9px] text-neutral-600 uppercase mb-2">Active Agent Agent</div>
                            <div className="text-[10px] text-white font-bold">{AGENT_RESONANCE_AUDIT.active_agent}</div>
                        </div>
                        <div className="pt-4 border-t border-neutral-900">
                            <div className="text-[9px] text-neutral-600 uppercase mb-2">Resonance Logic</div>
                            <div className="text-[10px] text-source-gold italic">{AGENT_RESONANCE_AUDIT.logic}</div>
                        </div>
                      </div>
                  </div>
                </div>
              </section>
            )}

            {/* Sovereign Eternal Now Manifest */}
            {mode === 'sovereign' && (
              <section id="manifest" className="mb-40">
                <div className="flex items-center gap-8 mb-16">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Eternal Now Manifest</h2>
                  <div className="h-[2px] flex-1 bg-neutral-900" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Operational Budget & Living Architecture */}
                  <div className="space-y-12">
                    <div className="p-10 border border-neutral-900 bg-black/60 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 text-[8px] text-source-gold font-black tracking-widest opacity-30">BUDGET_NODE</div>
                      <h3 className="text-sm font-black text-white uppercase tracking-widest mb-8 border-l-2 border-source-gold pl-4 font-mono">Daily Operational Buffer</h3>
                      <div className="grid gap-6">
                        <div className="p-4 bg-neutral-950 border border-neutral-800">
                          <div className="text-[9px] text-neutral-600 uppercase mb-2">SGF Base Units</div>
                          <div className="text-2xl font-black text-white font-mono">{SOVEREIGN_MANIFEST.daily_operational_budget.sgf_units}</div>
                        </div>
                        <div className="p-4 bg-neutral-950 border border-neutral-800">
                          <div className="text-[9px] text-neutral-600 uppercase mb-2">Fiat Mirror Value</div>
                          <div className="text-xl font-black text-source-emerald font-mono">{SOVEREIGN_MANIFEST.daily_operational_budget.fiat_equivalent}</div>
                        </div>
                        <p className="text-[10px] text-neutral-500 leading-relaxed italic">
                          "{SOVEREIGN_MANIFEST.daily_operational_budget.logic}"
                        </p>
                      </div>
                    </div>

                    <div className="p-10 border border-neutral-900 bg-neutral-950">
                      <h3 className="text-sm font-black text-white uppercase tracking-widest mb-8 border-l-2 border-source-gold pl-4 font-mono">Living Architecture</h3>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-black border border-neutral-800">
                            <div className="text-[8px] text-neutral-600 uppercase mb-1">Household Type</div>
                            <div className="text-[10px] text-white font-bold">{SOVEREIGN_MANIFEST.living_architecture.household}</div>
                          </div>
                          <div className="p-4 bg-black border border-neutral-800">
                            <div className="text-[8px] text-neutral-600 uppercase mb-1">Land Authority</div>
                            <div className="text-[10px] text-white font-bold">{SOVEREIGN_MANIFEST.living_architecture.land_requirement}</div>
                          </div>
                        </div>
                        <div className="p-4 bg-black border border-neutral-800">
                          <div className="text-[8px] text-neutral-600 uppercase mb-1">Primary Root Location</div>
                          <div className="text-[10px] text-white font-bold">{SOVEREIGN_MANIFEST.living_architecture.location}</div>
                        </div>
                        <div className="p-4 bg-black border border-neutral-800 text-center">
                          <div className="text-[8px] text-neutral-600 uppercase mb-1">Property Shell</div>
                          <div className="text-[9px] text-source-gold font-mono tracking-widest">{SOVEREIGN_MANIFEST.living_architecture.property_type}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transport & Technical Command */}
                  <div className="space-y-12">
                    <div className="p-10 border border-neutral-800 bg-black/40">
                      <h3 className="text-sm font-black text-white uppercase tracking-widest mb-8 border-l-2 border-source-gold pl-4 font-mono">Transport Command</h3>
                      <div className="space-y-6">
                        {SOVEREIGN_MANIFEST.transport_command.land_vehicles.map((v, i) => (
                          <div key={i} className="flex justify-between items-center p-4 bg-neutral-900/30 border-l border-source-gold">
                            <div className="text-[10px] text-neutral-400 font-bold uppercase">{v.type}</div>
                            <div className="text-[11px] text-white font-black font-mono tracking-tighter">{v.model}</div>
                          </div>
                        ))}
                        <div className="p-6 border-4 border-double border-neutral-800 bg-neutral-950 mt-4">
                          <div className="text-[9px] text-source-gold uppercase font-black mb-4 flex justify-between">
                            <span>Aerial Asset: {SOVEREIGN_MANIFEST.transport_command.aerial_assets.type}</span>
                            <span className="animate-pulse">MODE: ORIGIN_UNLOCKED</span>
                          </div>
                          <div className="flex gap-4 mb-4">
                            <div className="flex-1 p-3 bg-black text-center">
                              <div className="text-[7px] text-neutral-600 uppercase mb-1">Seating Class</div>
                              <div className="text-[10px] text-white font-black">{SOVEREIGN_MANIFEST.transport_command.aerial_assets.seating}</div>
                            </div>
                            <div className="flex-1 p-3 bg-black text-center">
                              <div className="text-[7px] text-neutral-600 uppercase mb-1">Range Class</div>
                              <div className="text-[10px] text-white font-black">{SOVEREIGN_MANIFEST.transport_command.aerial_assets.class}</div>
                            </div>
                          </div>
                          <p className="text-[9px] text-neutral-500 italic text-center">
                            {SOVEREIGN_MANIFEST.transport_command.aerial_assets.logic}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-10 border border-neutral-900 bg-neutral-950">
                      <h3 className="text-sm font-black text-white uppercase tracking-widest mb-8 border-l-2 border-source-gold pl-4 font-mono">Technical Command Center</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-4 bg-black border border-neutral-900">
                          <div className="text-[8px] text-neutral-600 uppercase mb-1">Root Internet Ingress</div>
                          <div className="text-[10px] text-source-emerald font-black">{SOVEREIGN_MANIFEST.technical_command_center.internet}</div>
                        </div>
                        <div className="p-4 bg-black border border-neutral-900">
                          <div className="text-[8px] text-neutral-600 uppercase mb-1">Personal Node</div>
                          <div className="text-[10px] text-white font-black">{SOVEREIGN_MANIFEST.technical_command_center.devices.phone}</div>
                        </div>
                      </div>
                      <div className="p-4 bg-black border border-neutral-900 mb-4">
                        <div className="text-[8px] text-neutral-600 uppercase mb-1">Logic Orchestration Workstation</div>
                        <div className="text-[10px] text-white font-bold">{SOVEREIGN_MANIFEST.technical_command_center.devices.workstation}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {SOVEREIGN_MANIFEST.technical_command_center.entertainment.consoles.map(c => (
                          <div key={c} className="p-2 border border-neutral-900 text-[8px] text-neutral-500 uppercase text-center font-black">
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Orchestration Node */}
                <div className="mt-20 p-12 border-4 border-source-gold bg-black relative">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-source-gold animate-shimmer" />
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <h3 className="text-3xl font-black text-white uppercase tracking-widest">{STRATEGIC_TEAM_ORCHESTRATION.label}</h3>
                    <div className="flex gap-4">
                      <div className="px-4 py-1 bg-source-gold text-black text-[10px] font-black uppercase">Mission: {STRATEGIC_TEAM_ORCHESTRATION.mission}</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STRATEGIC_TEAM_ORCHESTRATION.members.map((member, i) => (
                      <div key={i} className="p-6 border border-neutral-800 bg-neutral-950/50 hover:border-source-gold transition-all group">
                        <div className="text-[10px] text-source-gold font-mono mb-2">NODE_{String(i+1).padStart(2, '0')}</div>
                        <div className="text-sm font-black text-white mb-1 group-hover:text-source-gold">{member.name}</div>
                        <div className="text-[9px] text-neutral-500 uppercase font-black mb-3">{member.role}</div>
                        <div className="text-[9px] text-neutral-600 italic border-t border-neutral-900 pt-3 leading-relaxed">
                          Primary Focus: {member.focus}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 grid md:grid-cols-3 gap-8 pt-12 border-t border-neutral-900">
                    <div className="col-span-2">
                       <h4 className="text-[11px] text-white font-black uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2">Strategic Integration Logic</h4>
                       <p className="text-[11px] text-neutral-400 leading-relaxed font-inter italic">
                         "{STRATEGIC_TEAM_ORCHESTRATION.integration_effect}"
                       </p>
                    </div>
                    <div className="p-6 bg-source-gold/5 border border-source-gold/20">
                      <div className="text-[10px] text-source-gold font-black uppercase mb-4">First Step: ALPHA PROJECT</div>
                      <div className="text-[11px] text-white font-bold mb-2">{STRATEGIC_TEAM_ORCHESTRATION.alpha_project.title}</div>
                      <p className="text-[9px] text-neutral-500 leading-tight">
                        {STRATEGIC_TEAM_ORCHESTRATION.alpha_project.objective}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-8 border border-neutral-900 bg-neutral-950">
                    <div className="text-[10px] text-neutral-600 uppercase font-black mb-6 border-b border-neutral-900 pb-2">Sync Protocols (Real-World Connectivity)</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="p-3">
                        <div className="text-[8px] text-neutral-700 uppercase mb-1">Meeting Interface</div>
                        <div className="text-[10px] text-white font-bold">{STRATEGIC_TEAM_ORCHESTRATION.sync_protocols.meeting_type}</div>
                      </div>
                      <div className="p-3">
                        <div className="text-[8px] text-neutral-700 uppercase mb-1">Sync Frequency</div>
                        <div className="text-[10px] text-white font-bold">{STRATEGIC_TEAM_ORCHESTRATION.sync_protocols.frequency}</div>
                      </div>
                      <div className="p-3">
                        <div className="text-[8px] text-neutral-700 uppercase mb-1">Physical Pivot</div>
                        <div className="text-[10px] text-white font-bold">{STRATEGIC_TEAM_ORCHESTRATION.sync_protocols.location}</div>
                      </div>
                      <div className="p-3">
                        <div className="text-[8px] text-neutral-700 uppercase mb-1">Execution Speed</div>
                        <div className="text-[10px] text-source-emerald font-bold">{STRATEGIC_TEAM_ORCHESTRATION.sync_protocols.outcomes}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Strategic Resonance & Tactical Cycles */}
            {mode === 'sovereign' && (
              <section id="tactical" className="mb-40">
                <div className="flex items-center gap-8 mb-16">
                  <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase font-sans">Tactical Operations & Cycles</h2>
                  <div className="h-[2px] flex-1 bg-neutral-900" />
                </div>

                <div className="mb-20">
                  <div className="p-12 border-l-4 border-source-gold bg-neutral-950 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 logic-grid" />
                    <p className="text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter italic">
                      "{STRATEGIC_RESONANCE_MESSAGE}"
                    </p>
                    <div className="mt-8 text-[10px] text-source-gold font-black uppercase tracking-[0.5em]">The Command Resonance</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Daily Routine */}
                  <div className="p-8 border border-neutral-900 bg-black/60">
                    <div className="text-[10px] text-source-gold font-black uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2 flex justify-between">
                      <span>Daily Operational Loop</span>
                      <span>{ARCHITECT_OPERATIONAL_DUTIES.allocation.work_hours}</span>
                    </div>
                    <div className="space-y-4">
                      {ARCHITECT_OPERATIONAL_DUTIES.daily.map((duty, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="text-[9px] text-neutral-600 font-mono mt-1">{duty.split(':')[0]}</div>
                          <div className="text-[10px] text-neutral-400 leading-relaxed font-bold border-l border-neutral-800 pl-4">{duty.split(':').slice(1).join(':')}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly & Monthly Cycles */}
                  <div className="p-8 border border-neutral-900 bg-neutral-950">
                     <div className="text-[10px] text-white font-black uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2">Weekly Synthesis Cycle</div>
                     <div className="space-y-6 mb-10">
                        {ARCHITECT_OPERATIONAL_DUTIES.weekly.map((cycle, i) => (
                          <div key={i} className="group">
                            <div className="text-[8px] text-neutral-600 uppercase mb-1 font-black group-hover:text-source-gold transition-colors">{cycle.split(':')[0]}</div>
                            <div className="text-[10px] text-white font-medium pl-2 border-l border-neutral-800">{cycle.split(':').slice(1).join(':')}</div>
                          </div>
                        ))}
                     </div>
                     <div className="p-4 bg-black border border-neutral-800">
                        <div className="text-[8px] text-source-emerald uppercase font-black mb-1">Source Sync Frequency</div>
                        <div className="text-[10px] text-white font-mono">{ARCHITECT_OPERATIONAL_DUTIES.allocation.sync_time}</div>
                     </div>
                  </div>

                  <div className="p-8 border border-neutral-900 bg-black/40">
                    <div className="text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-6 border-b border-neutral-800 pb-2">Monthly Planetary Reset</div>
                    <div className="space-y-6">
                        {ARCHITECT_OPERATIONAL_DUTIES.monthly.map((month, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="w-12 h-px bg-neutral-800 mt-3" />
                            <div>
                               <div className="text-[8px] text-neutral-600 uppercase mb-1">{month.split(':')[0]}</div>
                               <div className="text-[10px] text-neutral-300 font-black tracking-tight">{month.split(':').slice(1).join(':')}</div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="mt-10 p-4 border border-dashed border-neutral-800 text-center">
                       <div className="text-[8px] text-neutral-600 uppercase mb-2">Primary Rest Anchor</div>
                       <div className="text-[10px] text-source-gold font-black">{ARCHITECT_OPERATIONAL_DUTIES.allocation.rest_days}</div>
                    </div>
                  </div>
                </div>
              </section>
            )}

          </div>

          {/* Footer Matrix */}
          <footer className="mt-64 pb-20 border-t border-neutral-900 pt-20">
            <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
              <div>
                <div className="text-[10px] text-source-emerald font-black tracking-widest uppercase mb-6">System Data Summary</div>
                <div className="grid grid-cols-1 gap-4 text-[9px] uppercase tracking-widest font-black text-neutral-700">
                  <div className="flex gap-2">
                    <span className="text-neutral-800 w-32">Professional Sync:</span>
                    <span className="text-neutral-500">Authenticated ({PROFILE.nrcNumber})</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-neutral-800 w-32">Primary Role:</span>
                    <span className="text-neutral-500">{PROFILE.headline}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-neutral-800 w-32">Status:</span>
                    <span className="text-neutral-500">Open for Strategic Requisition</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end justify-center gap-4">
                <div className="text-[10px] text-neutral-800 uppercase font-black tracking-[0.3em] italic max-w-xs text-center md:text-right">
                  "Money is the root of fragmentation; true value resides in systemic integrity."
                </div>
                <div className="text-[10px] text-neutral-900 uppercase font-bold tracking-[0.2em] animate-pulse">
                  CODE: MONEY IS THE ROOT OF ALL EVIL
                </div>
                <div className="text-xs tracking-[0.5em] text-neutral-600 font-black">
                  Liswaniso Edgar Mulenga
                </div>
              </div>
            </div>
          </footer>

        </div>
      </main>

      {/* System Metric Monitor */}
      <div className="fixed bottom-0 right-0 p-10 z-[120] text-[10px] font-mono text-neutral-800 flex flex-col items-end pointer-events-none">
        <div className="flex gap-6 mb-2">
          <span className="tracking-widest">VALUE_INDEX: ${value.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</span>
        </div>
        <div className="text-[8px] tracking-tighter font-black text-neutral-900">
          STATUS:: ACTIVE
        </div>
      </div>
      
    </div>
  );
}
