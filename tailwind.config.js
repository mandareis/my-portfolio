/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pistachio: "#9CD08F",
        teaRose: "#D5B0AC",
        puce: "#CEAOAE",
        eggplant: "#684551",
        brunswickGreen: "#29524A",
        midnightGreen: "#0B3C49",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
