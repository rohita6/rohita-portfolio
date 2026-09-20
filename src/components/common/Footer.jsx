import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ theme = 'dark', onOpenResume, onOpenContact }) {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`border-t py-12 px-4 transition-colors duration-500 ${
        isDark
          ? 'border-white/10 bg-[#030306] text-white/50'
          : 'border-black/10 bg-[#f8f9fc] text-slate-500'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        
        <div>
          <p className={`font-medium ${isDark ? 'text-white/80' : 'text-slate-800'}`}>
            Rohita Chidireddi
          </p>
          <p className="mt-1">Software Engineer • Macquarie University</p>
        </div>

        <div className="flex items-center gap-4">
          {/* <button 
            onClick={onOpenResume} 
            className={`transition-colors flex items-center gap-1 ${
              isDark ? 'hover:text-white' : 'hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Resume
          </button>
          <button 
            onClick={onOpenContact} 
            className={`transition-colors flex items-center gap-1 ${
              isDark ? 'hover:text-white' : 'hover:text-slate-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" /> Contact
          </button> */}
          
          <a
            href="https://github.com/rohita6"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className={`transition-colors ${
              isDark ? 'hover:text-white' : 'hover:text-slate-900'
            }`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          
          <a
            href="https://linkedin.com/in/rohita-chidireddi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className={`transition-colors ${
              isDark ? 'hover:text-white' : 'hover:text-slate-900'
            }`}
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Rohita Chidireddi. Designed for impact.</p>

      </div>
    </footer>
  );
}