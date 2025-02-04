const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", ".flowbite-react/class-list.json"],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
