/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../packages/ui/src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
