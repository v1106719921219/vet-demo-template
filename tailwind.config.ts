import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8A3D',
        'primary-dark': '#E5742A',
        'primary-light': '#FFB380',
        accent: '#4BAFD2',
        'accent-dark': '#3A96B5',
        'accent-light': '#8AD0E8',
        bg: '#FFF9F0',
        'bg-card': '#FFFFFF',
        ink: '#3D3027',
        'ink-light': '#7A6B5D',
        'ink-muted': '#A89888',
        border: '#F0E6D8',
      },
      fontFamily: {
        sans: ['"Zen Maru Gothic"', '"Zen Kurenaido"', '"IBM Plex Sans JP"', '"Hiragino Kaku Gothic ProN"', 'sans-serif'],
        display: ['"Klee One"', '"Zen Kurenaido"', '"Noto Serif JP"', 'serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
  plugins: [],
}

export default config
