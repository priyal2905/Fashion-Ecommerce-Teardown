import React from 'react';
import { Lightbulb, Compass, Scale, ShieldCheck, ArrowRight } from 'lucide-react';
import { CASE_STUDY } from '../data/caseStudyData';

export default function Reflection() {
  const { reflection } = CASE_STUDY;

  const takeawayCards = [
    {
      title: "Unit Economics > Surface Growth",
      desc: "Top-of-funnel GMV and flashy carousels mean nothing if 30%+ of orders return backwards through expensive reverse logistics.",
      icon: <Scale className="w-5 h-5 text-brand-600" />
    },
    {
      title: "Root Cause Over Cosmetic Fixes",
      desc: "Sizing is not a UI tab issue—it is an information asymmetry problem that requires normalizing merchant cut physics against buyer silhouette telemetry.",
      icon: <Compass className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Ruthless PM Prioritization",
      desc: "Frameworks like RICE force discipline: saying no to 3D camera gimmicks in favor of a 2-step silhouette input that directly attacks return rates.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section id="reflection" className="py-16 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
              Phase 06: Synthesis
            </span>
            <span className="text-xs text-slate-500">Executive PM Reflection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {reflection.headline}
          </h2>
        </div>

        {/* Core Reflection Statement Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle mb-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600 hidden sm:flex">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              {reflection.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Strategic Takeaway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {takeawayCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-3">
                {card.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
