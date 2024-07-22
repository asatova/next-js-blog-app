/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './app/**/*.{js,ts,jsx,page.tsx,mdx}',
    './pages/**/*.{js,ts,jsx,page.tsx,mdx}',
    './components/**/*.{js,ts,jsx,page.tsx,mdx}',


  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
