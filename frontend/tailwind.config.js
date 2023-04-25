/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '375px', 'max': '767px'},
      'lg': {'min': '768px'}
    },
    extend: {
      fontFamily: {
        'marbyProReg': ['MabryPro-Regular', 'sans-serif'],
        'marbyProBold': ['MabryPro-Bold', 'sans-serif']
      }
    },
  },
  plugins: [],
}

