module.exports = {
  content: [
    "./src/**/*.{html, js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:  "#FFB703"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}