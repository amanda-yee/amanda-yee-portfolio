/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'skyline': "url('../public/media/skyline-bw.jpg')",
      },
      fontFamily: {
        custom: ['Gloria Hallelujah', 'serif'], 
      },
    },
  },
  plugins: [],
}
