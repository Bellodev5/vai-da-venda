/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f36d21', // laranja base
          dark: '#e85300'
        },
        footerbg: '#1E2429'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)',
        'card': '0 10px 30px rgba(0,0,0,0.06)',
        'glow': '0 6px 28px rgba(243,109,33,0.26)',
        'nav-soft' : '0 4px 6px rgba(0,0,0,0.04)'
      },
      keyframes: {
        float: { 
          '0%': { transform: 'translateY(0px)' }, 
          '50%': { transform: 'translateY(-12px)' }, 
          '100%': { transform: 'translateY(0px)' } 
        },
        slowSpin: { 
          '0%': { transform: 'rotate(0deg)' }, 
          '100%': { transform: 'rotate(360deg)' } 
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'float 9s ease-in-out infinite',
        spinSlow: 'slowSpin 20s linear infinite'
      }
    },
  },
  plugins: [],
}