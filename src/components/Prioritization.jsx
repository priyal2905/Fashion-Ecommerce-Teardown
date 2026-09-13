import React, { useState } from 'react';
import { Calculator, ArrowUpDown, ChevronDown, ChevronUp, Check, Info, ShieldCheck, Flame, Trophy } from 'lucide-react';
import { CASE_STUDY } from '../data/caseStudyData';

export default function Prioritization() {
  const { prioritization } = CASE_STUDY;
  const [expandedFeature, setExpandedFeature] = useState(prioritization.features[0].id);

  // Features are already ordered by RICE score
  const sortedFeatures = [...prioritization.features].sort((a, b) => b.riceScore - a.riceScore);

  return (
    <section id="prioritization" className="py-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
              Phase 03: Strategy & Tradeoffs
            </span>
            <span className="text-xs text-slate-500">RICE Prioritization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Feature Recommendations & RICE Prioritization
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Translating heuristic audit findings into three high-impact, defensible product initiatives, ranked using the RICE framework: <span className="font-mono text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">(Reach × Impact × Confidence) ÷ Effort</span>.
          </p>
        </div>

        {/* Formula Explainer Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-10 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Calculator className="w-4 h-4 text-brand-600" />
              RICE Scoring Methodology
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {prioritization.explanation}
            </p>
          </div>
          <div className="bg-slate-900 text-white rounded-xl p-4 shrink-0 text-center font-mono text-sm border border-slate-800">
            <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Standard Formula</div>
            <div className="font-bold tracking-wide">
              Score = <span className="text-brand-400">(R × I × C)</span> ÷ <span className="text-amber-400">E</span>
            </div>
          </div>
        </div>

        {/* Main RICE Scoring Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle overflow-hidden mb-12">
          <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50/50 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Prioritized Feature Ranking Matrix
              </h3>
              <p className="text-xs text-slate-500">
                Sorted in descending order by calculated RICE score
              </p>
            </div>
            <span className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-lg">
              3 Features Evaluated
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3.5 px-4 font-bold text-center w-16">Rank</th>
                  <th className="py-3.5 px-5 font-bold">Feature Name</th>
                  <th className="py-3.5 px-4 font-bold">Reach (Qtr)</th>
                  <th className="py-3.5 px-4 font-bold">Impact</th>
                  <th className="py-3.5 px-4 font-bold">Confidence</th>
                  <th className="py-3.5 px-4 font-bold">Effort</th>
                  <th className="py-3.5 px-5 font-bold bg-slate-200/60 text-slate-900">RICE Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {sortedFeatures.map((feat) => {
                  const isTopRank = feat.rank === 1;
                  return (
                    <tr 
                      key={feat.id} 
                      className={`hover:bg-slate-50 transition-colors ${
                        isTopRank ? 'bg-brand-50/20' : ''
                      }`}
                    >
                      {/* Rank */}
                      <td className="py-4 px-4 text-center">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          isTopRank 
                            ? 'bg-brand-600 text-white shadow-sm' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          #{feat.rank}
                        </span>
                      </td>

                      {/* Feature Name & Addressed Friction */}
                      <td className="py-4 px-5">
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          {feat.name}
                          {isTopRank && (
                            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-100 text-brand-700 border border-brand-200">
                              <Trophy className="w-3 h-3" /> Prioritized #1
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {feat.frictionAddressed}
                        </div>
                      </td>

                      {/* Reach */}
                      <td className="py-4 px-4 align-top">
                        <div className="font-semibold text-slate-800">
                          {(feat.reach / 1000).toFixed(1)}M
                        </div>
                        <div className="text-[11px] text-slate-500">
                          users/qtr
                        </div>
                      </td>

                      {/* Impact */}
                      <td className="py-4 px-4 align-top">
                        <div className="font-semibold text-slate-800">
                          {feat.impact.toFixed(1)}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {feat.impact >= 3 ? 'Massive' : feat.impact >= 2 ? 'High' : 'Medium'}
                        </div>
                      </td>

                      {/* Confidence */}
                      <td className="py-4 px-4 align-top">
                        <div className="font-semibold text-slate-800">
                          {Math.round(feat.confidence * 100)}%
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {feat.confidence >= 0.85 ? 'Very High' : 'High'}
                        </div>
                      </td>

                      {/* Effort */}
                      <td className="py-4 px-4 align-top">
                        <div className="font-semibold text-slate-800">
                          {feat.effort} mo
                        </div>
                        <div className="text-[11px] text-slate-500">
                          person-months
                        </div>
                      </td>

                      {/* RICE Score */}
                      <td className="py-4 px-5 align-top bg-slate-50/70 border-l border-slate-200/80">
                        <div className={`text-lg font-extrabold ${
                          isTopRank ? 'text-brand-600' : 'text-slate-800'
                        }`}>
                          {feat.riceScore.toLocaleString()}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          (R×I×C)/E
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature Cards with Score Justifications */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-bold text-slate-900">
              Detailed Score Justifications & Architectural Feasibility
            </h3>
            <span className="text-xs text-slate-500">Click to expand any feature</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {sortedFeatures.map((feat) => {
              const isExpanded = expandedFeature === feat.id;
              const isTopRank = feat.rank === 1;

              return (
                <div 
                  key={feat.id}
                  className={`bg-white rounded-2xl border transition-all ${
                    isTopRank 
                      ? 'border-brand-300 shadow-subtle' 
                      : 'border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFeature(isExpanded ? null : feat.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 ${
                        isTopRank ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        #{feat.rank}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                            {feat.name}
                          </h4>
                          {isTopRank && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-50 text-brand-700 border border-brand-200">
                              Selected for Full PRD
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {feat.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right hidden sm:block">
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">RICE</div>
                        <div className="text-base font-bold text-slate-900">{feat.riceScore}</div>
                      </div>
                      <div className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-slate-100 animate-in fade-in-50 duration-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-xs">
                          <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">Reach</span>
                          <span className="font-bold text-slate-800">{feat.reachLabel}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-xs">
                          <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">Impact</span>
                          <span className="font-bold text-slate-800">{feat.impactLabel}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-xs">
                          <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">Confidence</span>
                          <span className="font-bold text-slate-800">{feat.confidenceLabel}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-xs">
                          <span className="text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">Effort</span>
                          <span className="font-bold text-slate-800">{feat.effortLabel}</span>
                        </div>
                      </div>

                      <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-3.5 text-xs text-slate-700">
                        <strong className="text-amber-900 font-semibold">Strategic Rationale & PM Justification: </strong>
                        {feat.rationale}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
