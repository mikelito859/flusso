/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    darkMode: 'media', // or 'media' or 'class'
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            'lemonade',
            // {
            //     mytheme: {
            //         "primary": "#00c2ff",
            //         "secondary": "#D926AA",
            //         "accent": "#1FB2A5",
            //         "neutral": "#191D24",
            //         "base-100": "#2A303C",
            //         "info": "#3ABFF8",
            //         "success": "#36D399",
            //         "warning": "#FBBD23",
            //         "error": "#F87272",
            //     },
            // },
        ],
    },
    theme: {
        extend: {
            colors: {
                // primary: '#004ace', // Cambia este valor al color que desees
            },
        },
    },
}

