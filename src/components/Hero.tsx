"use client";

import React from "react";
import { ArrowRight, Github, Linkedin, FileText, MapPin, Building2, Terminal, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile-data";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden w-full max-w-full">
      {/* Glow Orbs Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-64 h-64 sm:w-[350px] sm:h-[350px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 dark:opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-300 shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <Building2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span className="truncate">Software Developer at <strong className="text-slate-900 dark:text-white font-bold">{profileData.company}</strong></span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
                {profileData.name}
              </h1>
              <div className="text-lg sm:text-2xl font-bold text-gradient flex flex-wrap items-center gap-2">
                <span>{profileData.title}</span>
                <span className="hidden sm:inline text-slate-400">|</span>
                <span className="text-slate-700 dark:text-slate-300 text-sm sm:text-lg font-mono block w-full sm:w-auto">
                  Flutter · Next.js · Native Android · PWA
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              Building modern mobile, web and cross-platform applications with a focus on scalable enterprise solutions and great user experiences.
            </p>

            {/* Key Stack Quick Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {["Flutter", "Next.js", "React", "TypeScript", "Native Android", "PWA", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-sky-300 shadow-sm flex items-center gap-1.5"
                >
                  <Code2 className="w-3 h-3 text-sky-500" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Location & Organization meta */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 dark:text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" /> {profileData.location}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-slate-800 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Production Experience
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-sky-500" /> LinkedIn
              </a>

              <a
                href="#resume"
                className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-amber-500" /> Download Resume
              </a>
            </div>
          </div>

          {/* Right Column: Animated Terminal Visual */}
          <div className="lg:col-span-5 relative w-full max-w-full overflow-hidden">
            <div className="w-full bg-slate-950 rounded-2xl border border-slate-800/90 shadow-2xl overflow-hidden glass-card">
              {/* Terminal Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>velmurugan.config.ts</span>
                </div>
                <Sparkles className="w-4 h-4 text-sky-400" />
              </div>

              {/* Code Snippet Body */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 space-y-3 leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-sky-300">developer</span> = &#123;
                </div>
                <div className="pl-3 sm:pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">&quot;Velmurugan C&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-300">&quot;Software Developer&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">company:</span>{" "}
                    <span className="text-emerald-300">&quot;Cholamandalam Investment&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">focus:</span> [
                  </div>
                  <div className="pl-3 sm:pl-4 text-sky-300">
                    &quot;Flutter Mobile Apps&quot;,<br />
                    &quot;Next.js &amp; React Enterprise Web&quot;,<br />
                    &quot;Native Android Applications&quot;,<br />
                    &quot;Progressive Web Apps (PWA)&quot;
                  </div>
                  <div>],</div>
                  <div>
                    <span className="text-slate-400">location:</span>{" "}
                    <span className="text-emerald-300">&quot;Chennai, India&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-amber-300">&quot;Building Scalable Solutions&quot;</span>
                  </div>
                </div>
                <div>&#125;;</div>

                <div className="pt-2 border-t border-slate-800 text-slate-400 text-[11px] flex items-center justify-between">
                  <span>// Ready to innovate</span>
                  <span className="text-emerald-400 font-mono">100% Production Ready</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
