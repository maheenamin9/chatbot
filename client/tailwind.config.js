/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '3xl': { 'max': '1488px' },
      '2xl': { 'max': '1024px' },
      'xl': { 'max': '991px' },
      'lg': { 'max': '768px' },
      'md': { 'max': '425px' },
      'sm': { 'max': '375px' },
      'xsm': { 'max': '320px' },
    },
  },
  plugins: [],
}

