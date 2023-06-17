/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        blue: {
          primary: "#16293A",
          gray: "#55585A",
          accent: "#D3EAFF",
        },
        brown: {
          primary: "#BF9455",
          gray: "#B9B5B0",
          accent: "#F5CB87",
        },
      },
    },
  },
  plugins: [],
}

