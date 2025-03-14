/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:["Poppins","Sans-serif"],
      },
      colors: {
        primary: "#854d3d",
        secondary:"#4a1e1b",
        brandDark: "#270c03"
      },
      container:{
        center: true,
        padding:{
          DEfAULT: "1rem",
          sm: "2rem",


        },
      },
    },
  },
  plugins: [],
}

