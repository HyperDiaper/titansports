/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'titan-dark': '#0d1a0d',
        'titan-green': '#1a3a1a',
        'titan-green-mid': '#2d5a2d',
        'titan-green-light': '#4a8c4a',
        'titan-red': '#8b1a1a',
        'titan-red-mid': '#c0392b',
        'titan-cream': '#f5f0e8',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
