/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pistachio: "#9CD08F",
        teaRose: "#D5B0AC",
        puce: "#E28DA4",
        eggplant: "#684551",
        eggplant50: "#9D6C7D",
        eggplant100: "#59363B",
        brunswickGreen: "#29524A",
        midnightGreen: "#0B3C49",
        mimiPink: "#ECCBD9",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
