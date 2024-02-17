/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        'rounded-circle':'50%'
      },
      fontSize:{
        'lg!': '2rem !important',
        'xl!': '3.5rem !important',
        'xxl!': '4rem !important'
      },
      height:{
        'h-screen-2': '200vh'
      },
      screens:{
        'xxs': '160px',
        'xs': '320px',
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

