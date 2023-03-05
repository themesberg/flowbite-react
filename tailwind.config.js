/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};
