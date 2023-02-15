/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'display': ['Roboto', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
      pink: colors.pink,
      orange: colors.orange,
      teal: colors.teal,
      cyan: colors.cyan,
      lime: colors.lime,
      amber: colors.amber,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      'color-darkblue': '#172755',
      'color-white': '#F8F9FF',
      'color-gray': '#8794BA',
      'color-pink': '#ef2a82'
    },
  },
  plugins: [],
}
