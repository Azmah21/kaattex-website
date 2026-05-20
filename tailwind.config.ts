import type { Config } from "tailwindcss"

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F5F1EA",
        ivory: "#FAF7F1",
        ink: "#1A1A1A",
        graphite: "#3D3A36",
        ash: "#8A8580",
        rule: "#D9D3C8",
        accent: "#7A1F1F",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(3rem, 6vw + 1rem, 6.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "clamp(2.5rem, 4vw + 1rem, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.015em" },
        ],
        "display-lg": [
          "clamp(2rem, 3vw + 1rem, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        "accordion-up": "accordion-up 700ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
