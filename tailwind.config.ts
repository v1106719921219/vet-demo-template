import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3D7A5E',
        'primary-dark': '#2A5C44',
        'primary-light': '#EAF4EE',
        accent: '#E8834A',
        'text-main': '#1E1E1C',
        muted: '#6B6B68',
        bg: '#FAFAF7',
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
