/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      genericWhite: '#ffffff',
      mainMenuCardsBackground: '#F5F8FF',
      mainMenuCardsHoverBackground: '#ebeef5',
      mainHeaderBackground: '#0A0A0B',
      loopStudioDescParag: '#8c8c8c',
    },
    screens: {
      'phone': {'min': '320px', 'max': '767px'},
      'tablet': {'min':'768px', 'max': '1023px'},
      'desktop': {'min': '1440px'}
    },
    extend: {
      fontFamily: {
        'alata': ['"Alata"', 'sans-serif'],
        'josefin-sans': ['"Josefin Sans"', 'sans-serif']
      },
      backgroundImage: {
        'hero-desktop': "url('/images/loop-studio/desktop/image-hero.jpg')",
        'hero-mobile': "url('/images/loop-studio/mobile/image-hero.jpg')",
        'vr-goggles-desktop': "url('/images/loop-studio/desktop/image-interactive.jpg')"
      }
    },
  },
  plugins: [],
}