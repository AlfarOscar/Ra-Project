/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'house-img':"url('/src/Galleria/house.jpg')",
        
      }),
    },
  },
  plugins: [],
}
