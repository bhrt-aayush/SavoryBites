/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        "green" :"#7dab8b",
        "red" : "#cc363e",
        "secondary" : "#555",
        "primaryBG" : "#ededed",
      }
    },
  },
  plugins: [require('daisyui'), ],
}

