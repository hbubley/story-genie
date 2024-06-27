/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'legends-purple': '#371fb7',
        'legends-pink': '#b21be8',
        'legends-yellow': '#f5aa0b'
      }
    }
  },
  plugins: []
}
