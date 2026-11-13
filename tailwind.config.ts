import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        caramel: {
          50: "#fdf6e9",
          100: "#f9ead0",
          200: "#f2d5a4",
          300: "#e9b978",
          400: "#dd9c4e",
          500: "#c07f2e",
          600: "#9c6524",
          700: "#7a4e1c",
          800: "#4f3315",
          900: "#2e1e0c",
        },
        pine: {
          DEFAULT: "#2f4a34",
          dark: "#223826",
          light: "#e6ebe2",
        },
        honey: "#d9a441",
        ivory: "#fdf8f0",
        sand: "#f6ecdd",
        blush: "#f3d9d7",
        amberstar: "#e8a33d",
        ink: "#2e2118",
        muted: "#6b5a4e",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
