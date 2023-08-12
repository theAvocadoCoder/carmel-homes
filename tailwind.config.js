/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindForms from "@tailwindcss/forms";
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
      animation: {
        "slide-left": "slideFromLeft 1s ease",
        "slide-right": "slideFromRight 1s ease",
        "slide-top": "slideFromTop 1s ease",
        "slide-bottom": "slideFromBottom 1s ease",
        "fade-up": "fadeUp 1s ease",
      },
      keyframes: {
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideFromTop: {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "50%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    tailwindForms({
      strategy: 'class', // only generate classes
    }),
  ],
}

