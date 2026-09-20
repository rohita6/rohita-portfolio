import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ParticleBackground from './components/hero/ParticleBackground';
import HeroSection from './components/hero/HeroSection';
import ProjectGrid from './components/projects/ProjectGrid';
import TechSpecs from './components/specs/TechSpecs';
import ResumeModal from './components/modals/ResumeModal';
import ContactDrawer from './components/modals/ContactDrawer';
import ViewModeExplainer from './components/modals/ViewModeExplainer';
import ProjectDetailModal from './components/modals/ProjectDetailModal';
import AboutMe from './components/modals/AboutMe';
import { soundFx } from './utils/soundEffects';

export default function App() {
  const [viewMode, setViewMode] = useState('recruiter');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isExplainerOpen, setIsExplainerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const [soundEnabled, setSoundEnabled] = useState(true);

  // Intro Animation States
  const [showIntro, setShowIntro] = useState(true);
  const [introPhase, setIntroPhase] = useState(0);

  const triggerIntroAnimation = () => {
    setShowIntro(true);
    setIntroPhase(0);

    // Phase 1: Scale & fade in elements
    const phase1Timer = setTimeout(() => {
      setIntroPhase(1);
    }, 100);

    // Phase 2: Fade out overlay and remove from DOM
    const phase2Timer = setTimeout(() => {
      setIntroPhase(2);
    }, 1800);

    const endTimer = setTimeout(() => {
      setShowIntro(false);
    }, 2400);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
      clearTimeout(endTimer);
    };
  };

  useEffect(() => {
    triggerIntroAnimation();
  }, []);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      if (soundEnabled) {
        soundFx.playThemeToggle(nextTheme);
      }
      return nextTheme;
    });
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 font-sans antialiased tracking-tight overflow-x-hidden ${
        theme === 'dark'
          ? 'bg-[#030306] text-white selection:bg-white/20 selection:text-white'
          : 'bg-[#f8f9fc] text-slate-900 selection:bg-black/10 selection:text-slate-900'
      }`}
    >
      {/* Intro Animation Overlay */}
      {showIntro && (
        <div
          className={`fixed inset-0 z-50 bg-[#030306] flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none ${
            introPhase === 2 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="relative flex flex-col items-center gap-4 text-center px-4">
            <div
              className={`w-16 h-16 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-white flex items-center justify-center shadow-[0_0_50px_rgba(96,165,250,0.5)] transition-all duration-1000 ${
                introPhase >= 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
              <span className="text-black text-xl font-black font-mono">RC</span>
            </div>

            <h1
              className={`text-2xl sm:text-4xl font-extrabold text-white tracking-tight transition-all duration-1000 delay-300 ${
                introPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Rohita Chidireddi
            </h1>

            <p
              className={`text-xs sm:text-sm font-mono text-blue-400 tracking-widest uppercase transition-all duration-1000 delay-500 ${
                introPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Software Engineer Portfolio
            </p>
          </div>
        </div>
      )}

      {/* Background Starfield / Particle Canvas */}
      <ParticleBackground theme={theme} />

      {/* Top Floating Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenExplainer={() => setIsExplainerOpen(true)}
      />

      {/* Main Page Content */}
      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto space-y-28 relative z-10">
        <HeroSection viewMode={viewMode} theme={theme} />
        <ProjectGrid
          viewMode={viewMode}
          theme={theme}
          onProjectSelect={setSelectedProject}
        />
        <TechSpecs theme={theme} />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Modals & Drawers */}
      {isResumeOpen && (
        <ResumeModal theme={theme} onClose={() => setIsResumeOpen(false)} />
      )}
      {isContactOpen && (
        <ContactDrawer theme={theme} onClose={() => setIsContactOpen(false)} />
      )}
      {isExplainerOpen && (
        <ViewModeExplainer theme={theme} onClose={() => setIsExplainerOpen(false)} />
      )}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          viewMode={viewMode}
          theme={theme}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {isAboutOpen && (
        <AboutMe theme={theme} onClose={() => setIsAboutOpen(false)} />
      )}
    </div>
  );
}