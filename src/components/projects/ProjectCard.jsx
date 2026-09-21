import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, viewMode, theme = 'dark', onClick }) {
  const isDark = theme === 'dark';

  const impact =
    project?.impactStats?.[viewMode] ||
    project?.impactStats?.recruiter ||
    project?.impactRecruiter ||
    project?.tagline;

  const techList = project?.techStack || project?.tags || [];

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col h-[380px] ${
        isDark
          ? 'bg-zinc-950/80 border border-white/10 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.95)]'
          : 'bg-white/80 border border-black/10 hover:border-black/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
      }`}
    >
      {/* Top Preview Area (Expanded from 220px -> 275px for larger screenshot display) */}
      <div className="relative w-full h-[275px] overflow-hidden flex-shrink-0 bg-slate-900">
        
        {/* Badges Overlaid On Top */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          <span
            className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md ${
              isDark
                ? 'bg-black/70 border-white/20 text-white shadow-lg'
                : 'bg-white/90 border-black/10 text-slate-900 shadow-md'
            }`}
          >
            {project?.category || 'ENGINEERING'}
          </span>

          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${
              isDark
                ? 'text-emerald-400 bg-black/70 border-white/20 shadow-lg'
                : 'text-emerald-600 bg-emerald-500/20 border-emerald-500/30 shadow-md'
            }`}
          >
            {project?.heroStat || 'Active'}
          </span>
        </div>

        {/* Condition A: Render Screenshot Image */}
        {project?.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Condition B: Fallback Mock Code Window (If No Image) */
          <div className="w-full h-full p-4 pt-14 flex items-center justify-center">
            <div
              className={`w-full h-full rounded-2xl border p-3 backdrop-blur-sm shadow-xl flex flex-col justify-between ${
                isDark
                  ? 'bg-black/60 border-white/10'
                  : 'bg-white/70 border-black/10 shadow-slate-200/50'
              }`}
            >
              <div className={`flex items-center justify-between pb-2 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <div className="w-2 h-2 rounded-full bg-green-400/70" />
                </div>
                <span className={`text-[9px] font-mono ${isDark ? 'text-white/30' : 'text-slate-400'}`}>
                  {project?.uiSnippet?.title || 'app.ts'}
                </span>
              </div>
              <p className={`text-xs font-mono truncate pt-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {project?.uiSnippet?.previewText || 'Building scalable web software...'}
              </p>
              <div className="flex items-end gap-1.5 h-8 mt-1">
                <div className={`flex-1 h-[40%] rounded-t-sm ${isDark ? 'bg-white/10' : 'bg-slate-900/10'}`} />
                <div className={`flex-1 h-[75%] rounded-t-sm ${isDark ? 'bg-white/20' : 'bg-slate-900/20'}`} />
                <div className={`flex-1 h-[90%] rounded-t-sm ${isDark ? 'bg-white/30' : 'bg-slate-900/30'}`} />
                <div className={`flex-1 h-[50%] rounded-t-sm ${isDark ? 'bg-white/15' : 'bg-slate-900/15'}`} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lower Compact Footer Section */}
      <div
        className={`relative flex-1 px-4 py-3 flex flex-col justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 ${
          isDark
            ? 'bg-gradient-to-br from-zinc-900 via-zinc-950 to-black'
            : 'bg-gradient-to-br from-slate-100 via-slate-50 to-white'
        }`}
      >
        <h3 className={`text-lg font-extrabold tracking-tight leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {project?.title}
        </h3>
        <p className={`text-[11px] line-clamp-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {project?.tagline || project?.subtitle}
        </p>
      </div>

      {/* Hover Overlay Drawer */}
      <div
        className={`absolute inset-x-0 bottom-0 p-5 border-t backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform translate-y-full group-hover:translate-y-0 flex flex-col justify-between h-[75%] z-30 ${
          isDark ? 'bg-black/95 border-white/15' : 'bg-white/95 border-black/15 shadow-2xl'
        }`}
      >
        <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {project?.title}
          </h4>
          <p className={`text-xs leading-relaxed line-clamp-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {impact}
          </p>
        </div>

        <div className="space-y-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
          <div className="flex flex-wrap gap-1.5">
            {techList.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  isDark ? 'bg-white/10 text-slate-300 border-white/10' : 'bg-black/5 text-slate-700 border-black/10'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors ${
              isDark ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            View Project Details
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}