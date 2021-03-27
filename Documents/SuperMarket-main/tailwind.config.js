 // tailwind.config.js
 module.exports = {

  purge: [],

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     colors: {
       primary: '#14B5EB',
       secondary: '#006AAB',
       transparent: 'transparent',
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }