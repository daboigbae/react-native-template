/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Light Mode - Warm Neutrals with Blue Accent
        light: {
          primary: '#6D94C5',      // Soft blue
          secondary: '#E8DFCA',    // Warm beige
          accent: '#F5EFE6',       // Cream
          background: '#F5EFE6',   // Cream background
          surface: '#ffffff',      // White surface
          text: '#0D1164',         // Dark blue text
          textSecondary: '#640D5F', // Dark purple secondary text
        },
        // Dark Mode - Deep Blues and Purples with Orange Accent
        dark: {
          primary: '#EA2264',      // Bright pink
          secondary: '#F78D60',    // Orange accent
          accent: '#4A0A45',       // Dark purple
          background: '#0D1164',   // Deep blue background
          surface: '#640D5F',      // Dark purple surface
          text: '#F5EFE6',         // Cream text
          textSecondary: '#E8DFCA', // Warm beige secondary text
        },
        // Semantic colors that work with both themes
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#6D94C5',
      },
    },
  },
  plugins: [],
}
