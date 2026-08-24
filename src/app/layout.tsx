import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velmurugan-c.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Velmurugan C | Software Developer | Flutter | Next.js | Android",
  description:
    "Velmurugan C is a Software Developer specializing in Flutter, Next.js, Native Android, PWA and modern enterprise application development.",
  keywords: [
    "Velmurugan C",
    "Software Developer",
    "Flutter Developer",
    "Next.js Developer",
    "React Developer",
    "Native Android",
    "PWA",
    "TypeScript",
    "Cholamandalam",
    "Chennai India",
    "Portfolio",
  ],
  authors: [{ name: "Velmurugan C", url: "https://github.com/VeluFi" }],
  openGraph: {
    title: "Velmurugan C | Software Developer",
    description:
      "Software Developer specializing in building modern web, mobile, and cross-platform applications with Flutter, Next.js, Native Android, and PWA.",
    url: siteUrl,
    siteName: "Velmurugan C Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Velmurugan C - Software Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velmurugan C | Software Developer",
    description:
      "Building modern mobile, web and cross-platform applications with Flutter, Next.js, Native Android, and PWA.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
