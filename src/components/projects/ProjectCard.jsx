import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, viewMode, theme = 'dark', onClick }) {
  const isDark = theme === 'dark';

  // Dynamic perspective impact text
  const impact =
    project?.impactStats?.[viewMode] ||
    project?.impactStats?.recruiter ||
    project?.impactRecruiter ||
    project?.tagline;

  // Safe fallback list to prevent slice/map crashes
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
      {/* Main Project Preview Section */}
      <div
        className={`relative flex-1 p-6 overflow-hidden flex flex-col justify-between transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] ${
          isDark
            ? 'bg-gradient-to-br from-zinc-900 via-zinc-950 to-black'
            : 'bg-gradient-to-br from-slate-100 via-slate-50 to-white'
        }`}
      >
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span
            className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md ${
              isDark
                ? 'bg-black/60 border-white/10 text-white'
                : 'bg-white/80 border-black/10 text-slate-900 shadow-sm'
            }`}
          >
            {project?.category || 'ENGINEERING'}
          </span>

          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${
              isDark
                ? 'text-emerald-400 bg-black/60 border-white/10'
                : 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20'
            }`}
          >
            {project?.heroStat || 'Active'}
          </span>
        </div>

        {/* Inner Mock UI Preview Graphic */}
        <div className="my-auto py-4">
          <div
            className={`relative w-full h-40 rounded-2xl border p-4 backdrop-blur-sm shadow-2xl ${
              isDark
                ? 'bg-black/60 border-white/10'
                : 'bg-white/70 border-black/10 shadow-slate-200/50'
            }`}
          >
            {/* Fake Browser Header */}
            <div
              className={`flex items-center justify-between pb-3 border-b ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                <div className="w-2 h-2 rounded-full bg-green-400/70" />
              </div>

              <span
                className={`text-[9px] font-mono ${
                  isDark ? 'text-white/30' : 'text-slate-400'
                }`}
              >
                {project?.uiSnippet?.title || 'app.ts'}
              </span>
            </div>

            {/* Preview Text & Visual Data Bars */}
            <div className="pt-4">
              <p
                className={`text-xs font-mono truncate ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {project?.uiSnippet?.previewText || 'Building scalable web software...'}
              </p>

              <div className="flex items-end gap-2 h-12 mt-3">
                <div
                  className={`flex-1 h-[35%] rounded-t-sm ${
                    isDark ? 'bg-white/10' : 'bg-slate-900/10'
                  }`}
                />
                <div
                  className={`flex-1 h-[60%] rounded-t-sm ${
                    isDark ? 'bg-white/20' : 'bg-slate-900/20'
                  }`}
                />
                <div
                  className={`flex-1 h-[85%] rounded-t-sm ${
                    isDark ? 'bg-white/30' : 'bg-slate-900/30'
                  }`}
                />
                <div
                  className={`flex-1 h-[50%] rounded-t-sm ${
                    isDark ? 'bg-white/15' : 'bg-slate-900/15'
                  }`}
                />
                <div
                  className={`flex-1 h-[72%] rounded-t-sm ${
                    isDark ? 'bg-white/25' : 'bg-slate-900/25'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Title & Tagline at Bottom of Preview */}
        <div className="z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
          <h3
            className={`text-xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {project?.title}
          </h3>

          <p
            className={`text-xs line-clamp-1 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {project?.tagline || project?.subtitle}
          </p>
        </div>
      </div>

      {/* Hover Overlay Drawer */}
      <div
        className={`absolute inset-x-0 bottom-0 p-6 border-t backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform translate-y-full group-hover:translate-y-0 flex flex-col justify-between h-[68%] z-20 ${
          isDark
            ? 'bg-black/90 border-white/15'
            : 'bg-white/95 border-black/15 shadow-2xl'
        }`}
      >
        {/* Summary Description */}
        <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
          <div className="flex items-center justify-between">
            <h4
              className={`text-sm font-bold ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {project?.title}
            </h4>
          </div>

          <p
            className={`text-xs leading-relaxed line-clamp-3 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {impact}
          </p>
        </div>

        {/* Technology Tags & Action Trigger */}
        <div className="space-y-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 ease-out">
          <div className="flex flex-wrap gap-1.5">
            {techList.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  isDark
                    ? 'bg-white/10 text-slate-300 border-white/10'
                    : 'bg-black/5 text-slate-700 border-black/10'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors ${
              isDark
                ? 'bg-white text-black hover:bg-slate-200'
                : 'bg-slate-900 text-white hover:bg-slate-800'
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