const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#01B0D3',
        secondary: '#393947',
        'pinkFlash': '#EF4657',
        'pinkFlash-2': '#D73F4E',
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
