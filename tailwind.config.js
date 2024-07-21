/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}" ],
  theme: {
    extend: {
      colors: {
        main: "#6730e3",
        mainDark:"#6c49c7",
        secodColor: "#9629e6",
        textColor: "#696969",
        sectionColor: "#f5f5f5",
        headTextDark: "#cbd5e1",
        textDark:"#94a3b8"
      },
      container: {
        padding: {
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },

  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],

}

