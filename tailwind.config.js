/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'hebrew': ['FbParking', 'system-ui', '-apple-system', 'sans-serif'],
        'english': ['FbParkingEng', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'card-bg': '#e5e5d6',
        'card-header': '#454a3f',
        'card-accent': '#454a3f',
      },
    },
  },
  plugins: [],
} 