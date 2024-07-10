/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FFFFFF', // Cloud white
        secondary: {
          blue: '#1E90FF', // Deep Ocean Blue
          sky: '#87CEEB', // Sky blue
          yellow: '#FF5F00', // Sunrise Orange
          teal: '#EBF4F6',
        },
      },
    },
  },
  plugins: [],
};

