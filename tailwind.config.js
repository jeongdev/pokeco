// /** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#6994c6",
      subpri: "#8D92F2",
      sub: "#F2E6B4",
      subsub: "#F2AE30",
      transparent: "transparent",
      current: "currentColor",
      bg: "#e4e2dd",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      keyframes: {
        highlight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        highlight: "highlight 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
