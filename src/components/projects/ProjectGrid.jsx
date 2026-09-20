import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../../data/projectsData';

export default function ProjectGrid({
  projects = PROJECTS_DATA,
  viewMode = 'recruiter',
  theme = 'dark',
  onProjectSelect
}) {
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="space-y-8 relative scroll-mt-28">
      {/* Grid Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b pb-6 border-white/10">
        <div>
          <span
            className={`text-[11px] font-mono font-bold tracking-widest uppercase ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            PORTFOLIO SHOWCASE
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Featured Engineering Work
          </h2>
        </div>

        <p
          className={`text-xs max-w-md ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Select any card to inspect system architectures, live API route gateway logic, and technical deliverables.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id || project.title}
            project={project}
            viewMode={viewMode}
            theme={theme}
            onClick={() => onProjectSelect && onProjectSelect(project)}
          />
        ))}
      </div>
    </section>
  );
}