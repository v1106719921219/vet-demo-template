import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5C7A5E',
        'primary-dark': '#3A5C3C',
        'primary-light': '#EBF0E6',
        accent: '#C4784A',
        'accent-light': '#F5E6D8',
        'text-main': '#2C2416',
        muted: '#7A7060',
        bg: '#FBF8F2',
        cream: '#F5EDD8',
        wood: '#C8A882',
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
