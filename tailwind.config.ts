const colors = require('tailwindcss/colors');
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: { ...colors.zinc },
        primary: { ...colors.cyan, DEFAULT: colors.cyan[300] },
      },
    }
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
