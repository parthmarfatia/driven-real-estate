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
    },
  },
  plugins: [],
};
export default config;
