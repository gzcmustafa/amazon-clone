/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        amazon:{
          background: "#E3E6E6",
          light_blue:"#232FF3A",
          yellow:"#FEBD69",
          DEFAULT:"#131921"

        }
      }
    },
  },
  plugins: [],
}