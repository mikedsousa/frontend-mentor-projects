/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': 'Figtree, Arial, sans-serif'
    },
    extend: {
      boxShadow: {
        'custom': '10px 10px 0px 0px rgba(0,0,0,1);'
      }
    },
  },
  plugins: [],
}