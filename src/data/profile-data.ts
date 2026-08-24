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

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
  location?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  company: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
  objective: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
  skills: {
    category: string;
    items: string[];
  }[];
  allSkills: string[];
  aiKnowledgeBase: {
    keywords: string[];
    answer: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Velmurugan C",
  title: "Software Developer",
  company: "Cholamandalam Investment and Finance Company Limited",
  location: "Chennai, India",
  github: "https://github.com/VeluFi",
  linkedin: "https://www.linkedin.com/in/velmurugan-c-32a2a3131/",
  summary:
    "Software Developer specializing in building modern web, mobile, and cross-platform applications. Experienced with Flutter, Next.js, React, TypeScript, Native Android, and Progressive Web Applications, with a focus on scalable enterprise applications, responsive user experiences, API integration, and production-ready solutions.",
  objective:
    "Create a modern, premium, professional personal developer portfolio website for Velmurugan C.",
  education: [
    {
      institution: "B.S. Abdur Rahman Crescent Institute of Science and Technology",
      degree: "Master of Computer Applications (MCA)",
    },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "Cholamandalam Investment and Finance Company Limited",
      location: "Chennai, India",
      period: "Present",
      description:
        "Working on enterprise web and application development across modern frontend and mobile technologies.",
      responsibilities: [
        "Next.js development",
        "React",
        "TypeScript",
        "Flutter",
        "Native Android",
        "PWA development",
        "REST API integration",
        "Responsive UI development",
        "Enterprise application development",
        "Unit testing",
        "Git/GitHub workflows",
      ],
    },
  ],
  projects: [
    {
      id: "chola-pro",
      title: "Chola PRO",
      subtitle: "Field-sales mobile application for enterprise ecosystem",
      description:
        "Production mobile application built using Flutter for Chola's field-sales ecosystem.",
      type: "Flutter Mobile Application",
      technologies: ["Flutter", "Dart", "REST APIs", "Mobile UI"],
      category: "mobile",
      featured: true,
      link: "https://play.google.com/store/apps/details?id=com.gb.cholafsa&hl=en_IN",
      buttonText: "View on Google Play",
      highlights: [
        "Production mobile application for field-sales teams",
        "Built using Flutter & Dart cross-platform framework",
        "Seamless REST API integration with enterprise backends",
        "Optimized mobile UI/UX for fast field operations",
      ],
    },
    {
      id: "gaadibazaar",
      title: "GaadiBazaar",
      subtitle: "Commercial vehicle marketplace & financing ecosystem mobile app",
      description:
        "Production mobile marketplace application built for Chola's commercial vehicle ecosystem, enabling buyers and sellers to discover, evaluate, and finance vehicles.",
      type: "Flutter Mobile Application",
      technologies: ["Flutter", "Dart", "REST APIs", "Mobile UI", "Auto Marketplace"],
      category: "mobile",
      featured: true,
      link: "https://play.google.com/store/apps/details?id=com.gb.gaadibazaar&hl=en_IN",
      buttonText: "View on Google Play",
      highlights: [
        "Production commercial vehicle marketplace mobile app for Chola ecosystem",
        "Built with Flutter, Dart, and high-performance REST APIs",
        "Vehicle discovery, evaluation workflows, and loan application integrations",
      ],
    },
    {
      id: "kyber-office",
      title: "Kyber Office",
      subtitle: "Enterprise case management & verification workflow system",
      description:
        "Enterprise web application for managing cases, verification workflows, progress tracking and operational decisions.",
      type: "Enterprise Web Application",
      technologies: ["Next.js", "React", "TypeScript", "REST APIs", "Responsive UI"],
      category: "web",
      featured: true,
      link: "https://office.kyberai.in/",
      buttonText: "View Application",
      isPrivate: true,
      highlights: [
        "Case management and verification workflow tracking",
        "Real-time operational decision support dashboard",
        "Built with Next.js, React & TypeScript",
        "Fully responsive enterprise user interface",
      ],
    },
    {
      id: "joysale",
      title: "Joysale",
      subtitle: "Classifieds marketplace mobile application",
      description:
        "Production classifieds marketplace mobile application featuring real-time product discovery, location search, buyer-seller messaging, and REST API synchronization.",
      type: "Native Android Application",
      technologies: ["Native Android", "Java/Kotlin", "REST APIs", "Mobile UI", "Marketplace"],
      category: "mobile",
      featured: false,
      link: "https://play.google.com/store/apps/details?id=com.hitasoft.app.joysale&hl=en_IN",
      buttonText: "View on Google Play",
      highlights: [
        "Classifieds buy/sell marketplace mobile application",
        "Native Android implementation with Java/Kotlin",
        "Location-based search & REST API integration",
      ],
    },
    {
      id: "turbo-catalogue",
      title: "Turbo Catalogue",
      subtitle: "Product catalog mobile application for product discovery",
      description:
        "Mobile product catalogue application featuring interactive category search, product specifications, image caching, and REST API integration.",
      type: "Native Android Application",
      technologies: ["Native Android", "Java/Kotlin", "REST APIs", "Product Catalogue UI"],
      category: "mobile",
      featured: false,
      link: "https://play.google.com/store/apps/details?id=com.newturbo.productcatlogue&hl=en_IN",
      buttonText: "View on Google Play",
      highlights: [
        "Interactive product catalogue Android app",
        "Optimized image caching and dynamic filtering",
        "Native Android Java/Kotlin implementation",
      ],
    },
    {
      id: "hiddy",
      title: "Hiddy",
      subtitle: "Native Android application showcasing platform capabilities",
      description:
        "Native Android application demonstrating mobile application development, UI implementation, API integration and Android platform capabilities.",
      type: "Native Android Application",
      technologies: ["Native Android", "Java/Kotlin", "REST APIs", "Android UI"],
      category: "mobile",
      featured: false,
      link: "https://play.google.com/store/apps/details?id=com.hitasoft.app.hiddy&hl=en_IN",
      buttonText: "View on Google Play",
      highlights: [
        "Native Android architecture with Java & Kotlin",
        "Custom UI implementation & platform integrations",
        "Robust REST API synchronization",
      ],
    },
    {
      id: "pwa-app",
      title: "Progressive Web Application",
      subtitle: "Cross-platform app-like experience across desktop and mobile",
      description:
        "Progressive Web Application designed to provide an app-like experience across desktop, tablet and mobile platforms.",
      type: "Next.js + PWA",
      technologies: ["Next.js", "React", "TypeScript", "PWA", "Responsive UI", "REST APIs"],
      category: "pwa",
      featured: false,
      link: "https://github.com/VeluFi",
      buttonText: "Explore Architecture",
      highlights: [
        "PWA capabilities including offline support and app-like UX",
        "Built using Next.js, React, and TypeScript",
        "Multi-device responsiveness (Desktop, Tablet, Mobile)",
      ],
    },
  ],
  skills: [
    {
      category: "Frontend & Mobile",
      items: [
        "Flutter",
        "Next.js",
        "React",
        "TypeScript",
        "Native Android",
        "PWA",
        "JavaScript",
        "HTML",
        "CSS",
        "Dart",
        "Java",
        "Kotlin",
      ],
    },
    {
      category: "Architecture & Systems",
      items: [
        "REST APIs",
        "Cross-platform application development",
        "Enterprise web applications",
        "Progressive Web Applications (PWA)",
        "Responsive Web Applications",
        "Cross-platform Applications",
        "API Integration",
        "Authentication",
        "JSON",
        "HTTP APIs",
      ],
    },
    {
      category: "Tools & Testing",
      items: ["Git", "GitHub", "VS Code", "Postman", "Vitest"],
    },
  ],
  allSkills: [
    "Flutter",
    "Next.js",
    "React",
    "TypeScript",
    "Native Android",
    "PWA",
    "REST APIs",
    "Cross-platform application development",
    "Enterprise web applications",
    "JavaScript",
    "HTML",
    "CSS",
    "Dart",
    "Java",
    "Kotlin",
    "Progressive Web Applications (PWA)",
    "Responsive Web Applications",
    "Cross-platform Applications",
    "API Integration",
    "Authentication",
    "JSON",
    "HTTP APIs",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Vitest",
  ],
  aiKnowledgeBase: [
    {
      keywords: ["chola pro", "chola", "field-sales", "sales"],
      answer:
        "Chola PRO is a production mobile application built using Flutter and Dart for Cholamandalam's field-sales ecosystem. It features REST API integration and a responsive mobile UI engineered for enterprise field operations.",
    },
    {
      keywords: ["gaadibazaar", "gaadi bazaar", "commercial vehicle", "vehicles"],
      answer:
        "GaadiBazaar is a production Flutter mobile application built for Cholamandalam's commercial vehicle marketplace ecosystem, enabling vehicle discovery, evaluation workflows, and financing integrations.",
    },
    {
      keywords: ["joysale", "classifieds", "marketplace"],
      answer:
        "Joysale is a production classifieds marketplace mobile application built for Native Android using Java/Kotlin, featuring location search, real-time messaging, and REST API integration.",
    },
    {
      keywords: ["turbo catalogue", "turbo catalog", "turbo", "catalogue"],
      answer:
        "Turbo Catalogue is a Native Android product catalogue application featuring interactive category discovery, high-performance image caching, and product specifications.",
    },
    {
      keywords: ["kyber office", "kyber", "verification", "cases", "workflow"],
      answer:
        "Kyber Office is an enterprise web application designed for managing cases, verification workflows, progress tracking, and operational decisions. It was built with Next.js, React, TypeScript, and REST APIs.",
    },
    {
      keywords: ["hiddy", "android", "native"],
      answer:
        "Hiddy is a Native Android application demonstrating mobile application development, UI implementation, API integration, and native platform capabilities using Java/Kotlin.",
    },
    {
      keywords: ["pwa", "progressive", "app-like", "offline"],
      answer:
        "Velmurugan builds Progressive Web Applications (PWA) using Next.js, React, and TypeScript to deliver responsive, app-like experiences across desktop, tablet, and mobile platforms.",
    },
    {
      keywords: ["experience", "cholamandalam", "company", "work", "role", "job"],
      answer:
        "Velmurugan C works as a Software Developer at Cholamandalam Investment and Finance Company Limited in Chennai, India. He builds enterprise web and mobile applications using Next.js, React, TypeScript, Flutter, Native Android, and PWA technologies.",
    },
    {
      keywords: ["education", "degree", "mca", "college", "university", "crescent"],
      answer:
        "Velmurugan holds a Master of Computer Applications (MCA) degree from B.S. Abdur Rahman Crescent Institute of Science and Technology.",
    },
    {
      keywords: ["skills", "tech", "technologies", "stack", "languages"],
      answer:
        "Velmurugan's core skills include Flutter, Next.js, React, TypeScript, Native Android (Java/Kotlin), PWA, Dart, REST APIs, Git/GitHub, Unit testing with Vitest, and Postman.",
    },
    {
      keywords: ["resume", "download", "cv"],
      answer:
        "You can download Velmurugan's official resume directly from the Resume section on this website or by clicking the Download Resume button in the navigation bar.",
    },
    {
      keywords: ["contact", "github", "linkedin", "email", "location"],
      answer:
        "Velmurugan is based in Chennai, India. You can connect with him on GitHub (https://github.com/VeluFi) and LinkedIn (https://www.linkedin.com/in/velmurugan-c-32a2a3131/).",
    },
  ],
};
