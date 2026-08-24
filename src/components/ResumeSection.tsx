"use client";

import React, { useState } from "react";
import { FileText, Download, Eye, X, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";
import { profileData } from "@/data/profile-data";

export const ResumeSection: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handleDownload = () => {
    const resumeUrl = "/resume/velmurugan-resume.pdf";

    fetch(resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          const a = document.createElement("a");
          a.href = resumeUrl;
          a.download = "Velmurugan_C_Software_Developer_Resume.pdf";
          a.click();
        } else {
          setShowPreviewModal(true);
        }
      })
      .catch(() => {
        setShowPreviewModal(true);
      });
  };

  return (
    <section id="resume" className="py-20 bg-slate-100/80 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-sky-950/50 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-xl text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono border border-amber-500/20">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Resume
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              Download my resume to learn more about my professional experience, technical skills and projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10">
            <button
              onClick={handleDownload}
              className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => setShowPreviewModal(true)}
              className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium text-sm transition-colors border border-slate-200 dark:border-slate-700 flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-sky-500 dark:text-sky-400" />
              <span>Preview Resume</span>
            </button>
          </div>
        </div>

        {/* Modal Resume Preview */}
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-900 dark:text-slate-100">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{profileData.name}</h3>
                <p className="text-sky-600 dark:text-sky-400 text-sm font-semibold">{profileData.title} | {profileData.company}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">{profileData.location} • {profileData.github} • {profileData.linkedin}</p>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Professional Summary</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  {profileData.summary}
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" /> Experience
                </h4>
                {profileData.experience.map((exp, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                      <span>{exp.role} - {exp.company}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono">{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1 text-[11px]">
                      {exp.responsibilities.map((r, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> {r}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education & Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" /> Education
                  </h4>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{profileData.education[0].degree}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{profileData.education[0].institution}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Key Technologies
                  </h4>
                  <p className="text-xs text-sky-600 dark:text-sky-300 font-mono">
                    Flutter, Next.js, React, TypeScript, Native Android, PWA, REST APIs
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs hover:bg-sky-400"
                >
                  Print / Save PDF
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
