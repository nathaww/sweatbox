/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Brigends: ["Brigends", "sans-serif"],
        Akira: ["Akira", "sans-serif"],
      },
      colors: {
        primary: "#131313",
        secondary: "#DD5730",
      },
    },
    screens: {
      xxs: "319px",
      xs: "425px",
      ss: "620px",
      sm: "769px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
