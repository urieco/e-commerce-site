/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(12rem, 1fr))",
      },
      colors: {
        primary_1: "var(--primary_1)",
        primary_2: "var(--primary_2)",
        primary_3: "var(--primary_3)",
        secondary_1: "var(--secondary_1)",
      }
    },
  },
  plugins: [],
}

