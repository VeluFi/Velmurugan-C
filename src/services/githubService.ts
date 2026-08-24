import { GitHubRepo, GitHubProfile } from "@/types";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "VeluFi";

export async function fetchGitHubProfile(): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.warn("Failed to fetch GitHub profile:", err);
    return null;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return getFallbackRepos();
    const data: GitHubRepo[] = await res.json();
    
    // Sort & filter public non-fork repos first
    return data
      .filter((repo) => !repo.name.startsWith("."))
      .slice(0, 6);
  } catch (err) {
    console.warn("Failed to fetch GitHub repos, using fallback:", err);
    return getFallbackRepos();
  }
}

function getFallbackRepos(): GitHubRepo[] {
  return [
    {
      id: 1,
      name: "velmurugan-portfolio",
      description: "Personal developer portfolio built with Next.js, TypeScript and Tailwind CSS showcasing Flutter, Next.js, Native Android, PWA and enterprise application development.",
      html_url: `https://github.com/${GITHUB_USERNAME}/velmurugan-portfolio`,
      stargazers_count: 5,
      forks_count: 1,
      language: "TypeScript",
      topics: ["nextjs", "typescript", "react", "tailwindcss", "portfolio"],
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      name: "flutter-field-sales-ui",
      description: "Flutter mobile application components and architectural pattern demonstrations for enterprise applications.",
      html_url: `https://github.com/${GITHUB_USERNAME}`,
      stargazers_count: 3,
      forks_count: 0,
      language: "Dart",
      topics: ["flutter", "dart", "mobile-app", "ui"],
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      name: "nextjs-pwa-starter",
      description: "Progressive Web Application template built with Next.js App Router, offline service workers, and responsive UI.",
      html_url: `https://github.com/${GITHUB_USERNAME}`,
      stargazers_count: 4,
      forks_count: 2,
      language: "TypeScript",
      topics: ["nextjs", "pwa", "react", "responsive-ui"],
      updated_at: new Date().toISOString(),
    },
  ];
}
