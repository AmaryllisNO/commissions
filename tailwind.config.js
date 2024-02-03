/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      wide: '0.5rem',
    },
    extend: {
      filter: ['hover', 'focus'],
      colors: {
        primary: '#FF3968',
        background: '#14161A',
        transparentBackground: '#14161ab1',
        onBackground: '#242830',
        text: '#E3E3E3',
        offWhite: '#AEB0B2',
        fade: '#3B414F',
        lightFade: '#565D6B',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
