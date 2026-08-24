import { ChatMessage } from "@/types";
import { profileData } from "@/data/profile-data";

export interface AIServiceResponse {
  message: string;
  suggestedQuestions?: string[];
}

/**
 * AI Assistant Service for Velmurugan C Portfolio.
 * Implements local intelligent knowledge-matching fallback with clean structure
 * to plug into Dify, Ollama, or OpenAI-compatible LLM endpoints via environment variables.
 */
export async function sendMessageToAI(
  userQuery: string,
  chatHistory: ChatMessage[] = []
): Promise<AIServiceResponse> {
  const customEndpoint = process.env.NEXT_PUBLIC_AI_API_URL;

  // If custom API endpoint is configured, invoke server API route
  if (customEndpoint) {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userQuery, history: chatHistory }),
      });
      if (response.ok) {
        const data = await response.json();
        return { message: data.message, suggestedQuestions: data.suggestedQuestions };
      }
    } catch (err) {
      console.warn("External AI endpoint unreachable, falling back to local knowledge engine", err);
    }
  }

  // Local Knowledge Matching Engine based strictly on public profile data
  const normalizedQuery = userQuery.toLowerCase().trim();

  // Match knowledge base entries
  for (const item of profileData.aiKnowledgeBase) {
    if (item.keywords.some((kw) => normalizedQuery.includes(kw))) {
      return {
        message: item.answer,
        suggestedQuestions: getSuggestedQuestions(normalizedQuery),
      };
    }
  }

  // General questions or greetings
  if (
    normalizedQuery.includes("hello") ||
    normalizedQuery.includes("hi") ||
    normalizedQuery.includes("hey") ||
    normalizedQuery.includes("who are you")
  ) {
    return {
      message:
        "Hello! I am Velmurugan C's AI Assistant. I can answer questions about his software engineering experience at Cholamandalam, key projects like Chola PRO & Kyber Office, technical skills (Flutter, Next.js, Native Android, PWA), and education.",
      suggestedQuestions: [
        "What technologies does Velmurugan work with?",
        "Tell me about Chola PRO.",
        "What is his Next.js experience?",
        "What mobile applications has he worked on?",
      ],
    };
  }

  // Default professional summary fallback response
  return {
    message: `Velmurugan C is a Software Developer at ${profileData.company} specializing in Flutter, Next.js, React, TypeScript, Native Android, and Progressive Web Applications. Feel free to ask about his projects (Chola PRO, Kyber Office, Hiddy), technical skills, or education!`,
    suggestedQuestions: [
      "Tell me about Chola PRO.",
      "What is his experience with Flutter?",
      "What type of enterprise applications has he built?",
      "How can I contact Velmurugan?",
    ],
  };
}

function getSuggestedQuestions(currentQuery: string): string[] {
  const defaultPrompts = [
    "What technologies does Velmurugan work with?",
    "Tell me about Chola PRO.",
    "What is his Next.js experience?",
    "What mobile applications has he worked on?",
    "What is his experience with Flutter?",
    "What type of enterprise applications has he built?",
  ];

  return defaultPrompts.filter(
    (p) => !p.toLowerCase().includes(currentQuery.substring(0, 10))
  ).slice(0, 4);
}
