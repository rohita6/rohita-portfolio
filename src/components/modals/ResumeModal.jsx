import React from 'react';
import { X, Download, FileText } from 'lucide-react';

export default function ResumeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0a0a12] border border-white/15 p-6 sm:p-8 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <FileText className="w-6 h-6" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">
              Software Engineer Resume
            </h3>
            <p className="text-xs text-white/50">
              Rohita Chidireddi • Updated 2026
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-white/70 mb-6 leading-relaxed">
          Comprehensive overview of software engineering coursework,
          backend/frontend internships, system architecture projects,
          and core technical proficiencies.
        </p>

        {/* Download Button */}
        <div className="flex items-center">
          <a
            href="/Rohita Chidireddi-Resume.pdf"
            download
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-lg shadow-blue-600/30"
          >
            <Download className="w-4 h-4" />
            Download Resume PDF
          </a>
        </div>

      </div>
    </div>
  );
}