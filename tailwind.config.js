/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        Dancing_Script:['Dancing Script', 'cursive'],
        Lobster:['Lobster', 'cursive']
      },
      screens: {
        vsm: "470px",
      }, // => @media (min-width: 640px) { ... }
      behavior :{
        scroll_behavior: "smooth !important"
      }
    },
  },
  plugins: [],
};


