/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Quicksand: "#BC978C",
        greyBlue: "#B2B8C3",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["George X", "ui-serif", "Georgia"],
    },
  },
  plugins: [],
};
