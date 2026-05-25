/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                GoogleSans: ["'Google Sans Flex'", "'Google Sans'", "sans-serif"],
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite'
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#08080c', // Google Antigravity dark background
                antigravityGray: '#111217',
                antigravityBlue: '#4285f4',
                antigravityPurple: '#9b72f8',
                antigravityPink: '#ec407a',
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}