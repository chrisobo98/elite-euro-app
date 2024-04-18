/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
    theme: {
    extend: {
      colors: {
        'apple-gray':'#f1efee',
      }
    },
  },
  plugins: [],
}

