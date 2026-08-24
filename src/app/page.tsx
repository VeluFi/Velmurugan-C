import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GitHubSection } from "@/components/GitHubSection";
import { AskVelmuruganAI } from "@/components/AskVelmuruganAI";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <GitHubSection />
        <AskVelmuruganAI />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
