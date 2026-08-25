import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const siteUrl = "https://velmurugan-c.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Velmurugan C | Software Developer | Flutter, Next.js & Android",
  description:
    "Velmurugan C is a Software Developer specializing in Flutter, Next.js, React, Native Android and Progressive Web App development.",
  keywords: [
    "Velmurugan C",
    "Velmurugan Developer",
    "Velmurugan Software Developer",
    "Velmurugan Flutter Developer",
    "Velmurugan Next.js Developer",
    "Velmurugan React Developer",
    "Velmurugan Android Developer",
    "Velmurugan PWA Developer",
    "Software Developer",
    "Flutter Developer",
    "Next.js Developer",
    "React Developer",
    "Native Android Developer",
    "PWA Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Cross Platform Application Developer",
    "Cholamandalam",
    "Chennai India",
    "Developer Portfolio",
  ],
  authors: [{ name: "Velmurugan C", url: "https://github.com/VeluFi" }],
  creator: "Velmurugan C",
  publisher: "Velmurugan C",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Velmurugan C | Software Developer | Flutter, Next.js & Android",
    description:
      "Velmurugan C is a Software Developer specializing in Flutter, Next.js, React, Native Android and PWA development.",
    url: siteUrl,
    siteName: "Velmurugan C Portfolio",
    images: [
      {
        url: `${siteUrl}og-image.png`,
        width: 1200,
        height: 630,
        alt: "Velmurugan C - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velmurugan C | Software Developer | Flutter, Next.js & Android",
    description:
      "Velmurugan C is a Software Developer specializing in Flutter, Next.js, React, Native Android and PWA development.",
    images: [`${siteUrl}og-image.png`],
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Velmurugan C",
  "url": siteUrl,
  "jobTitle": "Software Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Cholamandalam Investment and Finance Company Limited",
  },
  "description":
    "Software Developer specializing in Flutter, Next.js, React, Native Android and PWA development.",
  "knowsAbout": [
    "Flutter",
    "Next.js",
    "React",
    "Native Android",
    "Progressive Web Apps",
    "TypeScript",
    "JavaScript",
    "Cross-platform Application Development",
  ],
  "sameAs": [
    "https://www.linkedin.com/in/velmurugan-c-32a2a3131/",
    "https://github.com/VeluFi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950 min-h-screen transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
