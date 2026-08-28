import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        agency: "1366px",
      },
      colors: {
        background: "#FAFAFA",
        foreground: "#1A1A1A",
        brand: {
          light: "#FAFAFA",
          darkText: "#1A1A1A",
          mutedText: "#666666",
          dark: "#0A0A0A",
          charcoal: "#111111",
          cardDark: "#141414",
          cardLight: "#FFFFFF",
          mint: "#00D28F",
          mintHover: "#00B87D",
        },
        accent: {
          DEFAULT: "#00D28F",
          hover: "#00B87D",
          glow: "#33FFBA",
          dark: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Bricolage Grotesque", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee-vertical-up": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "marquee-vertical-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        floatOrb1: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.15)" },
          "66%": { transform: "translate(-30px, 40px) scale(0.95)" },
        },
        floatOrb2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-50px, 50px) scale(1.2)" },
          "66%": { transform: "translate(30px, -40px) scale(0.9)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "marquee-vertical-up": "marquee-vertical-up 35s linear infinite",
        "marquee-vertical-down": "marquee-vertical-down 35s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        gradientShift: "gradientShift 8s ease infinite",
        floatOrb1: "floatOrb1 12s ease-in-out infinite",
        floatOrb2: "floatOrb2 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
