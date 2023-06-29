/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/@digital-art-dealers/react-native-component-lib/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#ffffff",
                "blue-400": "#60a5fa",
            },
        },
    },
    plugins: [],
};
