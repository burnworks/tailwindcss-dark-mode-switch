/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,pug}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
