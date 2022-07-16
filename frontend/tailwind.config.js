/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
      spacing: {
        "screen-80": "80vw",
      },
      fontFamily: {
        display: ["Leckerli One", "sans-serif"],
        sans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
