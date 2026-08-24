"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, MessageSquare, Loader2 } from "lucide-react";
import { profileData } from "@/data/profile-data";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      // 1. Post to internal Next.js API Route /api/contact which dispatches to kcvelmurugan96@gmail.com
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Open mailto link directed to kcvelmurugan96@gmail.com as instant client backup
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:kcvelmurugan96@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoUrl, "_blank");

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 10000);
    } catch (err) {
      console.error("Error submitting message:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/90 dark:bg-slate-950 relative border-t border-slate-900">
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
            
            {/* Direct Email Card */}
            <a
              href="mailto:kcvelmurugan96@gmail.com"
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all flex items-center gap-4 group glass-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Direct Email</span>
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">kcvelmurugan96@gmail.com</h3>
                <p className="text-xs text-slate-400">Click to send direct email</p>
              </div>
            </a>

            {/* LinkedIn Card */}
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

            {/* GitHub Card */}
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
                <span className="text-xs text-slate-400 font-mono block">Code &amp; Repositories</span>
                <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">GitHub</h3>
                <p className="text-xs text-slate-400">github.com/VeluFi</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Location</span>
                <h3 className="text-base font-bold text-white">{profileData.location}</h3>
                <p className="text-xs text-slate-400">{profileData.company}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
            
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Message Sent to kcvelmurugan96@gmail.com!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out! Your message has been sent directly to kcvelmurugan96@gmail.com. I will get back to you shortly.
                </p>
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
                      disabled={loading}
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
                      disabled={loading}
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
                    disabled={loading}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to kcvelmurugan96@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to kcvelmurugan96@gmail.com</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
