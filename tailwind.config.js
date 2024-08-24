/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
    theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Resurcive: ["Kaushan Script", "cursive"],
      },
      colors: {
        transparent: "transparent",
        lightBlue: "#1b2a47",
        darkBlue: "#152036",
        skyBlue: "#0ef",
        background:"#262626",
        textColor: "#cbd5e0",
      },
    },
  },
 plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.body-light': {
          backgroundColor: '#ffffff', // Light mode background color
        },
        '.body-dark': {
          backgroundImage: 'linear-gradient(to bottom, #1a202c, #2d3748)',
        },
      });
    },
  ],
}