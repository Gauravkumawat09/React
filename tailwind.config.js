/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Custom primary color
          secondary: "#9333EA",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  