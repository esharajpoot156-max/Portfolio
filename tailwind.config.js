/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e0e",
        gold: {
          DEFAULT: "#d4af37",
          light: "#e6c866",
          dark: "#a8862c",
        },
        skyBlue: "#ebecee",
      },
    },
  },
  plugins: [],
}