/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0E1525',
        'surface-light': '#F4F6FB',
        'surface-card': '#FFFFFF',
        'surface-dark': '#050B16',
        'surface-card-dark': '#111C2E',
        brand: {
          DEFAULT: '#6366F1',
          muted: '#EEF2FF',
          deep: '#4F46E5'
        },
        accent: {
          DEFAULT: '#0EA5E9',
          deep: '#0284C7'
        },
        ink: '#0F172A'
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        lifted: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        card: '0 20px 35px -20px rgba(15, 23, 42, 0.45)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      }
    },
  },
  plugins: [],
}

