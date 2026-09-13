import React from 'react';
import { Sparkles, ArrowDownRight, Compass, ShieldAlert, TrendingDown, Target, ShoppingBag, Search, UserCheck, CreditCard } from 'lucide-react';
import { CASE_STUDY } from '../data/caseStudyData';

export default function HeroOverview() {
  const { meta, overview } = CASE_STUDY;

  const surfaceIcons = [
    <ShoppingBag className="w-5 h-5 text-brand-600" />,
    <Search className="w-5 h-5 text-indigo-600" />,
    <UserCheck className="w-5 h-5 text-amber-600" />,
    <CreditCard className="w-5 h-5 text-emerald-600" />
  ];

  return (
    <section id="overview" className="pt-8 pb-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges & Meta */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
            Product Management Case Study
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
            Subject: <strong>Myntra</strong> (Flipkart Group)
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
            Benchmarks: <strong>Ajio</strong> & <strong>Nykaa Fashion</strong>
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium text-slate-500 ml-auto hidden sm:inline-block">
            {meta.readingTime} • Portfolio Artifact
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Fashion E-Commerce App Teardown & Feature Strategy
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8">
            A self-directed UX audit and unit-economics-driven product strategy analyzing India's leading fashion platform, diagnosing four systemic friction loops, and establishing a RICE-ranked roadmap.
          </p>
        </div>

        {/* Problem Framing Callout Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-subtle mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600"></div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600 hidden sm:flex">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Problem Framing & Executive Context</span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500">Why Myntra, Why This Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                {overview.headline}
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {overview.summary}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
            {overview.stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/60">
                <span className="text-xs font-medium text-slate-500 block mb-1">{stat.label}</span>
                <div className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1 text-xs">
                  {stat.type === 'negative' && <TrendingDown className="w-3.5 h-3.5 text-rose-500" />}
                  {stat.type === 'positive' && <Target className="w-3.5 h-3.5 text-emerald-600" />}
                  <span className={
                    stat.type === 'negative' ? 'text-rose-600 font-medium' :
                    stat.type === 'positive' ? 'text-emerald-700 font-medium' :
                    'text-slate-600 font-medium'
                  }>
                    {stat.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Scope: 4 Core Surfaces */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Four Core Surfaces Evaluated in this Teardown
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">End-to-End Buyer Journey</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {overview.scopeSurfaces.map((surface, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-5 border border-slate-200/80 hover:border-slate-300 transition-all shadow-sm hover:shadow-md group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                  {surfaceIcons[idx]}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Surface 0{idx + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-brand-600 transition-colors">
                  {surface.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {surface.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
