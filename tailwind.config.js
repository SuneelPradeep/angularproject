/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      screens: {
        "3xs" : "150px",
        "2xs" : "300px",
        "xs": "480px",
        "xxl": "1400px",
        "3xl": "1920px",
      },
    },
   
  },
  plugins: [],
}

