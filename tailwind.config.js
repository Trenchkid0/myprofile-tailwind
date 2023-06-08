/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      screens:{
        'desktop': '1280px',
      },
      colors: {
        'hitam-pudar': '#252525',
      },
      borderRadius: {
        'lingkar':'50%'
      },
     
    },
  },
  plugins: [],
};
