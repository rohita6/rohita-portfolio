import React, { useState } from 'react';
import { Terminal, Code, Cpu, Database, Wrench, Layers } from 'lucide-react';

const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Stack' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks & Libs' },
  { id: 'tools', label: 'Developer Tools' },
  { id: 'databases', label: 'Databases & Cloud' }
];

const SKILLS_DATA = [
  // Languages
  { name: 'JavaScript (ES6+)', category: 'languages', level: 'Advanced', icon: Code },
  { name: 'TypeScript', category: 'languages', level: 'Intermediate', icon: Code },
  { name: 'Python', category: 'languages', level: 'Advanced', icon: Code },
  { name: 'Java', category: 'languages', level: 'Intermediate', icon: Code },
  { name: 'C', category: 'languages', level: 'Academic', icon: Code },
  { name: 'SQL', category: 'languages', level: 'Advanced', icon: Database },

  // Frameworks & Libraries
  { name: 'React 19', category: 'frameworks', level: 'Advanced', icon: Layers },
  { name: 'Next.js', category: 'frameworks', level: 'Intermediate', icon: Layers },
  { name: 'Express.js', category: 'frameworks', level: 'Advanced', icon: Cpu },
  { name: 'Node.js', category: 'frameworks', level: 'Advanced', icon: Cpu },
  { name: 'Tailwind CSS v4', category: 'frameworks', level: 'Advanced', icon: Layers },
  { name: 'Bootstrap', category: 'frameworks', level: 'Intermediate', icon: Layers },

  // Developer Tools
  { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: Wrench },
  { name: 'VS Code', category: 'tools', level: 'Advanced', icon: Wrench },
  { name: 'Docker', category: 'tools', level: 'Intermediate', icon: Wrench },
  { name: 'Figma', category: 'tools', level: 'Intermediate', icon: Wrench },
  { name: 'Homebrew', category: 'tools', level: 'Intermediate', icon: Wrench },

  // Databases & Cloud
  { name: 'PostgreSQL', category: 'databases', level: 'Advanced', icon: Database },
  { name: 'Supabase', category: 'databases', level: 'Advanced', icon: Database },
  { name: 'AWS (EC2/S3)', category: 'databases', level: 'Intermediate', icon: Database }
];

export default function TechSpecs({ theme = 'dark' }) {
  const [activeTab, setActiveTab] = useState('all');
  const isDark = theme === 'dark';

  const filteredSkills = activeTab === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === activeTab);

  return (
    <section className="space-y-8 relative">
      {/* Header + Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-6 border-white/10">
        <div>
          <span
            className={`text-[11px] font-mono font-bold tracking-widest uppercase ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            SYSTEM CAPABILITIES
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical Stack & Tooling
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div
          className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl border text-xs transition-colors duration-500 ${
            isDark ? 'bg-black/60 border-white/10' : 'bg-white/80 border-black/10 shadow-sm'
          }`}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 py-1.5 rounded-xl transition-all text-xs font-medium ${
                activeTab === cat.id
                  ? isDark
                    ? 'bg-white text-black shadow-lg font-bold'
                    : 'bg-slate-900 text-white shadow-lg font-bold'
                  : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {filteredSkills.map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={i}
              className={`p-4 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between h-28 ${
                isDark
                  ? 'bg-zinc-950/80 border-white/10 hover:border-white/25 hover:shadow-xl'
                  : 'bg-white/80 border-black/10 hover:border-black/20 hover:shadow-lg shadow-slate-200/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <IconComponent
                  className={`w-4 h-4 transition-colors ${
                    isDark
                      ? 'text-slate-400 group-hover:text-white'
                      : 'text-slate-500 group-hover:text-slate-900'
                  }`}
                />
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-slate-400'
                      : 'bg-black/5 border-black/10 text-slate-600'
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              <div>
                <p
                  className={`text-xs font-bold font-mono tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}