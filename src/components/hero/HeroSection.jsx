import React from 'react';
import { ArrowDown, Code2, ShieldCheck, Terminal, Sparkles } from 'lucide-react';

export default function HeroSection({ viewMode = 'recruiter', theme = 'dark' }) {
  const isDark = theme === 'dark';

  const headlines = {
    recruiter: {
      tag: "FULL-STACK & BACKEND SOFTWARE ENGINEER",
      titlePrefix: "Rohita Chidireddi",
      // highlight: "Chidireddi",
      desc: "Final-year Software Engineering (Honours) student at Macquarie University. Experienced in React, Express.js API gateways, Python backends, and cloud infrastructure."
    },
    engLead: {
      tag: "DISTRIBUTED SYSTEMS & API GATEWAYS",
      titlePrefix: "Sub-45ms latency, modular primitives & ",
      highlight: "resilient pipelines.",
      desc: "Focused on asynchronous route handling, PostgreSQL database query optimization, UDP command protocols, and clean component state trees."
    },
    overview: {
      tag: "SOFTWARE ENGINEERING PORTFOLIO",
      titlePrefix: "Interactive Apple-inspired ",
      highlight: "engineering showcase.",
      desc: "Explore end-to-end full-stack applications, real-time control systems, and technical deliverables tailored across multiple audience perspectives."
    }
  };

  const current = headlines[viewMode] || headlines.recruiter;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-4 flex flex-col items-center text-center space-y-8">
      
      {/* Top Perspective Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-mono font-semibold tracking-wider transition-all duration-500 shadow-lg ${
          isDark
            ? 'bg-black/60 border-white/15 text-slate-300 backdrop-blur-md shadow-black/80'
            : 'bg-white/80 border-black/15 text-slate-700 backdrop-blur-md shadow-slate-200/60'
        }`}
      >
        {viewMode === 'recruiter' && <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
        {viewMode === 'engLead' && <Terminal className="w-3.5 h-3.5 text-blue-400" />}
        {viewMode === 'overview' && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
        <span>{current.tag}</span>
      </div>

      {/* Styled Gradient Headline */}
      <h1
        className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl leading-[1.08] transition-colors duration-500 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {current.titlePrefix}
        <span className="bg-gradient-to-r from-slate-100 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
          {current.highlight}
        </span>
      </h1>

      {/* Description Body */}
      <p
        className={`text-sm sm:text-base max-w-2xl leading-relaxed font-sans transition-colors duration-500 ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {current.desc}
      </p>

      {/* Functional Smooth Scroll Button */}
      <div className="pt-4 flex items-center justify-center">
        <button
          onClick={handleScrollToProjects}
          title="Scroll to Featured Projects"
          className={`p-3 rounded-full border transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md ${
            isDark
              ? 'bg-black/60 border-white/15 text-slate-300 hover:text-white hover:border-white/30'
              : 'bg-white/80 border-black/15 text-slate-700 hover:text-slate-900 hover:border-black/30'
          }`}
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}