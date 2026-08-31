/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroud: "#0a0a0a",
        gold: {
          DEFAULT: "#d4af37",
          light: "#e6c866",
          dark: "#a8862c",
        },
      },
    },
  },
  plugins: [],
}

