/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
        },
        colors: {
          // blue: '#1fb6ff',
        },
        fontFamily: {
          // sans: ['Graphik', 'sans-serif'],
          // serif: ['Merriweather', 'serif']
      },
      extend: {}
    },
    plugins: []
}
