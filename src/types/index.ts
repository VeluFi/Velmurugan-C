export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  technologies: string[];
  category: "mobile" | "web" | "pwa";
  highlights: string[];
  link?: string;
  buttonText?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  keyAreas: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
  location?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export interface GitHubProfile {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
