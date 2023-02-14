/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      color: {
        indigo: "#722ED1",
        indigoDark: "#160637",
        gray: "#F7F1FF",
      }
    },
    fontFamily: {
      'display': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
