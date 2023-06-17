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
      }
    },
  },
  plugins: [],
}

