/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend : {
      backgroundImage: {
        'contact-image': "url('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1685412516/contactimage_1_znagb8.webp')"
      }
    }
  },
  plugins: [],
}
