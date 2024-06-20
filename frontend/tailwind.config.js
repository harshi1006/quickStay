/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: '#453737',
        golden: '#DEC952',
        lightBrown: '#c2a7a7',
        button: '#836969',
        antiquewhite: '#faebd7',
    },
    },
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};

