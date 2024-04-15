/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1200px",
          xl: "100%",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
