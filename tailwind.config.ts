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
        'niro-blue': '#005acd',
        'niro-light-blue': '#F5FBFF',
        'niro-accent': '#00A9FF',
      },
    },
  },
  plugins: [],
}