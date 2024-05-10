/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'humo': '#a8b8af',
        'brown-white': '#dadcd0',
        'green-1': '#607e6f',
        'green-2': '#1a2e25'
      },
    },
  },
  plugins: [],
}
