/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1442px',
    },
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
      colors: {
        primary: '#FF5A30',
        brand: {
          gray: {
            200: '#E7FAFE',
            800: '#262626'
          }
        }
      },
      maxWidth: {
        'base': '84rem'
      },
      dropShadow: {
        'right': '20px 20px 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}