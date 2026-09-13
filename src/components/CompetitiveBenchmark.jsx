import React from 'react';
import { Award, CheckCircle2, AlertTriangle, XCircle, ArrowUpRight, Sparkles, Truck, RefreshCw } from 'lucide-react';
import { CASE_STUDY } from '../data/caseStudyData';

export default function CompetitiveBenchmark() {
  const { benchmarking } = CASE_STUDY;

  const getStatusBadge = (status, label) => {
    switch (status) {
      case 'green':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" />
            {label}
          </span>
        );
      case 'amber':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <AlertTriangle className="w-3 h-3" />
            {label}
          </span>
        );
      case 'red':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3 h-3" />
            {label}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="benchmark" className="py-16 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
              Phase 02: Market Landscape
            </span>
            <span className="text-xs text-slate-500">Comparative Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Competitive Benchmarking: Personalization & Post-Purchase
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {benchmarking.summary}
          </p>
        </div>

        {/* Benchmarking Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-semibold w-1/4">Evaluation Dimension</th>
                  <th className="py-4 px-5 font-semibold w-1/4 bg-slate-850 border-x border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                      <span>Myntra (Subject)</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 font-semibold w-1/4">Ajio (Reliance)</th>
                  <th className="py-4 px-5 font-semibold w-1/4">Nykaa Fashion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {benchmarking.dimensions.map((dim, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    {/* Dimension Name */}
                    <td className="py-4 px-5 font-bold text-slate-900 align-top bg-slate-50/40">
                      <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                        {dim.category.split(':')[0]}
                      </div>
                      <div className="text-slate-800">
                        {dim.category.split(':')[1]}
                      </div>
                    </td>

                    {/* Myntra (Subject) Column */}
                    <td className="py-4 px-5 align-top bg-brand-50/10 border-x border-slate-100">
                      <div className="mb-2">
                        {getStatusBadge(dim.myntra.status, dim.myntra.rating)}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {dim.myntra.details}
                      </p>
                    </td>

                    {/* Ajio Column */}
                    <td className="py-4 px-5 align-top">
                      <div className="mb-2">
                        {getStatusBadge(dim.ajio.status, dim.ajio.rating)}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {dim.ajio.details}
                      </p>
                    </td>

                    {/* Nykaa Fashion Column */}
                    <td className="py-4 px-5 align-top">
                      <div className="mb-2">
                        {getStatusBadge(dim.nykaaFashion.status, dim.nykaaFashion.rating)}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {dim.nykaaFashion.details}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="py-2.5 px-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span>Scroll horizontally on smaller screens to compare all platforms</span>
            <span className="font-medium text-slate-700">Audit Date: Q1 2025 Mobile Apps</span>
          </div>
        </div>

        {/* Meaningful Competitor Wins Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Where Competitors Are Doing Something Meaningfully Better
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-3xl">
            Direct observations on specific competitor differentiators that solve user friction points and create structural competitive advantages over Myntra.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benchmarking.competitorWins.map((win, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800">
                    {win.competitor}
                  </span>
                  <span className="text-xs font-semibold text-brand-700 flex items-center gap-1">
                    {win.area}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    What They Do Meaningfully Better:
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {win.whatTheyDoBetter}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-slate-50/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Strategic Takeaway for Myntra:
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {win.takeawayForMyntra}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
