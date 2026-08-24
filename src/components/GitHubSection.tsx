"use client";

import React, { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink, Code2, Loader2 } from "lucide-react";
import { fetchGitHubProfile, fetchGitHubRepos } from "@/services/githubService";
import { GitHubProfile, GitHubRepo } from "@/types";

export const GitHubSection: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [profData, repoData] = await Promise.all([
        fetchGitHubProfile(),
        fetchGitHubRepos(),
      ]);
      setProfile(profData);
      setRepos(repoData);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <section id="github" className="py-20 bg-slate-100/70 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 w-full max-w-full overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8 w-full">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 text-xs font-mono border border-slate-300 dark:border-slate-700 max-w-full">
              <Github className="w-3.5 h-3.5 text-slate-900 dark:text-white shrink-0" />
              <span className="truncate">OPEN SOURCE &amp; REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              GitHub Ecosystem
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Public projects, open-source repositories, and code contributions by Velmurugan C (@VeluFi).
            </p>
          </div>

          {/* GitHub Stats Pill */}
          {profile && (
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 shrink-0 shadow-sm">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase">Public Repos</span>
                <span className="text-base font-bold text-sky-600 dark:text-sky-400">{profile.public_repos}</span>
              </div>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
              <div>
                <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase">Followers</span>
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{profile.followers}</span>
              </div>
            </div>
          )}
        </div>

        {/* Repositories Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-3 w-full">
            <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Fetching GitHub Repositories...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-white dark:bg-slate-900/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-4 group glass-card-hover w-full overflow-hidden shadow-sm"
              >
                <div className="space-y-3 w-full">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors truncate">
                      {repo.name}
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed break-words">
                    {repo.description || "Public repository showcasing code architecture and implementations."}
                  </p>

                  {/* Topics Badges */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span key={topic} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Info */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 text-sky-600 dark:text-sky-300 font-semibold">
                      <Code2 className="w-3.5 h-3.5 shrink-0" />
                      {repo.language}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-12 text-center w-full">
          <a
            href="https://github.com/VeluFi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors shadow-lg max-w-full"
          >
            <Github className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="truncate">View all GitHub repositories</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
