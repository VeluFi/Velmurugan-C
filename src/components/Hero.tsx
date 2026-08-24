"use client";

import React from "react";
import { ArrowRight, Github, Linkedin, FileText, MapPin, Building2, Terminal, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile-data";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Orbs & Grid Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Software Developer at <strong className="text-white">{profileData.company}</strong></span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                {profileData.name}
              </h1>
              <div className="text-xl sm:text-2xl font-bold text-gradient flex items-center gap-2">
                <span>{profileData.title}</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-300 text-lg font-mono">Flutter · Next.js · Native Android · PWA</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Building modern mobile, web and cross-platform applications with a focus on scalable enterprise solutions and great user experiences.
            </p>

            {/* Key Stack Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Flutter", "Next.js", "React", "TypeScript", "Native Android", "PWA", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900 border border-slate-800 text-sky-300 flex items-center gap-1.5"
                >
                  <Code2 className="w-3 h-3 text-sky-400" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Location & Organization meta */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" /> {profileData.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Production Experience
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium text-sm transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium text-sm transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-sky-400" /> LinkedIn
              </a>

              <a
                href="#resume"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-400" /> Download Resume
              </a>
            </div>
          </div>

          {/* Right Column: Animated Terminal Visual */}
          <div className="lg:col-span-5 relative">
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
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-sky-300">developer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
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
                  <div className="pl-4 text-sky-300">
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
