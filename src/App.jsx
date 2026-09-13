import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroOverview from './components/HeroOverview';
import UXAudit from './components/UXAudit';
import CompetitiveBenchmark from './components/CompetitiveBenchmark';
import Prioritization from './components/Prioritization';
import UserPersonas from './components/UserPersonas';
import PRDBrief from './components/PRDBrief';
import Reflection from './components/Reflection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const sectionIds = ['overview', 'ux-audit', 'benchmark', 'prioritization', 'personas', 'prd-brief', 'reflection'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Offset for sticky navbar
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-sans">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Overview & Problem Framing */}
        <HeroOverview />

        {/* Section 2: UX Audit with Heuristics */}
        <UXAudit />

        {/* Section 3: Competitive Benchmarking */}
        <CompetitiveBenchmark />

        {/* Section 4: Feature Strategy & RICE Prioritization */}
        <Prioritization />

        {/* Section 5: Target User Personas */}
        <UserPersonas />

        {/* Section 6: PRD Brief for #1 Prioritized Feature */}
        <PRDBrief />

        {/* Section 7: PM Synthesis & Reflection */}
        <Reflection />
      </main>

      {/* Footer & Resume Snippet */}
      <Footer />
    </div>
  );
}
