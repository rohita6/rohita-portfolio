import React from 'react';
import { FileText, Mail, HelpCircle, User, Volume2, VolumeX } from 'lucide-react';

export default function Navbar({
  theme = 'dark',
  onToggleTheme,
  soundEnabled = true,
  onToggleSound,
  viewMode,
  setViewMode,
  onOpenAbout,
  onOpenResume,
  onOpenContact,
  onOpenExplainer
}) {
  const isDark = theme === 'dark';

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4 flex justify-center pointer-events-none">
      {/* Expanded Container: py-3.5, px-5, max-w-5xl */}
      <nav
        className={`pointer-events-auto backdrop-blur-2xl border rounded-full px-5 py-3.5 flex items-center justify-between gap-4 sm:gap-8 shadow-2xl max-w-5xl w-full transition-all duration-500 ${
          isDark
            ? 'bg-black/75 border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)]'
            : 'bg-white/80 border-black/10 shadow-[0_15px_35px_rgba(0,0,0,0.08)]'
        }`}
      >
        {/* Brand Group + Enlarged RC Moon/Sun Toggle */}
        <div className="flex items-center gap-3 pl-1">
          <button
            onClick={onToggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`group relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-700 transform hover:scale-110 active:scale-95 shadow-md overflow-hidden ${
              isDark
                ? 'bg-slate-100 shadow-[0_0_15px_rgba(255,255,255,0.35)] hover:shadow-[0_0_22px_rgba(255,255,255,0.6)]'
                : 'bg-gradient-to-tr from-amber-300 to-yellow-200 shadow-[0_0_15px_rgba(251,191,36,0.5)] hover:shadow-[0_0_22px_rgba(251,191,36,0.8)]'
            }`}
          >
            {/* Moon Craters (Dark Mode) */}
            {isDark && (
              <div className="absolute inset-0 pointer-events-none opacity-80">
                <span className="absolute top-1.5 left-2 w-2 h-2 rounded-full bg-slate-300/70" />
                <span className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-slate-300/50" />
                <span className="absolute bottom-1.5 left-3 w-1.5 h-1.5 rounded-full bg-slate-300/60" />
              </div>
            )}

            {/* Sun Rays Glow (Light Mode) */}
            {!isDark && (
              <div className="absolute inset-0 pointer-events-none opacity-40 animate-spin-slow">
                <span className="absolute inset-0 rounded-full bg-amber-400/30 blur-[2px]" />
              </div>
            )}

            {/* RC Text */}
            <span className="relative z-10 text-xs font-black font-mono tracking-tighter text-black select-none">
              RC
            </span>
          </button>

          <span
            className={`text-sm font-bold tracking-tight hidden sm:inline transition-colors duration-500 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Rohita Chidireddi
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center p-1 rounded-full border text-xs transition-colors duration-500 ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}
          >
            <button
              onClick={() => setViewMode('recruiter')}
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs font-medium ${
                viewMode === 'recruiter'
                  ? isDark
                    ? 'bg-white text-black shadow-lg font-semibold'
                    : 'bg-slate-900 text-white shadow-lg font-semibold'
                  : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Recruiter
            </button>

            <button
              onClick={() => setViewMode('engLead')}
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs font-medium ${
                viewMode === 'engLead'
                  ? isDark
                    ? 'bg-white text-black shadow-lg font-semibold'
                    : 'bg-slate-900 text-white shadow-lg font-semibold'
                  : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Eng Lead
            </button>

            <button
              onClick={() => setViewMode('overview')}
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs font-medium ${
                viewMode === 'overview'
                  ? isDark
                    ? 'bg-white text-black shadow-lg font-semibold'
                    : 'bg-slate-900 text-white shadow-lg font-semibold'
                  : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Overview
            </button>
          </div>

          <button
            onClick={onOpenExplainer}
            title="What are these views?"
            className={`p-2 rounded-full transition-all ${
              isDark
                ? 'bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white'
                : 'bg-black/5 hover:bg-black/10 text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Responsive Sound Toggle Button */}
        <button
          type="button"
          onClick={onToggleSound}
          title={soundEnabled ? "Mute Theme Toggle Sound" : "Enable Theme Toggle Sound"}
          className={`p-2 rounded-full border transition-all ${
            isDark
              ? soundEnabled
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'bg-white/5 hover:bg-white/10 text-slate-400 border-white/10'
              : soundEnabled
                ? 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                : 'bg-black/5 hover:bg-black/10 text-slate-600 border-black/10'
          }`}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-blue-400" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pr-1">
          {onOpenAbout && (
            <button
              onClick={onOpenAbout}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/10'
                  : 'bg-black/5 hover:bg-black/10 text-slate-900 border-black/10'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">About</span>
            </button>
          )}

          <button
            onClick={onOpenResume}
            className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
              isDark
                ? 'bg-white/10 hover:bg-white/20 text-white border-white/10'
                : 'bg-black/5 hover:bg-black/10 text-slate-900 border-black/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg transition-all flex items-center gap-1.5 ${
              isDark
                ? 'bg-white hover:bg-slate-200 text-black'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </nav>
    </header>
  );
}