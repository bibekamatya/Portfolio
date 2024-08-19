/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        skyBlue: "#04c4ff",
        background:"#262626",
        textColor: "#cbd5e0",
      },
    },
  },
  plugins: [],
}