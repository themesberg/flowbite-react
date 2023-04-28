/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#E7F2F6', 100: '#CFE5ED', 200: '#B7D8E3', 300: '#9FCBDA', 400: '#87BFD1', 500: '#3E98B5', 600: '#268BAC', 700: '#0E7EA3', 800: '#0A5872', 900: '#084C62' }
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};
