/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      colors: {
        // for 'primary' and'success'  - use the colorblind-friendly version (blue-grey, cyan-grey, green-grey, orange-grey, purple-grey, red-grey, yellow-grey and violet-grey) and use the hex value.  Also, check out the Color Wheel demo.  Also, check out the Palette demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors.  Also, check out the Color Wheel demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors
        primary: {
          100: "#00A1A5",
          200: "#00699C",
          "textGris": "#707070",
          "tonoBlanco": "#FFFFFF",
          500: "#F1F1F1",
          600: "#04A9BE",
        },
      },
      borderRadius: {
        borderRounded: "23% 77% 0% 100% / 0% 67% 33% 100%",
      },
     
      keyframes: {
        changeBackground :{
          "0%" :{
            backgroundColor: "#00699C"
          },
          "50%" :{
            backgroundColor: "#00699C"
          },
          "100%" :{
            backgroundColor: "#00699C"
          }
        },
        abrirCat: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        sliceDown: {
          "0%": { maxHeight: "300px", opacity: "1" },
          "100%": { maxHeight: "0px", opacity: "0" },
        },
        sliceUp: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "300px", opacity: "1" },
        },
        aparecer: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hoverFilter: {
          "0%": { Height: "50px" },
          "100%": { Height: "auto" },
        },
        aparecerDeAbajo: {
          "0%": { opacity: "0", transform: "translateY(50%)" },
          "100%": { opacity: "1", transform: "translateY(0%) " },
        },
        desaparecer: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        aparecerCote: {
          "0%": { transform: "scale(0%) translateX(-20%) translateY(-20%)" },
          "100%": { transform: "scale(100%) translateX(0%) translateY(0%)" },
        },
        desaparecerCote: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        "waving-hand": "abrirCat 2s linear infinite",
        aparecer: "aparecer 1s ease-out ",
        aparecerCostado: "aparecerCote .3s ease-in ",
        desaparecerCostado: "desaparecerCote .3s ease-in ",
        animatedBack:" changeBackground 5s linear infinite"
      },
      boxShadow: {
        shadowCaja1: "10px 10px 25px -7px rgba(66,66,66,0.7)",
        xxxl: "5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1), 20px 10px 20px rgba(0,0,0,0.1),50px 50px 80px rgba(0,0,0,0.25), inset 3px 3px 3px #fff  0vtzz5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)AZ",
      },
    },
  },
 
};
