/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        roboto_mono: ['Roboto', 'monospace'],
        erica: ["Erica One", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"]
      },
      colors: {
        'silver': '#a7a7a7',
      },
    },
  },
  plugins: [],
}