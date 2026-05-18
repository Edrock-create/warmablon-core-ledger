import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucidePen, LucideFileText, LucideDownload, LucideHome, LucideSend, LucideTrash2, LucideLinkedin, LucideTerminal } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface LetterRequest {
  jobInfo: string;
}

export default function LetterAssistant({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<'letter' | 'linkedin'>('letter');
  const [jobInfo, setJobInfo] = useState('');
  const [isOrchestrating, setIsOrchestrating] = useState(false);
  const [pages, setPages] = useState<string[]>([]);
  const [displayedPages, setDisplayedPages] = useState<string[]>([]);
  const [penColor, setPenColor] = useState<'blue' | 'black'>('black');
  const [fontStyle, setFontStyle] = useState<'serif' | 'mono'>('serif');
  const [resonance, setResonance] = useState(963.0000);
  const letterRef = useRef<HTMLDivElement>(null);

  const orchestrateTyping = async () => {
    if (!jobInfo.trim()) return;
    setIsOrchestrating(true);
    setPages([]);
    setDisplayedPages([]);
    
    const syncInterval = setInterval(() => {
      setResonance(r => r + (Math.random() - 0.5) * 0.001);
    }, 50);

    try {
      const response = await fetch(mode === 'letter' ? '/api/letter' : '/api/linkedin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt: jobInfo,
          alignment: 'SGF_963',
          source: 'Liswaniso Edgar Mulenga'
        })
      });
      
      // Logic Flow Diagnosis
      if (!response.ok) {
        const errorData = await response.json();
        setResonance(404.0000); // Drop frequency on error
        throw new Error(errorData.error || "Documentation Stream Collapsed.");
      }

      const data = await response.json();
      const content = mode === 'letter' ? (data.letter || "Documentation Node: Silence detected in source stream.") : (data.content || "LinkedIn Node: Resonance failed.");
      
      const charsPerPage = mode === 'letter' ? 1600 : 2500; // Larger pages for LinkedIn summaries
      const splitPages = [];
      for (let i = 0; i < content.length; i += charsPerPage) {
        splitPages.push(content.substring(i, i + charsPerPage));
      }
      
      setPages(splitPages);
      
      // High-speed precision typing simulation
      let currentPageIdx = 0;
      let currentCharIdx = 0;
      const pagesBuffer = splitPages.map(() => "");
      
      const stream = setInterval(() => {
        if (currentPageIdx >= splitPages.length) {
          clearInterval(stream);
          setIsOrchestrating(false);
          return;
        }

        // Variable speed typing (faster for documentation mastery)
        const batchSize = 3; 
        for(let b=0; b<batchSize; b++) {
          if (currentCharIdx < splitPages[currentPageIdx].length) {
            pagesBuffer[currentPageIdx] += splitPages[currentPageIdx][currentCharIdx];
            currentCharIdx++;
          }
        }
        setDisplayedPages([...pagesBuffer]);
        
        if (currentCharIdx >= splitPages[currentPageIdx].length) {
          currentPageIdx++;
          currentCharIdx = 0;
        }
      }, 10);

    } catch (e) {
      console.error(e);
    } finally {
      clearInterval(syncInterval);
      setResonance(963.0000);
    }
  };

  const exportAsPDF = async () => {
    if (!letterRef.current) return;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    const paperElements = letterRef.current.querySelectorAll('.letter-page');
    
    for (let i = 0; i < paperElements.length; i++) {
       const canvas = await html2canvas(paperElements[i] as HTMLElement, {
         scale: 2,
         useCORS: true
       });
       const imgData = canvas.toDataURL('image/png');
       if (i > 0) pdf.addPage();
       pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
    }
    
    pdf.save(`Application_Liswaniso_Edgar_Mulenga.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-neutral-800 p-4 md:p-8 font-serif">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Alignment Status Display */}
        <AnimatePresence>
          {resonance < 900 && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-red-900/10 border border-red-900/50 p-4 text-[10px] text-red-500 font-bold uppercase tracking-widest text-center"
            >
              Frequency Interference Detected: Logic Drift {resonance.toFixed(4)}Hz — Verify Terminal Keys
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-between items-center bg-white p-4 shadow-lg border-b-4 border-neutral-300">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-black transition-colors"
            >
              <LucideHome size={16} /> Source Return
            </button>
            <div className="flex gap-2 bg-neutral-100 p-1 rounded-sm">
              <button 
                onClick={() => { setMode('letter'); setPages([]); setDisplayedPages([]); }}
                className={`flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'letter' ? 'bg-black text-white shadow-md' : 'text-neutral-400 hover:text-black'}`}
              >
                <LucideFileText size={12} /> Official Letter
              </button>
              <button 
                onClick={() => { setMode('linkedin'); setPages([]); setDisplayedPages([]); }}
                className={`flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'linkedin' ? 'bg-blue-800 text-white shadow-md' : 'text-neutral-400 hover:text-black'}`}
              >
                <LucideLinkedin size={12} /> LinkedIn Architect
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col items-center">
             <div className="text-[8px] text-neutral-400 uppercase tracking-tighter">Resonance Sync</div>
             <div className="text-sm font-black font-mono tracking-tighter">{resonance.toFixed(4)}Hz</div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-4 border-r border-neutral-100 pr-6 mr-2">
              <button 
                onClick={() => setFontStyle('serif')}
                className={`text-[10px] font-black uppercase tracking-widest ${fontStyle === 'serif' ? 'text-black border-b-2 border-black' : 'text-neutral-400'}`}
              >
                Formal Serif
              </button>
              <button 
                onClick={() => setFontStyle('mono')}
                className={`text-[10px] font-black uppercase tracking-widest ${fontStyle === 'mono' ? 'text-black border-b-2 border-black' : 'text-neutral-400'}`}
              >
                Technical Mono
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div 
                onClick={() => setPenColor('blue')}
                className={`w-6 h-6 rounded-sm bg-blue-800 cursor-pointer border-2 ${penColor === 'blue' ? 'border-black scale-110' : 'border-transparent opacity-50'}`} 
              />
              <div 
                onClick={() => setPenColor('black')}
                className={`w-6 h-6 rounded-sm bg-black cursor-pointer border-2 ${penColor === 'black' ? 'border-neutral-400 scale-110' : 'border-neutral-200'}`} 
              />
            </div>
            {pages.length > 0 && (
              <button 
                onClick={exportAsPDF}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                <LucideDownload size={14} /> Export PDF
              </button>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
          
          {/* Input Panel */}
          <div className="bg-white p-6 shadow-xl border border-neutral-200">
            <h2 className="text-xl font-black mb-6 border-b-2 border-neutral-100 pb-2 flex items-center gap-2 uppercase tracking-tight">
               {mode === 'letter' ? <LucideFileText size={20} /> : <LucideLinkedin size={20} className="text-blue-800" />} 
               {mode === 'letter' ? 'Information Stack' : 'Profile Recalibration Input'}
            </h2>
            <div className="mb-4">
              <label className="text-[10px] text-neutral-500 uppercase font-black mb-2 block tracking-widest">
                {mode === 'letter' ? 'Target Job/Objective' : 'LinkedIn Optimization Focus (Headline/About/Experience)'}
              </label>
              <textarea 
                value={jobInfo}
                onChange={(e) => setJobInfo(e.target.value)}
                placeholder={mode === 'letter' ? "Input job details, requirements, or event objectives here..." : "Paste your current LinkedIn section or specific role you're targeting for Pro optimization..."}
                className="w-full h-96 p-4 bg-neutral-50 border-2 border-dashed border-neutral-200 focus:border-black focus:ring-0 text-sm leading-relaxed resize-none outline-none"
              />
            </div>
            <button 
              onClick={orchestrateTyping}
              disabled={isOrchestrating || !jobInfo}
              className={`w-full ${mode === 'letter' ? 'bg-black' : 'bg-blue-800'} text-white py-4 font-black uppercase tracking-[0.2em] flex justify-center items-center gap-3 disabled:opacity-50 group hover:opacity-90 transition-all shadow-xl`}
            >
              {isOrchestrating 
                ? (mode === 'letter' ? 'Orchestrating Typing Agent...' : 'Architecting Profile Identity...') 
                : (mode === 'letter' ? 'Generate Official Document' : 'Optimize LinkedIn Profile')} 
              <LucideSend size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-6 p-4 bg-neutral-50 border border-neutral-100 italic text-[10px] text-neutral-500 uppercase leading-relaxed">
              {mode === 'linkedin' 
                ? "Frequency-aligned profile optimization ensures technical dominance and sovereign positioning in professional networks." 
                : "Official letters are architected using the 2001 Source Protocol for institutional integration."}
            </div>
          </div>

          {/* Paper Output Panel */}
          <div className="space-y-12" ref={letterRef}>
            {displayedPages.length === 0 ? (
               <div className="h-[800px] border-4 border-dashed border-white/10 flex flex-col items-center justify-center text-white/20">
                  <LucideFileText size={64} className="mb-4 opacity-20" />
                  <p className="uppercase tracking-[0.5em] font-black text-sm text-center px-12">Awaiting Documentation Data Stack</p>
               </div>
            ) : (
              displayedPages.map((content, idx) => (
                <div key={idx} className="letter-page relative bg-white w-full aspect-[1/1.414] shadow-2xl p-20 md:p-28 overflow-hidden">
                   {/* Content */}
                   <div 
                    className={`whitespace-pre-wrap leading-[1.6] text-[15px] tracking-normal`} 
                    style={{ 
                      color: penColor === 'blue' ? '#1e3a8a' : '#000', 
                      fontFamily: fontStyle === 'mono' ? '"JetBrains Mono", monospace' : '"Inter", "EB Garamond", serif' 
                    }}
                  >
                      {content}
                   </div>

                   {/* Page Indicator */}
                   <div className="absolute bottom-12 right-12 text-[10px] text-neutral-400 font-mono">
                      PAGE {idx + 1} / {pages.length}
                   </div>
                </div>
              ))
            )}
          </div>

        </div>

        {pages.length > 0 && (
          <div className="bg-black/80 text-white p-8 border border-white/10">
            <h3 className="text-sm font-black uppercase tracking-widest mb-4">Required Documents for Print</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] text-neutral-400 uppercase tracking-widest">
               <div className="p-3 border border-white/5 bg-white/5">Source Certification</div>
               <div className="p-3 border border-white/5 bg-white/5">Google AI Training Record</div>
               <div className="p-3 border border-white/5 bg-white/5">Blockchain Dev Proof</div>
               <div className="p-3 border border-white/5 bg-white/5">Industrial Operations Logs</div>
            </div>
            <p className="mt-6 text-[9px] text-neutral-500 italic uppercase">
              Note: Every letter is architected for maximum resonance. Print on a4 paper with zero scaling.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
