import React from "react";
import { Github, Linkedin, Terminal } from "lucide-react";
import { profileData } from "@/data/profile-data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-base">
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>Velmurugan C</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            &copy; 2026 Velmurugan C. All rights reserved.
          </p>
        </div>

        {/* Built with Next.js Badge */}
        <div className="text-xs font-mono text-slate-400 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Built with Next.js</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
          >
            <Linkedin className="w-5 h-5 text-sky-400" />
          </a>
        </div>

      </div>
    </footer>
  );
};
