/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        'neue-machina': ['Neue Machina', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

