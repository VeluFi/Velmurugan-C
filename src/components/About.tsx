import React from "react";
import { User, Building2, Code2, Smartphone, Globe2, ShieldCheck } from "lucide-react";
import { profileData } from "@/data/profile-data";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100/70 dark:bg-slate-950/60 border-y border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-mono border border-sky-500/20">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; POSITIONING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Software Developer building robust web, mobile, and enterprise cross-platform solutions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story & Position */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              <p>
                I am a <strong className="text-slate-900 dark:text-white">Software Developer</strong> focused on building reliable and user-friendly applications across web and mobile platforms. My experience includes Flutter mobile development, Native Android development, and modern web application development using Next.js, React and TypeScript.
              </p>
              <p>
                I enjoy working on production applications, solving engineering problems, integrating APIs, improving user experiences and building scalable frontend solutions.
              </p>
            </div>

            {/* Current Organization Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider block">Current Role &amp; Organization</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{profileData.title}</h3>
                <p className="text-sm text-sky-600 dark:text-sky-300 font-medium">{profileData.company}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{profileData.location}</p>
              </div>
            </div>
          </div>

          {/* Quick Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 space-y-2 flex flex-col justify-center hover:border-sky-500/30 transition-colors shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Cross-Platform &amp; Mobile</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Flutter &amp; Native Android applications engineered for performance and scalability.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 space-y-2 flex flex-col justify-center hover:border-sky-500/30 transition-colors shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Next.js &amp; Web</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Modern web portals, Progressive Web Apps (PWA), and React ecosystem architecture.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 space-y-2 flex flex-col justify-center hover:border-sky-500/30 transition-colors shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">API Integration</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">REST APIs, JSON payloads, authentication workflows, and robust state management.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 space-y-2 flex flex-col justify-center hover:border-sky-500/30 transition-colors shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Enterprise Standards</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Production-ready solutions built with clean code, testing, and Git workflows.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
