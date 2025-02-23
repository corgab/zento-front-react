/** @type {import('tailwindcss').Config} */
/* PurgeCSS per rimuovere le classi non utilizzate */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      kumbh: ['var(--font-kumbh-sans)', 'sans-serif'],
      inter: ['var(--font-inter)', 'serif'],
    },
    colors: {
      yellow: '#FFD11A',
      dark: {
        8: '#141414',
        10: '#1A1A1A',
        15: '#262626',
        20: '#333333',
        25: '#404040',
        30: '#4D4D4D',
        35: '#595959',
        40: '#666666',
      },
      gray: {
        50: '#7E7E81',
        60: '#98989A',
        70: '#B3B3B3',
        80: '#CCCCCC',
        90: '#E4E4E7',
        95: '#F1F1F3',
        97: '#F7F7F8',
        99: '#FCFCFD',
      },
    },
  },
  plugins: [],
};
