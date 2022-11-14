/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: { 
    fontSize: { //tokens de fonte
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
    },
    colors:{ //tokens de cores
        transparent: 'transparent',
      
        black: "#000",
        white: "#fff",

        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7c7c8a',
          100: '#E1E1E6',
          200: '#C4C4CC',
        },

        cyan: {
          500: '#81D8F7',
          300: '#98E1F8'
        }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
