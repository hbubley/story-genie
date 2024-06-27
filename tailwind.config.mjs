/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'legends-purple': '#371fb7',
        'legends-pink': '#b21be8',
        'legends-yellow': '#f5aa0b'
      },
      backgroundImage: {
        'legends-gradient': 'linear-gradient(45deg,#371fb7,#b21be8,#f5aa0b)',
        'disabled-gradient': 'linear-gradient(45deg,#d3d3d3,#808080,#a9a9a9)'
      }
    }
  },
  plugins: []
}
