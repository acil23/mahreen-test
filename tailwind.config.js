/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#030408',
        'neon-red': '#E50914',
      },
      backdropBlur: {
        xl: '24px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(229, 9, 20, 0.5)',
        'glow-lg': '0 0 60px rgba(229, 9, 20, 0.7)',
      },
    },
  },
  plugins: [],
}