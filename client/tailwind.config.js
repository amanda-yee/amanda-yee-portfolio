/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'skyline': "url('../public/media/skyline.jpg')",
      },
      fontFamily: {
        custom: ['Intel One Mono', 'serif'], 
      }     
        // tailwind defaults: sm = 640px, md = 768px, lg = 1024px, xl = 1280px, 2xl = 1536px
    },
  },
  plugins: [],
}
