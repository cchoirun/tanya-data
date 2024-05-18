/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Fredoka: "Fredoka"
    },
    extend: {
      colors: {
        blue_main: "#0079BC",
        red_main: "#E94333",
        orange_main: "#FFA135"
      },
      animation: {
        slide: "slide 80s linear infinite"
      },
      keyframes: {
        slide: {
          "0%, 100%" : {transform: "translateX(5%)"},
          "50%" : {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}