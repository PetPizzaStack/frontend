/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Tilt\\ Neon", "cursive"],
        text: ["Tilt\\ Warp", "cursive"],
      },
      colors: {
        brown: "#514646",
      },
    },
  },
  plugins: [],
};
