/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend : {
      backgroundImage: {
        'sorainbow-image': "url('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688509948/SoRainbowbg_ibdagw.webp')",
      }
    }
  },
  plugins: [],
}
