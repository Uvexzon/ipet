/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        light: "#e9ecf7",
        lightHover: "#dee3f3",
        lightActive: "#bbc5e7",
        normal: "#2543b1",
        normalHover: "#213c9f",
        normalActive: "#1e368e",
        dark: "#1c3285",
        darkHover: "#16286a",
        darkActive: "#111e50",
        darker: "#0d173e",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
