/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pistachio: "#9CD08F",
        cherryBlossomPink: "#f4acb7",
        cherryBlossomPink50: "#f3a5b1",
        cherryBlossomPink100: "#F093A1",
        puce: "#E28DA4",
        eggplant: "#684551",
        eggplant50: "#9D6C7D",
        eggplant100: "#59363B",
        brunswickGreen: "#29524A",
        brunswickGreen50: "#22443D",
        viridianGreen: "#44887B",
        midnightGreen: "#0B3C49",
        tabGreen: "#64CB42",
        tabYellow: "#F6BD3D",
        tabRed: "#EB5A55",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
