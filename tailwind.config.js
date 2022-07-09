/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Eczar', ...defaultTheme.fontFamily.sans],
        'body': ['Spectral', ...defaultTheme.fontFamily.sans],
        'mono': ['"Anonymous Pro"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
