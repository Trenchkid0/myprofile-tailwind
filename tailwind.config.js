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
        'sm': {'min': '320px', 'max': '480px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
      },
      colors: {
        'hitam-pudar': '#252525',
      },
      borderRadius: {
        'lingkar':'50%'
      },
      width: {
        '33': '33rem',
        '25': '28rem',
        '38': '38rem',
        '44': '44rem',
      },
      height: {
        '128': '190rem',
      }

     
    },
  },
  plugins: [],
};
