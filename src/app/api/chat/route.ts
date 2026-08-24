import { NextRequest, NextResponse } from "next/server";
import { profileData } from "@/data/profile-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query: string = body.query || "";
    const normalized = query.toLowerCase().trim();

    // Check knowledge base entries
    for (const item of profileData.aiKnowledgeBase) {
      if (item.keywords.some((kw) => normalized.includes(kw))) {
        return NextResponse.json({
          message: item.answer,
          suggestedQuestions: [
            "Tell me about Chola PRO.",
            "What is his Next.js experience?",
            "What mobile applications has he worked on?",
            "What is his experience with Flutter?",
          ],
        });
      }
    }

    return NextResponse.json({
      message:
        "Velmurugan C is a Software Developer at Cholamandalam Investment and Finance Company Limited specializing in Flutter, Next.js, Native Android, and PWA development.",
      suggestedQuestions: [
        "Tell me about Chola PRO.",
        "What is his Next.js experience?",
        "What mobile applications has he worked on?",
      ],
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
