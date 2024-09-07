/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // build: {
  //   sourcemap: false,
  // },
  variants: {
   display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}