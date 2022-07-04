/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        akumaRed: "#bf2828",
        darkGray: "#292929",
        darkerGray: "#171717",
        lighterGray: "#999999",
        white: "#f9f9f9"
      }
    },
  },
  plugins: [require("daisyui")],
}
