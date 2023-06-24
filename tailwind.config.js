/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Lato, -apple-system, Roboto, sans-serif'
      },
      gridTemplateRows: {
        'resume-info': '5fr 8fr',
      },
      gridTemplateColumns: {
        'resume-experience': '1fr 3fr',
      },
      colors: {
      }
    },
  },
  plugins: [],
}

