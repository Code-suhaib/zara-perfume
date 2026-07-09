/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light: '#e6c27a',
          dark: '#b38f23',
          muted: '#a08930',
          warm: '#c9a84c',
        }
      },
      fontFamily: {
        'serif-lux': ['"Cinzel"', 'serif'],
        'body': ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scroll-down': 'scrollDown 2.5s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'spin-slow': 'spin 60s linear infinite',
      },
      letterSpacing: {
        'lux': '0.5em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(212, 175, 55, 0.15)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(300%)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(212, 175, 55, 0.1)',
        'gold-md': '0 0 20px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.4)',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
