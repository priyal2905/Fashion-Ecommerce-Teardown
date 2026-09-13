import React, { useState } from 'react';
import { User, CheckCircle2, AlertOctagon, Heart, Sparkles, MapPin, Briefcase, ShoppingBag, Clock } from 'lucide-react';
import { CASE_STUDY } from '../data/caseStudyData';

export default function UserPersonas() {
  const { personas } = CASE_STUDY;
  const [activePersonaTab, setActivePersonaTab] = useState('all'); // 'all', 'persona-1', 'persona-2'

  return (
    <section id="personas" className="py-16 border-b border-slate-200/80 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
                Phase 04: User Empathy
              </span>
              <span className="text-xs text-slate-500">Qualitative Research</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Target User Personas & Feature Alignment
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Representing Myntra's two polarized high-value customer segments: the trend-obsessed Gen Z mobile native versus the time-constrained, quality-focused working professional.
            </p>
          </div>

          {/* Quick tab filter on mobile/tablet */}
          <div className="flex items-center p-1 bg-slate-200/60 rounded-xl text-xs font-medium self-start">
            <button
              onClick={() => setActivePersonaTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePersonaTab === 'all' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              onClick={() => setActivePersonaTab('persona-1')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePersonaTab === 'persona-1' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'
              }`}
            >
              Aarav (Gen Z)
            </button>
            <button
              onClick={() => setActivePersonaTab('persona-2')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePersonaTab === 'persona-2' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'
              }`}
            >
              Sneha (Professional)
            </button>
          </div>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {personas
            .filter(p => activePersonaTab === 'all' || p.id === activePersonaTab)
            .map((persona) => (
              <div 
                key={persona.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  {/* Persona Header: Identity & Archetype */}
                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border ${persona.avatarBg}`}>
                        {persona.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {persona.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-slate-400" />
                            {persona.occupation} ({persona.age})
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {persona.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 text-right">
                      {persona.id === 'persona-1' ? 'Gen Z Shopper' : 'Tier-1 Professional'}
                    </span>
                  </div>

                  {/* Archetype & Frequency */}
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-700">
                      <strong>Archetype:</strong> {persona.archetype}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {persona.shoppingFrequency}
                    </span>
                  </div>

                  {/* Representative Quote */}
                  <div className="mb-6 relative">
                    <blockquote className="text-sm sm:text-base text-slate-800 italic font-medium bg-brand-50/40 border-l-4 border-brand-500 pl-4 py-3 pr-3 rounded-r-xl leading-relaxed">
                      "{persona.quote}"
                    </blockquote>
                  </div>

                  {/* Goals & Frustrations Grid */}
                  <div className="space-y-4 mb-6">
                    {/* Goals */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Core Shopping Goals
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {persona.goals.map((goal, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Frustrations */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
                        <AlertOctagon className="w-3.5 h-3.5" />
                        Pain Points & Frustrations
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {persona.frustrations.map((frust, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{frust}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Preferred Feature Alignment Callout */}
                <div className="mt-4 pt-4 border-t border-slate-200/90 bg-slate-900 text-white rounded-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Priority Feature Alignment
                    </span>
                    <span className="text-[10px] bg-brand-600/80 text-white px-2 py-0.5 rounded font-bold">
                      Match
                    </span>
                  </div>
                  <div className="font-bold text-sm sm:text-base text-white mb-1.5">
                    {persona.preferredFeature}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    <strong className="text-white font-semibold">Why It Matters Most: </strong>
                    {persona.whyFeatureMatters}
                  </p>
                </div>

              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
