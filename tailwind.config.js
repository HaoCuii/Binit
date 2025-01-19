/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: '#FFFDD0', // Add your custom color here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
