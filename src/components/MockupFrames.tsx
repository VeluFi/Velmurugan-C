import React from "react";
import { Smartphone, Globe, Shield, Activity, Layers, SmartphoneCharging, Cpu, Terminal } from "lucide-react";

interface MockupProps {
  type: "mobile" | "web" | "pwa";
  title: string;
  subtitle: string;
  technologies: string[];
}

export const ProjectMockup: React.FC<MockupProps> = ({ type, title, subtitle, technologies }) => {
  if (type === "mobile") {
    return (
      <div className="relative mx-auto w-full max-w-[280px] h-[360px] bg-slate-950 rounded-[38px] p-3 shadow-2xl border-4 border-slate-800/80 flex flex-col justify-between overflow-hidden group-hover:border-sky-500/40 transition-colors">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-xl z-20 flex items-center justify-center">
          <div className="w-10 h-1 bg-slate-800 rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950/40 rounded-[28px] pt-7 p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20" />
          
          {/* Header Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-semibold text-slate-200">{title}</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">Mobile OS</span>
          </div>

          {/* Core Feature Visual */}
          <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-lg shadow-sky-500/20 animate-pulse-slow">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Activity className="w-7 h-7 text-sky-400" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">{title}</h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 px-2">{subtitle}</p>
            </div>
          </div>

          {/* Tech Badges Row */}
          <div className="relative z-10 flex flex-wrap gap-1 justify-center pt-2 border-t border-slate-800/80">
            {technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-slate-700/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Web or PWA Browser Frame
  return (
    <div className="w-full h-[260px] bg-slate-950 rounded-xl border border-slate-800/80 overflow-hidden shadow-2xl flex flex-col group-hover:border-sky-500/40 transition-colors">
      {/* Browser Chrome Header */}
      <div className="w-full bg-slate-900/90 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 max-w-xs mx-3 bg-slate-950/80 border border-slate-800 rounded-md px-2 py-0.5 flex items-center text-[10px] text-slate-400 font-mono truncate">
          <Globe className="w-3 h-3 text-sky-400 mr-1.5 shrink-0" />
          <span className="truncate">{type === "pwa" ? "https://pwa.velmurugan.dev" : "https://enterprise.internal.app"}</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-emerald-400" />
        </div>
      </div>

      {/* Browser Body / Abstract UI */}
      <div className="flex-1 bg-slate-950 p-4 relative overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        
        {/* Mock Content Layout */}
        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
                {type === "pwa" ? <SmartphoneCharging className="w-4 h-4 text-sky-400" /> : <Cpu className="w-4 h-4 text-indigo-400" />}
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-200 block">{title}</span>
                <span className="text-[10px] text-slate-400">{type.toUpperCase()} Architecture</span>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              Online
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-1">
            <div className="h-12 rounded-lg bg-slate-900/80 border border-slate-800 p-2 flex flex-col justify-center">
              <span className="text-[9px] text-slate-400 uppercase font-mono">Status</span>
              <span className="text-[11px] font-bold text-sky-400">Production</span>
            </div>
            <div className="h-12 rounded-lg bg-slate-900/80 border border-slate-800 p-2 flex flex-col justify-center">
              <span className="text-[9px] text-slate-400 uppercase font-mono">API State</span>
              <span className="text-[11px] font-bold text-indigo-400">Integrated</span>
            </div>
            <div className="h-12 rounded-lg bg-slate-900/80 border border-slate-800 p-2 flex flex-col justify-center">
              <span className="text-[9px] text-slate-400 uppercase font-mono">Platform</span>
              <span className="text-[11px] font-bold text-emerald-400">Responsive</span>
            </div>
          </div>
        </div>

        {/* Footer Badges */}
        <div className="relative z-10 flex flex-wrap gap-1 pt-2 border-t border-slate-800/80">
          {technologies.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
