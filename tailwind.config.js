/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { 

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'], 
      },
      height: {
        '1200': '1200px',
        '1400': '1400px',
      },
      animation: {
        'pulse-slow': 'pulse-slow 10s infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      colors: {
      blue: {
        50: '#EBF5FF',
        100: '#E1EFFE',
        // ... (other shades)
        600: '#2563EB',
        700: '#1D4ED8',
      },
    },
  },
  
},
  plugins: [],
}

