/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './app/js/script.js',
    './app/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        Very_Dark_Gray: 'hsl(0, 0%, 17%)',
        Dark_Gray: 'hsl(0, 0%, 59%)',
      },

      fontFamily: {
        Rubik: "'Rubik', sans-serif",
      },

      backgroundImage:{
        'pattern-mobile': 'url(../assets/images/pattern-bg-mobile.png)',
        'pattern-desktop': 'url(../assets/images/pattern-bg-desktop.png)',
        'arrow-icon': 'url(../assets/images/icon-arrow.svg)',
      },

      minWidth: {
        'mobile': '90svw',
        'tablet': '598.2px',
      },

      maxWidth: {
        
      },
      
      minHeight: {
        'header': '35vh',
        'map': '65vh',
      }
    },
  },
  plugins: [],
}

