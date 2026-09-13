import React, { useState } from 'react';
import { Layers, ArrowUp, Copy, Check, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const oneLiner = "Spearheaded an end-to-end UX teardown and feature strategy for Myntra, auditing 4 core surfaces against Nielsen heuristics, benchmarking against Ajio & Nykaa Fashion, and designing a RICE-prioritized PRD for FitTwin AI sizing to recover 18% in return logistics waste.";

  const handleCopyOneLiner = () => {
    navigator.clipboard.writeText(oneLiner);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-14 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Resume Snippet (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                Fashion PM Teardown & Strategy
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              A self-directed Product Management case study evaluating Myntra alongside Ajio and Nykaa Fashion. Built as a portfolio artifact demonstrating diagnostic UX rigor, competitive strategy, quantitative RICE prioritization, and PRD execution.
            </p>

            {/* Ready-to-use Resume One-Liner */}
            <div className="bg-slate-850 p-4 rounded-xl border border-slate-800 max-w-xl">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400 font-semibold">
                  Resume & LinkedIn Portfolio Bullet:
                </span>
                <button
                  onClick={handleCopyOneLiner}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 px-2 py-1 rounded transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Bullet</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-300 font-mono leading-relaxed select-all">
                "{oneLiner}"
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Case Study Sections
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#overview" className="hover:text-white transition-colors">1. Overview & Problem Framing</a></li>
              <li><a href="#ux-audit" className="hover:text-white transition-colors">2. Heuristic UX Audit (4 Surfaces)</a></li>
              <li><a href="#benchmark" className="hover:text-white transition-colors">3. Competitive Benchmarking</a></li>
              <li><a href="#prioritization" className="hover:text-white transition-colors">4. Feature RICE Prioritization</a></li>
              <li><a href="#personas" className="hover:text-white transition-colors">5. Target User Personas</a></li>
              <li><a href="#prd-brief" className="hover:text-white transition-colors">6. PRD Brief: FitTwin (#1)</a></li>
              <li><a href="#reflection" className="hover:text-white transition-colors">7. PM Synthesis & Reflection</a></li>
            </ul>
          </div>

          {/* Col 3: Back to top (2 cols) */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="inline-block px-2.5 py-1 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                Production Ready
              </span>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors mt-6 md:mt-0"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright / disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Built with React, Tailwind CSS & Lucide Icons. Designed for Product Management Portfolio Review.
          </div>
          <div>
            Independent academic & portfolio exercise. Not affiliated with Flipkart, Reliance, or FSN E-Commerce.
          </div>
        </div>

      </div>
    </footer>
  );
}
