import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, Share2, Check, ArrowRight } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'ux-audit', label: 'UX Audit' },
    { id: 'benchmark', label: 'Competitive Benchmark' },
    { id: 'prioritization', label: 'RICE Strategy' },
    { id: 'personas', label: 'Personas' },
    { id: 'prd-brief', label: 'PRD Brief (#1)' },
    { id: 'reflection', label: 'PM Reflection' },
  ];

  const handleCopyPitch = () => {
    const pitch = "Fashion E-Commerce App Teardown & Feature Strategy: A self-directed UX audit of Myntra with competitive benchmarking (Ajio, Nykaa Fashion), RICE feature prioritization, and PRD for FitTwin AI sizing.";
    navigator.clipboard.writeText(pitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm' 
        : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Title */}
          <a href="#overview" className="flex items-center gap-2.5 text-slate-900 group">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-sm group-hover:bg-brand-700 transition-colors">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base leading-tight tracking-tight text-slate-900">
                Fashion PM Teardown
              </span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                Myntra • Ajio • Nykaa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-tight transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-bold border border-brand-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action / Share button */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handleCopyPitch}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              title="Copy portfolio elevator pitch to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Pitch Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Pitch</span>
                </>
              )}
            </button>
            <a
              href="#prd-brief"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors shadow-sm"
            >
              <span>View PRD</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleCopyPitch}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200 bg-white"
              aria-label="Copy pitch"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-brand-50 text-brand-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <a
              href="#prd-brief"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700"
            >
              Jump to #1 Prioritized PRD Brief
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
