/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-night-blue": "#03224C",
        "secondary-blue": "#00B5B5",
        "main-cream": "#FFFFF0",
      },
    },
  },
  plugins: [],
};