/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', '/index.html'],
  theme: {
    extend: {
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
  plugins: [],
}
