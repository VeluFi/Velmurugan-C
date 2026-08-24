import React from "react";
import { FolderGit2, ExternalLink, ShieldAlert, Smartphone, Globe, Layers, ArrowUpRight } from "lucide-react";
import { ProjectMockup } from "./MockupFrames";

export interface ProjectData {
  id: string;
  name: string;
  type: string;
  category: "mobile" | "web" | "pwa";
  technologies: string[];
  description: string;
  link?: string;
  buttonText?: string;
  isPrivate?: boolean;
  privacyNotice?: string;
}

export const ProjectsSection: React.FC = () => {
  const projects: ProjectData[] = [
    {
      id: "chola-pro",
      name: "Chola PRO",
      type: "Flutter Mobile Application",
      category: "mobile",
      technologies: ["Flutter", "Dart", "REST APIs", "Mobile UI"],
      description: "Production mobile application built using Flutter for Chola's field-sales ecosystem.",
      link: "https://play.google.com/store/apps/details?id=com.gb.cholafsa&hl=en_IN",
      buttonText: "View on Google Play",
    },
    {
      id: "kyber-office",
      name: "Kyber Office",
      type: "Enterprise Web Application",
      category: "web",
      technologies: ["Next.js", "React", "TypeScript", "REST APIs", "Responsive UI"],
      description: "Enterprise web application for managing cases, verification workflows, progress tracking and operational decisions.",
      link: "https://office.kyberai.in/",
      buttonText: "View Application",
      isPrivate: true,
      privacyNotice: "Enterprise Production Application. Internal source code and architecture are private.",
    },
    {
      id: "hiddy",
      name: "Hiddy",
      type: "Native Android Application",
      category: "mobile",
      technologies: ["Native Android", "Java/Kotlin", "REST APIs", "Android UI"],
      description: "Native Android application demonstrating mobile application development, UI implementation, API integration and Android platform capabilities.",
      link: "https://play.google.com/store/apps/details?id=com.hitasoft.app.hiddy&hl=en_IN",
      buttonText: "View on Google Play",
    },
    {
      id: "pwa-app",
      name: "Progressive Web Application",
      type: "Next.js + PWA",
      category: "pwa",
      technologies: ["Next.js", "React", "TypeScript", "PWA", "Responsive UI", "REST APIs"],
      description: "Progressive Web Application designed to provide an app-like experience across desktop, tablet and mobile platforms.",
      link: "https://github.com/VeluFi",
      buttonText: "Explore Architecture",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono border border-sky-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION &amp; FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            High-impact mobile, web, and enterprise solutions engineered with modern cross-platform stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 glass-card-hover"
            >
              {/* Mockup Display */}
              <div className="w-full py-4 flex items-center justify-center bg-slate-950/60 rounded-2xl border border-slate-800/80">
                <ProjectMockup
                  type={project.category}
                  title={project.name}
                  subtitle={project.description}
                  technologies={project.technologies}
                />
              </div>

              {/* Text Info & Badges */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 inline-block mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.name}</h3>
                  </div>
                  {project.isPrivate && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 shrink-0">
                      <ShieldAlert className="w-3 h-3 text-amber-400" /> Enterprise Private
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.privacyNotice && (
                  <p className="text-[11px] text-slate-400 italic pt-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {project.privacyNotice}
                  </p>
                )}
              </div>

              {/* Action Button */}
              {project.link && (
                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-slate-950 font-semibold text-xs transition-colors border border-sky-500/20"
                  >
                    <span>{project.buttonText || "View Project"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
