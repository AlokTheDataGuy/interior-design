import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper:        "#f4efe6",
        "paper-2":    "#ebe3d4",
        ink:          "#1a1714",
        "ink-soft":   "#2c2723",
        muted:        "#75695a",
        rule:         "#d8cfbf",
        accent:       "#b85839",
        "accent-deep":"#8d3f27",
        terracotta:   "#b85539",
        "terracotta-deep": "#8a3a25",
        clay:         "#c98865",
        cocoa:        "#3a2a20",
        cream:        "#faf6ee",
        night:        "#161310",
        "night-2":    "#1f1b16",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Cormorant Garamond", "Georgia", "serif"],
        sans:  ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
        tightest: "-0.035em",
      },
      borderRadius: {
        sharp: "2px",
      },
      maxWidth: {
        site: "1480px",
      },
      animation: {
        "rise":     "rise 1.1s cubic-bezier(.2,.7,.2,1) both",
        "scroll-x": "scroll-x 38s linear infinite",
        "wa-pop":   "wa-pop 1s cubic-bezier(.2,.7,.2,1) 1.4s both",
        "wa-ring":  "wa-ring 2.4s ease-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "hero-in":  "hero-in 1.6s cubic-bezier(.2,.7,.2,1) .4s both",
      },
      keyframes: {
        "rise": {
          from: { transform: "translateY(105%)", opacity: "0" },
          to:   { transform: "translateY(0)",    opacity: "1" },
        },
        "scroll-x": {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "wa-pop": {
          from: { transform: "translateY(60px) scale(.5)", opacity: "0" },
          to:   { transform: "translateY(0) scale(1)",     opacity: "1" },
        },
        "wa-ring": {
          "0%":   { transform: "scale(1)",   opacity: ".8" },
          "100%": { transform: "scale(1.5)", opacity: "0"  },
        },
        "pulse-soft": {
          "0%,100%": { boxShadow: "0 0 0 4px rgba(184,88,57,.18)" },
          "50%":     { boxShadow: "0 0 0 7px rgba(184,88,57,.05)" },
        },
        "hero-in": {
          from: { transform: "scale(1.18)", filter: "brightness(.85)" },
          to:   { transform: "scale(1)",    filter: "brightness(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
