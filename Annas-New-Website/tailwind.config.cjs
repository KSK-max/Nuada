/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0587a3",
        "primary-dark": "#0F1314",
        "primary-turquoise": "#39aca7",
        "secondary-yellow": "#eeb71c",
        "secondary-magenta": "#bc1e52",
        "secondary-gray": "#a7a8ab",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
});
