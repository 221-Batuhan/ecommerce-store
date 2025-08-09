/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'old-money': {
          50: '#f2f7f6',
          100: '#e6efed',
          200: '#bfd9d4',
          300: '#99c3bb',
          400: '#4d9789',
          500: '#2c5c4f',
          600: '#285347',
          700: '#21453b',
          800: '#1a372f',
          900: '#162d27',
        },
        'cream': {
          50: '#fefefe',
          100: '#fdfcfb',
          200: '#faf7f5',
          300: '#f6f1ed',
          400: '#efe6df',
          500: '#e8dbd1',
          600: '#d1c5bc',
          700: '#aea49c',
          800: '#8f8680',
          900: '#756e69',
        },
        'gold': {
          50: '#fefdf9',
          100: '#fdfbf3',
          200: '#faf5e1',
          300: '#f6eecf',
          400: '#eee1a7',
          500: '#e6d47f',
          600: '#cfbf72',
          700: '#ad9f5f',
          800: '#8c7f4c',
          900: '#72673e',
        },
        'navy': {
          50: '#f4f6f8',
          100: '#e9edf1',
          200: '#c8d3dd',
          300: '#a7b9c9',
          400: '#6585a1',
          500: '#235179',
          600: '#1f496d',
          700: '#1a3d5b',
          800: '#153149',
          900: '#11283b',
        }
      }
    },
  },
  plugins: [],
}
