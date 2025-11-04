import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2563EB', // blue-600
          light: '#3B82F6', // blue-500
          dark: '#1D4ED8', // blue-700
        },
        'soft-blue': {
          DEFAULT: '#F0F4F8',
          light: '#F8FAFC',
        },
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-out',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'float 8s ease-in-out infinite',
        floatReverse: 'floatReverse 7s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        stagger1: 'fadeInUp 0.6s ease-out 0.1s both',
        stagger2: 'fadeInUp 0.6s ease-out 0.2s both',
        stagger3: 'fadeInUp 0.6s ease-out 0.3s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

