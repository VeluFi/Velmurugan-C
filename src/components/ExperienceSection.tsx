import React from "react";
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, GraduationCap, Award } from "lucide-react";
import { profileData } from "@/data/profile-data";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono border border-sky-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience &amp; Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven track record in enterprise application engineering and strong academic foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Building2 className="w-5 h-5 text-sky-400" />
              <span>Professional Experience</span>
            </h3>

            {profileData.experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 space-y-4"
              >
                {/* Timeline Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-950 shadow-md shadow-sky-500/50" />

                <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight">{exp.role}</h4>
                      <p className="text-sm font-semibold text-sky-400 mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" /> {exp.location}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm italic">{exp.description}</p>

                  {/* Key Areas List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Core Responsibilities &amp; Practice:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education Card */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <span>Education</span>
            </h3>

            {profileData.education.map((edu, eduIdx) => (
              <div
                key={eduIdx}
                className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 space-y-4 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-indigo-400 font-semibold block uppercase">Postgraduate Degree</span>
                  <h4 className="text-lg font-bold text-white leading-snug">{edu.degree}</h4>
                  <p className="text-sm text-slate-300 pt-1">{edu.institution}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                  <span>Verified Qualification</span>
                  <span className="text-emerald-400">Completed</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
