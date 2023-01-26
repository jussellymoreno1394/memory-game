/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./<custom directory>/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}
