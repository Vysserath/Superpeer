/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Roboto"],
      },

      colors: {
        yellowButton: '#FFD338', 
        greyDark: "#222222",
        greyLight: "#555555",
        purpleCustom: "#F0ECFF",
      },

      screens: {
        'sm': '474px',
  
        'md': '767px',
  
        'lg': '1023px',
  
        'xl': '1279px',
  
        '2xl': '1535px',
      }
    },
  },
  plugins: [],
}

