"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { profileData } from "@/data/profile-data";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interested in working together or discussing a project? Feel free to connect with me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Connect Badges */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all flex items-center gap-4 group glass-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Professional Profile</span>
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">LinkedIn</h3>
                <p className="text-xs text-slate-400">linkedin.com/in/velmurugan-c-32a2a3131</p>
              </div>
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all flex items-center gap-4 group glass-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Code &amp; Projects</span>
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">GitHub</h3>
                <p className="text-xs text-slate-400">github.com/VeluFi</p>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Location</span>
                <h3 className="text-base font-bold text-white">{profileData.location}</h3>
                <p className="text-xs text-slate-400">Cholamandalam Investment and Finance Company Limited</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
            
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Message Sent Successfully</h4>
                <p className="text-xs text-slate-300">Thank you for reaching out! I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Velmurugan, I'd like to discuss a project..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
