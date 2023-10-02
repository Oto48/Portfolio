/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        "3xl": { min: "1880px" },
      },
    },
  },
  plugins: [],
};
