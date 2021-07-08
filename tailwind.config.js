
const colors = require('tailwindcss/colors')
module.exports = {
  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
          orange: colors.orange
      },
      margin:{
        'full':'100%'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['hover'],
    },
  },
  plugins: [],
}
