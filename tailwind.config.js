const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
        },
        colors: {
          blue: colors.blue,
          gray: colors.gray
        },
        fontFamily: {
          // sans: ['Graphik', 'sans-serif'],
          // serif: ['Merriweather', 'serif']
      },
      extend: {}
    },
    plugins: []
}
