/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
      },
      screens: {
        vsm: "470px",
      }, // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
};
