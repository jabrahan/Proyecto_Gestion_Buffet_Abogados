/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'downy': {
          '50': '#f2fbfa',
          '100': '#d4f3ef',
          '200': '#a9e6e0',
          '300': '#69cec8',
          '400': '#49b8b5',
          '500': '#309c9b',
          '600': '#247c7d',
          '700': '#216264',
          '800': '#1e4f51',
          '900': '#1d4344',
          '950': '#0b2628',
      },
      
      }
    },
  },
  plugins: [],
}

