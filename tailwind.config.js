/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
