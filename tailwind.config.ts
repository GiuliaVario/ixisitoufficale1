import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "var(--font-raleway)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-clash)", // 👈 questo è il nome reale della variabile che usiamo
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          purple: "#9A48FF",
          lime: "#BCF01F",
          orange: "#FF582B",
        },
        neutral: {
          black: "#121212",
          white: "#FBFBFB",
        },
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
