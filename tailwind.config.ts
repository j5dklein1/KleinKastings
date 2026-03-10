/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        industrial: {
          900: '#0F172A', // Deep Navy/Black
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B', // Steel
          400: '#94A3B8',
          300: '#CBD5E1', // Silver
          200: '#E2E8F0',
          100: '#F1F5F9', // Light Gray
          50: '#F8FAFC',
        },
        accent: {
          DEFAULT: '#B8B4B0', // Polished steel grey
          hover: '#A8A29E',
        },
      },
      backgroundImage: {
        'metal-pattern': "url('https://www.transparenttextures.com/patterns/brushed-alum.png')", // Fallback or use CSS gradient
      }
    },
  },
  plugins: [],
};
