import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "optienal-dark-blue": "#1a1e26",
        "elegant-blue": "#0f57d1",
        "lighter-blue": "#9cc0ff",
        white: "#ffffff",
        offwhite: "#f7fafd",
        midgray: "#c0c7d1",
        "dark-gray": "#63666b",
        black: "#000000",
      },
      keyframes: {
        "rotate-90": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(90deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite", // Example if you want continuous slow spin
        "rotate-90": "rotate-90 0.5s ease-in-out forwards", // Define a custom rotation animation
      },
    },
  },
  plugins: [],
};
export default config;
