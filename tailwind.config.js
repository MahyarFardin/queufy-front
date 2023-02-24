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
      "light-blue" : "#0066ff",
      "dark-blue" : "#210099"
    },
    fontSize:{
      "d-logo"  :  "4.375 rem",
      "d-title" :  "3.125 rem",
      "m-logo"  :  "2.5 rem",
      "m-title" :  "2.813 rem",
    },
    extend: {},
  },
  plugins: [],
};
