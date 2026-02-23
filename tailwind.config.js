/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        gray: {
          750: '#2d3342',
          850: '#1a202c',
          950: '#0d1117',
        }
      }
    },
  },
  plugins: [],
};
