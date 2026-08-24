import React from "react";
import { Cpu, Layout, Smartphone, Layers, Server, Wrench } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Layout,
      color: "from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/30",
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-indigo-500/20 to-purple-500/10 text-indigo-400 border-indigo-500/30",
      skills: ["Flutter", "Dart", "Native Android", "Java", "Kotlin"],
    },
    {
      category: "Cross Platform",
      icon: Layers,
      color: "from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30",
      skills: [
        "Progressive Web Applications (PWA)",
        "Responsive Web Applications",
        "Cross-platform Applications",
      ],
    },
    {
      category: "Backend / Integration",
      icon: Server,
      color: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
      skills: ["REST APIs", "API Integration", "Authentication", "JSON", "HTTP APIs"],
    },
    {
      category: "Development Tools",
      icon: Wrench,
      color: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vitest"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono border border-indigo-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern frameworks, languages, and development tools utilized in building production applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} border flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{cat.category}</h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                  <span>{cat.skills.length} Technologies</span>
                  <span className="text-sky-400">Verified Skills</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
