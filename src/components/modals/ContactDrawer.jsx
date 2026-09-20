import React, { useState } from 'react';
import { X, Mail, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export default function ContactDrawer({ onClose }) {
  const [copied, setCopied] = useState(false);
  const email = "rohita.chidireddi6@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0a0a12] border border-white/15 p-6 sm:p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-1">Let's Connect</h3>
        <p className="text-xs text-white/50 mb-6">
          Open to full-time software roles, engineering discussions, and collaborations.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90">
            <span className="truncate">{email}</span>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 transition-colors flex items-center gap-1 text-[11px]"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://github.com/rohita6"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rohita-chidireddi/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}