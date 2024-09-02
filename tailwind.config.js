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
        themeColor: "var(--theme-color)",
        background:"#262626",
        textColor: "#cbd5e0",
        skyBlue:"#0ef"
      },
    },
  },
 plugins: [],
}