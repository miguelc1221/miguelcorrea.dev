import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#0A192F',
        'navy-1':'#112240',
        'navy-2':'#1D3461',
        'navy-3':'#233554',
        teal:    '#64FFDA',
        'teal-dim': 'rgba(100,255,218,0.1)',
        slate:   '#9AA6C3',
        'slate-light': '#B8C2E6',
        white:   '#DDE7FF',
        /* legacy aliases */
        primary: '#64FFDA',
        secondary: '#0A192F',
        surface: '#112240',
        canvas:  '#0A192F',
        ink:     '#CCD6F6',
        'ink-2': '#A8B2D8',
        'ink-3': '#8892B0',
        accent:  '#64FFDA',
        paper:   '#CCD6F6',
        amaranth: '#DB1F48',
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  plugins: [],
}

export default config
