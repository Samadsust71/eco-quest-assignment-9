/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:[
           "Lato", "sans-serif"
        ]
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui:{
    themes: [
      "winter",
      "forest" ,
      "nord",

    ],
  }
  }


