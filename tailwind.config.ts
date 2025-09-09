import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        // Brand Colors from Logo Identity
        'brand': {
          'dark-teal': '#1a4d3a',
          'vibrant-pink': '#e91e63',
          'light-pink': '#f8bbd9',
        },
        
        // Reference color palette from design
        'dark-teal': {
          50: '#f0f9f7',
          100: '#e0f2ed',
          200: '#bae6d6',
          300: '#7dd3b8',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#1a4d3a', // Updated to match brand
          950: '#0f2e1f',
        },
        'vibrant-pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#e91e63', // Updated to match brand
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        'creamy-white': {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fafafa',
          300: '#f7f7f7',
          400: '#f4f4f4',
          500: '#f1f1f1',
          600: '#e8e8e8',
          700: '#d4d4d4',
          800: '#a3a3a3',
          900: '#737373',
          950: '#404040',
        },
        // Warm, earthy color palette inspired by Laura Lhuillier's design
        terracotta: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        beige: {
          50: '#fefdfb',
          100: '#fdf8f3',
          200: '#faf0e6',
          300: '#f5e6d3',
          400: '#efd9c0',
          500: '#e8ccad',
          600: '#d4b896',
          700: '#c0a47f',
          800: '#ac9068',
          900: '#987c51',
        },
        olive: {
          50: '#f7f8f0',
          100: '#eff1e0',
          200: '#dfe3c1',
          300: '#cfd5a2',
          400: '#bfc783',
          500: '#afb964',
          600: '#9fa545',
          700: '#8f9126',
          800: '#7f7d07',
          900: '#6f6900',
        },
        sage: {
          50: '#f6f7f4',
          100: '#edf0e9',
          200: '#dbe1d3',
          300: '#c9d2bd',
          400: '#b7c3a7',
          500: '#a5b491',
          600: '#93a57b',
          700: '#819665',
          800: '#6f874f',
          900: '#5d7839',
        },
        cream: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fbfbfb',
          300: '#f9f9f9',
          400: '#f7f7f7',
          500: '#f5f5f5',
          600: '#e8e8e8',
          700: '#dbdbdb',
          800: '#cecece',
          900: '#c1c1c1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        handwritten: ['Kalam', 'cursive'],
        // Brand fonts from logo identity
        'brand-bold': ['Oswald', 'sans-serif'], // For "TOSKA" - bold, wide uppercase
        'brand-condensed': ['Oswald', 'sans-serif'], // For "ART PROJECT" - condensed uppercase
        'brand-elegant': ['Crimson Text', 'serif'], // For "illustration" - classic serif
        'brand-logo': ['Playfair Display', 'serif'], // For stylized 't' - decorative serif
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
