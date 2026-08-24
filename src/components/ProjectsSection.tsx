import React from "react";
import { FolderGit2, ArrowUpRight, ShieldAlert } from "lucide-react";
import { ProjectMockup } from "./MockupFrames";
import { profileData } from "@/data/profile-data";

export const ProjectsSection: React.FC = () => {
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
            High-impact mobile, web, and enterprise applications engineered across Flutter, Native Android, and Next.js stacks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profileData.projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 glass-card-hover"
            >
              {/* Mockup Display */}
              <div className="w-full py-4 flex items-center justify-center bg-slate-950/60 rounded-2xl border border-slate-800/80">
                <ProjectMockup
                  type={project.category}
                  title={project.title}
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
                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
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
