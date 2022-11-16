/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
    },
    colors:{
        transparent: 'transparent',
      
        black: "#000",
        white: "#fff",
      
        'roxo': '#7229e6',
        'roxo-claro': '#c099ff',

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
        },

        
        'green-checkbox': '#61B082'
        


        

    },
    extend: {
      fontFamily: {
        sans: 'Quicksand, sans-serif'
      }
    },
  },
  plugins: [],
}
