/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

const drac = {
  bg: '#282a36',
  curr: '#44475a',
  fg: '#f8f8f2',
  comment: '#6272a4',
  cyan: '#8be9fd',
  green: '#50fa7b',
  orange: '#ffb86c',
  pink: '#ff79c6',
  purple: '#bd93f9',
  red: '#ff5555',
  yellow: '#f1fa8c',
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        drac,
      },
      fontFamily: {
        display: ["'Poppins'", ...fontFamily.sans],
      },
      screens: {},
      typography: () => {
        const { fg, pink, purple, comment } = drac
        return {
          DEFAULT: {
            css: {
              color: fg,
              a: {
                color: pink,
                '&:hover': {
                  color: purple,
                },
              },
              'a code': {
                color: pink,
              },
              'h1,h2,h3,h4,h5,h6,blockquote,strong,b,i,em': {
                color: fg,
              },
              blockquote: {
                borderLeftColor: fg,
              },
              'ol li::before': {
                color: fg,
              },
              'ul > li::before': {
                backgroundColor: fg,
              },
              hr: {
                borderTopColor: comment,
              },
              thead: {
                color: fg,
                borderBottomColor: fg,
              },
              'tbody tr': {
                borderBottomColor: fg,
              },
              'figure figcaption': {
                color: fg,
                opacity: 0.8,
              },
              img: {
                width: '100%',
              },
            },
          },
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
