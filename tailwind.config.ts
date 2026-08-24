import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#36a9f7",
          500: "#0c8de9",
          600: "#0270c7",
          700: "#0359a1",
          800: "#074c85",
          900: "#0c406e",
          950: "#082849",
        },
        chola: {
          gold: "#eab308",
          blue: "#1e3a8a",
          dark: "#0f172a",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)" },
          "100%": { boxShadow: "0 0 25px rgba(56, 189, 248, 0.6)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
