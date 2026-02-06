/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      'body': ["Work Sans", "sans-serif"],
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'light-pink': 'hsl(275, 100%, 97%)',
      'grayish-purple': 'hsl(292, 16%, 49%)',
      'hover-purple': 'hsl(281, 83%, 54%)',
      'dark-purple': 'hsl(292, 42%, 14%)',
    },
    extend: {},
  },
  plugins: [],

}