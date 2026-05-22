/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0E0F0F',
        surface: '#161718',
        card:    '#1C1D1F',
        border:  '#2A2B2D',
        teal:    '#2EBFA5',
        tealDim: '#1A7A6A',
        text:    '#E8E6E1',
        muted:   '#8A8A8A',
        faint:   '#3A3B3D',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
}
