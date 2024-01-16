/** @type {import('tailwindcss').Config} */
export default {
  content: ['../../packages/ui/src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
