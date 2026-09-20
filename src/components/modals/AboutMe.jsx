import React from 'react';
import { X, GraduationCap, Award, Compass, Heart } from 'lucide-react';

export default function AboutMe({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-zinc-950/90 border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative my-auto max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-6 pr-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-200 to-white flex items-center justify-center shrink-0 shadow-inner">
            <span className="text-black text-sm font-black font-mono">RC</span>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Rohita Chidireddi</h2>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Software Engineer • Sydney, Australia
            </p>
          </div>
        </div>

        {/* Bio Highlights */}
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
          
          {/* Engineering Background */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1.5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-white font-bold text-xs">
              <GraduationCap className="w-4 h-4 text-slate-300" />
              <span>Academic & Technical Background</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              I am a final-year Bachelor of Engineering (Honours) student in Software Engineering at Macquarie University, graduating in November 2026. My focus centers on building resilient, scalable full-stack web applications, asynchronous backend API route gateways, and intuitive user interfaces.
            </p>
          </div>

          {/* Philosophy & Approach */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1.5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-white font-bold text-xs">
              <Compass className="w-4 h-4 text-slate-300" />
              <span>Engineering Philosophy</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              I believe software should be as resilient on the backend as it is polished on the frontend. Whether optimizing PostgreSQL queries under 45ms, designing modular React components, or configuring REST services, I prioritize clean abstractions, low latency, and user-centered design.
            </p>
          </div>

          {/* Leadership & Community */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1.5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-white font-bold text-xs">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Governance & Advocacy</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Beyond code, I serve as an elected Student Member on the Faculty of Science and Engineering Faculty Board at Macquarie University, participating in academic governance and advocating for student experience improvements. I was also awarded the G2G Women in STEM Scholarship (2024) for academic merit and STEM innovation potential.
            </p>
          </div>

          {/* Personal Pursuits */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1.5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-white font-bold text-xs">
              <Heart className="w-4 h-4 text-slate-300" />
              <span>Beyond the Screen</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding or debugging API routes, you can find me playing regular weekend badminton sessions, practicing reformer Pilates, or working on DIY textile crafting and design projects.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}