/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        'pmpa-blue-50': '#E6E6F0',
        'pmpa-blue-100': '#B0B0D2',
        'pmpa-blue-200': '#8A8ABC',
        'pmpa-blue-300': '#54549D',
        'pmpa-blue-400': '#33338A',
        'pmpa-blue-500': '#00006D',
        'pmpa-blue-600': '#000063',
        'pmpa-blue-700': '#00004D',
        'pmpa-blue-800': '#00003C',
        'pmpa-blue-900': '#00002E',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
