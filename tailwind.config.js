/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        islamic-green: "#059669",
        islamic-gold: "#d4af37",
        islamic-dark: "#1e293b",
        islamic-light: "#f8fafc",
        islamic-white: "#ffffff",
      }
    }
  },
  plugins: []
}