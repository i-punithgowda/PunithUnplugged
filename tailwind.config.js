/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        cream: '#f5f1e4',
        sandstone: '#e0dbce',
        ink: '#2c2e2a',
        night: {
          DEFAULT: '#1e201b',
          soft: '#2e312b',
        },
        stone: '#80827f',
        fog: '#a3a69e',
        grass: '#8ed462',
        sky: '#2ba0ff',
        coral: '#ff705d',
        sun: '#f5e211',
        magenta: '#FF007F',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Raleway', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Raleway', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1200px',
      },
    },
  },
  plugins: [],
}
