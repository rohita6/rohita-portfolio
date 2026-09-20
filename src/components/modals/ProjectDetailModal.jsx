import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function ProjectDetailModal({ project, viewMode = 'recruiter', theme = 'dark', onClose }) {
  if (!project) return null;
  const isDark = theme === 'dark';

  const impact =
    project?.impactStats?.[viewMode] ||
    project?.impactStats?.recruiter ||
    project?.impactRecruiter ||
    project?.tagline;

  const techList = project?.techStack || project?.tags || [];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div
        className={`border rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative my-auto max-h-[90vh] overflow-y-auto ${
          isDark
            ? 'bg-zinc-950/95 border-white/15 text-white'
            : 'bg-white/95 border-black/15 text-slate-900 shadow-2xl'
        }`}
      >
        {/* Top-Right X Close Trigger */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full border transition-all ${
            isDark
              ? 'bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border-white/10'
              : 'bg-black/5 hover:bg-black/10 text-slate-600 hover:text-slate-900 border-black/10'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${
                isDark
                  ? 'bg-white/10 border-white/15 text-white'
                  : 'bg-black/5 border-black/10 text-slate-900'
              }`}
            >
              {project?.category || 'ENGINEERING'}
            </span>

            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                isDark
                  ? 'text-emerald-400 bg-black/60 border-white/10'
                  : 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20'
              }`}
            >
              {project?.heroStat || 'Active System'}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight mt-2">{project?.title}</h2>
          <p className={isDark ? 'text-xs text-slate-300' : 'text-xs text-slate-600'}>
            {project?.tagline || project?.subtitle}
          </p>
        </div>

        {/* Role Perspective Impact Section */}
        <div
          className={`p-4 rounded-2xl border space-y-2 ${
            isDark
              ? 'bg-black/60 border-white/10 text-slate-300'
              : 'bg-slate-50 border-black/10 text-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Perspective Highlights ({viewMode})</span>
          </div>
          <p className="text-xs leading-relaxed">{impact}</p>
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className={`p-4 rounded-2xl border space-y-1.5 ${
              isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-black/10'
            }`}
          >
            <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              The Challenge
            </h4>
            <p className={isDark ? 'text-xs text-slate-300' : 'text-xs text-slate-600'}>
              {project?.problem || 'Structuring resilient full-stack architecture with low latency and clean component abstractions.'}
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border space-y-1.5 ${
              isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-black/10'
            }`}
          >
            <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              The Architectural Solution
            </h4>
            <p className={isDark ? 'text-xs text-slate-300' : 'text-xs text-slate-600'}>
              {project?.solution || 'Modular route gateways, decoupled component state trees, and responsive user interfaces.'}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {techList.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-3 py-1 rounded-full border ${
                  isDark
                    ? 'bg-white/10 text-slate-200 border-white/10'
                    : 'bg-black/5 text-slate-800 border-black/10'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Fixed Modal Footer (Source Code & Live Demo Buttons) */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                  : 'bg-black/5 border-black/10 hover:bg-black/10 text-slate-900'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-lg ${
                isDark
                  ? 'bg-white text-black hover:bg-slate-200'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </div>
  );
}