import React from 'react';
import { X, Eye } from 'lucide-react';

export default function ViewModeExplainer({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0a0a12] border border-white/15 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Role View Modes</h3>
            <p className="text-xs text-white/50">Tailored perspectives for different audiences</p>
          </div>
        </div>

        <div className="space-y-3 mb-6 text-xs text-white/80 leading-relaxed">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="font-semibold text-purple-300 block mb-0.5">Recruiter Mode</span>
            Highlights degree timelines, core stack proficiencies, measurable project outcomes, and high-level deliverables for fast screening.
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="font-semibold text-purple-300 block mb-0.5">Eng Lead Mode</span>
            Focuses on API route architecture, database selection, microservice design, state management choices, and algorithmic logic.
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="font-semibold text-purple-300 block mb-0.5">Overview Mode</span>
            Presents clean, human-centered problem & solution storytelling with intuitive UI/UX highlights.
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-all shadow-lg shadow-purple-600/30"
        >
          Got It
        </button>
      </div>
    </div>
  );
}