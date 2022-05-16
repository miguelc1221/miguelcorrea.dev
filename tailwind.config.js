const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inchworm: '#BCFD4C',
        gunmetal: '#2e3039',
      },
      fontFamily: {
        'sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        'serif': ['Amatic SC', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
