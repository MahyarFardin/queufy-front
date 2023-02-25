/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "light-blue"  : "#0066ff",
      "dark-blue"   : "#210099",
      "bg-white"    : "#f8f8f8",
      "txt-black"   : "#080808",
      "txt-gray"    : "#969696"
    },
    extend: {},
  },
  plugins: [],
};
