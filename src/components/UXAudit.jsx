import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, BookOpen, Layers, Filter, Eye } from 'lucide-react';
import { CASE_STUDY } from '../data/caseStudyData';

export default function UXAudit() {
  const { uxAudit } = CASE_STUDY;
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Homepage Discovery', 'Search & Filter Engine', 'Product Page & Personalization', 'Checkout & Bag Funnel'];

  const filteredItems = selectedFilter === 'All' 
    ? uxAudit 
    : uxAudit.filter(item => item.surface === selectedFilter);

  return (
    <section id="ux-audit" className="py-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
                Phase 01: Diagnostic
              </span>
              <span className="text-xs text-slate-500">Heuristic Evaluation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              UX Audit & Usability Heuristics Breakdown
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              Systematic teardown across four funnel stages mapped strictly to Jakob Nielsen’s 10 Usability Heuristics, structured as: <span className="font-semibold text-slate-800">[Friction Point] → [Why It’s a Problem] → [Heuristic Violated]</span>.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl border border-slate-200 text-xs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter === 'All' ? 'All (4 Surfaces)' : filter.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Audit Cards Grid */}
        <div className="space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-subtle p-6 sm:p-8 transition-all relative overflow-hidden"
            >
              {/* Top metadata bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
                    Audit #{idx + 1}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                    {item.surface}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                    item.severity === 'Critical' 
                      ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    <AlertCircle className="w-3 h-3" />
                    Severity: {item.severity}
                  </span>
                </div>
              </div>

              {/* Core 3-Step Chain: Friction -> Why it's a problem -> Heuristic Violated */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Column 1: Friction Point & Problem (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Step 1: Friction Point */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      1. Friction Point
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {item.frictionPoint}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {item.problemDescription}
                    </p>
                  </div>

                  {/* Step 2: Why It's a Problem */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      2. Why It's a Problem (User & Business Impact)
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {item.userImpact}
                    </p>
                  </div>

                  {/* Real-world Evidence */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/60 text-xs text-slate-600">
                    <strong className="text-slate-800 font-semibold">Empirical Observation: </strong>
                    {item.evidence}
                  </div>
                </div>

                {/* Column 2: Heuristic Violated Callout (5 cols) */}
                <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-brand-400 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      3. Usability Heuristic Violated
                    </div>
                    <div className="text-base font-bold text-white mb-3">
                      {item.heuristicViolated}
                    </div>
                    <blockquote className="text-xs text-slate-300 italic border-l-2 border-brand-500 pl-3 leading-relaxed mb-4">
                      "{item.heuristicQuote}"
                    </blockquote>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Nielsen Norman Group Principle</span>
                    <span className="text-brand-300 font-medium">Core UX Anti-Pattern</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Audit Synthesis Banner */}
        <div className="mt-8 bg-brand-50/60 border border-brand-200/80 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-600 shrink-0"></span>
            <span className="text-slate-800">
              <strong>Key Teardown Takeaway:</strong> 3 out of 4 friction points originate from conflicting monetization goals (monetizing search ad real estate vs. search accuracy; aggressive promotional carousels vs. discovery clarity).
            </span>
          </div>
          <a
            href="#benchmark"
            className="inline-flex items-center gap-1 font-bold text-brand-700 hover:text-brand-800 shrink-0"
          >
            See Competitive Benchmark <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
