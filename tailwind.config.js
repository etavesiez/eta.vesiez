/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2E4A31', // Vert foncé
          gold: '#E1AD01',  // Or
          brown: '#4D3529', // Marron foncé
          cream: '#F7F4E0', // Crème clair
        }
      }
      },
      fontFamily: {
        sans: ['Avenir Next', 'Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        block: [
          'League Spartan',
          'Berthold Block',
          'Bebas Neue',
          'BBH Bogle',
          'Montserrat',
          'Archivo Black',
          'Oswald',
          'Anton',
          'Impact',
          'Arial Black',
          'sans-serif',
        ],
      }
    },
  },
  plugins: [],
}