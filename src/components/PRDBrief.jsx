import React, { useState } from 'react';
import { FileText, Target, CheckSquare, XSquare, Activity, Split, Sparkles, AlertCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CASE_STUDY } from '../data/caseStudyData';

export default function PRDBrief() {
  const { prd } = CASE_STUDY;
  const [activeTab, setActiveTab] = useState('solution'); // 'problem', 'solution', 'metrics', 'scope', 'experiment'

  return (
    <section id="prd-brief" className="py-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
                Phase 05: Product Execution
              </span>
              <span className="text-xs text-slate-500">PRD Specification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              PRD-Style Product Brief: #1 Feature ({prd.featureName.split(':')[0]})
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Detailed Product Requirements Document for <span className="font-semibold text-slate-900">{prd.featureName}</span>, engineered to eliminate size ambiguity and recover reverse logistics margins.
            </p>
          </div>

          {/* Document metadata pill */}
          <div className="bg-slate-900 text-white p-3.5 rounded-xl text-xs font-mono border border-slate-800 shrink-0">
            <div className="flex items-center justify-between gap-4 mb-1">
              <span className="text-slate-400">STATUS:</span>
              <span className="text-emerald-400 font-bold">APPROVED FOR DEV</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-slate-300">
              <span className="text-slate-400">VERSION:</span>
              <span>{prd.version}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-slate-300">
              <span className="text-slate-400">TARGET:</span>
              <span>{prd.targetLaunch.split('(')[0]}</span>
            </div>
          </div>
        </div>

        {/* PRD Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-8 border-b border-slate-200 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab('solution')}
            className={`px-4 py-2.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'solution'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            1. Proposed Solution & UX
          </button>
          <button
            onClick={() => setActiveTab('problem')}
            className={`px-4 py-2.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'problem'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            2. Problem & Unit Economics
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-4 py-2.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'metrics'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            3. Success Metrics & KPIs
          </button>
          <button
            onClick={() => setActiveTab('scope')}
            className={`px-4 py-2.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'scope'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            4. In/Out Scope (MVP)
          </button>
          <button
            onClick={() => setActiveTab('experiment')}
            className={`px-4 py-2.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'experiment'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            5. A/B Rollout Plan
          </button>
        </div>

        {/* Tab 1: Proposed Solution & Core UX */}
        {activeTab === 'solution' && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-brand-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  {prd.proposedSolution.headline}
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-8 max-w-3xl">
                FitTwin transforms sizing from a static tabular guess into an active recommendation loop calibrated against garment cut physics and returns history.
              </p>

              {/* 4 Core Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prd.proposedSolution.steps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all group"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                      Step 0{idx + 1}
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-brand-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Interactive Mock Barometer Preview */}
              <div className="mt-8 p-5 bg-gradient-to-r from-slate-900 to-slate-850 text-white rounded-xl border border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-400 mb-1">
                  PDP Interactive Component Preview (FitTwin Widget)
                </div>
                <div className="text-sm font-semibold text-white mb-3">
                  "Your FitTwin Match: <span className="text-emerald-400">Size L (92% Confidence)</span>"
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 mb-2 overflow-hidden flex">
                  <div className="bg-emerald-500 h-full w-[88%]" title="Size L Match (88%)"></div>
                  <div className="bg-amber-500 h-full w-[8%]" title="Size XL (8%)"></div>
                  <div className="bg-rose-500 h-full w-[4%]" title="Size M (4% - tight fit)"></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>88% kept Size L</span>
                  <span>Size M had 74% return rate for tight chest</span>
                  <span className="text-brand-300">Cut: Relaxed / Boxy</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Problem Statement & Economics */}
        {activeTab === 'problem' && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  {prd.problemStatement.headline}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8 max-w-4xl">
                {prd.problemStatement.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Key Margin Leaks Targeted by this PRD
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {prd.problemStatement.impactedMetrics.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="text-xs text-slate-500 font-medium block mb-1">{item.name}</span>
                    <div className="text-lg font-bold text-slate-900 mb-1">{item.current}</div>
                    <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5 inline-block">
                      Target: {item.target}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Success Metrics & KPIs */}
        {activeTab === 'metrics' && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-indigo-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Success Metrics & Guardrail Framework
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Measuring both user conversion velocity and bottom-line reverse logistics cost avoidance, with strict latency guardrails.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prd.successMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        metric.type.includes('Primary')
                          ? 'bg-brand-50 text-brand-700 border border-brand-200'
                          : metric.type.includes('Guardrail')
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      }`}>
                        {metric.type}
                      </span>
                      <Activity className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base mb-1.5">
                      {metric.metric}
                    </h4>
                    <div className="text-xs font-semibold text-emerald-700 mb-2">
                      Target: {metric.target}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>PM Rationale: </strong>{metric.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Scope Matrix (In vs Out of Scope) */}
        {activeTab === 'scope' && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* In Scope */}
              <div className="bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 shadow-subtle">
                <div className="flex items-center gap-2 mb-4 text-emerald-700">
                  <CheckSquare className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-slate-900">
                    In-Scope for V1 MVP Launch
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-6">
                  Strictly prioritized for minimum engineering complexity and maximum return reduction leverage.
                </p>
                <ul className="space-y-3">
                  {prd.scope.inScope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Out of Scope */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle">
                <div className="flex items-center gap-2 mb-4 text-slate-500">
                  <XSquare className="w-5 h-5 text-rose-500" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Explicitly Out-of-Scope (Future Phases)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-6">
                  Deprioritized to avoid mobile camera permission friction, catalog sprawl, and privacy hurdles.
                </p>
                <ul className="space-y-3">
                  {prd.scope.outOfScope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Experimentation & Rollout */}
        {activeTab === 'experiment' && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-subtle">
              <div className="flex items-center gap-2 mb-2">
                <Split className="w-5 h-5 text-brand-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  A/B Experimentation & Statistical Rollout
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                <strong>Framework:</strong> {prd.experimentation.framework} | <strong>Sample:</strong> {prd.experimentation.sampleSize}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {prd.experimentation.splits.map((split, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-1">
                      {split.group}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {split.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900">
                <strong>Go / No-Go Decision Gate: </strong>
                {prd.experimentation.decisionGate}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
