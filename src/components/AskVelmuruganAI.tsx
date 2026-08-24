"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, Send, Sparkles, User, Loader2, RefreshCw } from "lucide-react";
import { sendMessageToAI } from "@/services/aiService";
import { ChatMessage } from "@/types";

export const AskVelmuruganAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init-1",
      role: "assistant",
      content:
        "Hello! I am Velmurugan C's AI Assistant. Ask me anything about his software development experience at Cholamandalam, Flutter mobile apps (Chola PRO), Next.js web applications (Kyber Office), Native Android work (Hiddy, Joysale, GaadiBazaar, Turbo Catalogue), or technical skills!",
      timestamp: "Just now",
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestedChips, setSuggestedChips] = useState<string[]>([
    "What technologies does Velmurugan work with?",
    "Tell me about Chola PRO.",
    "What is his Next.js experience?",
    "What mobile applications has he worked on?",
    "What is his experience with Flutter?",
    "Tell me about GaadiBazaar & Joysale.",
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getClientTimestamp = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (queryToSend?: string) => {
    const text = queryToSend || inputQuery;
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: getClientTimestamp(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryToSend) setInputQuery("");
    setLoading(true);

    try {
      const response = await sendMessageToAI(text, messages);
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.message,
        timestamp: getClientTimestamp(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      if (response.suggestedQuestions) {
        setSuggestedChips(response.suggestedQuestions);
      }
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Apologies, I encountered an issue processing your request. Please try again or ask another question about Velmurugan's background.",
        timestamp: getClientTimestamp(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ask-ai" className="py-20 bg-slate-50 dark:bg-slate-950 w-full max-w-full overflow-hidden transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE ASSISTANT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ask Velmurugan AI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Have a question about my experience, projects or technical skills?
          </p>
        </div>

        {/* ChatGPT Style Container */}
        <div className="bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden glass-card flex flex-col h-[520px] w-full">
          
          {/* Chat Header Bar */}
          <div className="bg-slate-100 dark:bg-slate-950/90 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Velmurugan Portfolio Bot
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Knowledge Base Assistant</span>
              </div>
            </div>
            <button
              onClick={() =>
                setMessages([
                  {
                    id: "init-1",
                    role: "assistant",
                    content:
                      "Hello! I am Velmurugan C's AI Assistant. Ask me anything about his software development experience at Cholamandalam, Flutter mobile apps (Chola PRO), Next.js web applications (Kyber Office), Native Android work (Hiddy, Joysale, GaadiBazaar, Turbo Catalogue), or technical skills!",
                    timestamp: "Just now",
                  },
                ])
              }
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 font-mono transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-sky-600 text-white rounded-br-none shadow-md"
                      : "bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="break-words">{msg.content}</p>
                  <span
                    className={`text-[10px] block mt-1.5 text-right font-mono ${
                      msg.role === "user" ? "text-sky-100" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-bl-none p-4 text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-purple-600 dark:text-purple-400" />
                  <span className="font-mono text-xs">Analyzing portfolio knowledge base...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompt Chips */}
          <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 shrink-0 uppercase">Suggested:</span>
            {suggestedChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                disabled={loading}
                className="text-[11px] font-mono px-3 py-1 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-sky-600 dark:text-sky-300 border border-slate-200 dark:border-slate-800 whitespace-nowrap transition-colors shrink-0 disabled:opacity-50 shadow-sm"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about Velmurugan's experience, skills, or projects..."
              disabled={loading}
              className="flex-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !inputQuery.trim()}
              className="px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0 shadow-lg shadow-purple-600/20"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
