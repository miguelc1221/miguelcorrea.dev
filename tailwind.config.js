const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#01949A',
        secondary: '#393947',
        'amaranth': '#DB1F48',
        'amaranth-2': '#C51B40',
      },
      fontFamily: {
        'sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        'serif': ['Amatic SC', ...defaultTheme.fontFamily.serif],
      },
      screens: {
        'md.5': '865px',
      },
      spacing: {
        '14.849': '3.5rem',
      }
    },
  },
  plugins: [],
}
