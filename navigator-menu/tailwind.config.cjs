/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors:{
      genericWhite: '#ffffff',
      mainMenuCardsBackground: '#F5F8FF',
      mainMenuCardsHoverBackground: '#ebeef5',
      mainHeaderBackground: '#0A0A0B',
      githubLightBg: '#f6f8ff',
      githubDarkBg: '#212630',
      githubTextLightGray: '#697C9A',

    },
    screens: {
      'phone': {'min': '320px', 'max': '767px'},
      'tablet': {'min':'768px', 'max': '1023px'},
      'laptop': {'min': '1024px', 'max': '1439px'},
      'desktop': {'min': '1440px'}
    },
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace']
      },
    },
  },
  plugins: [],
}