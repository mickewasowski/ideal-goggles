/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      genericWhite: '#ffffff',
      genericBlack: '#000000',
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
        'vr-goggles-desktop': "url('/images/loop-studio/desktop/image-interactive.jpg')",
        'deep-earth-desktop': "url('/images/loop-studio/desktop/image-deep-earth.jpg')",
        'deep-earth-mobile': "url('/images/loop-studio/mobile/image-deep-earth.jpg')",
        'curiosity-desktop': "url('/images/loop-studio/desktop/image-curiosity.jpg')",
        'curiosity-mobile': "url('/images/loop-studio/mobile/image-curiosity.jpg')",
        'fisheye-desktop': "url('/images/loop-studio/desktop/image-fisheye.jpg')",
        'fisheye-mobile': "url('/images/loop-studio/mobile/image-fisheye.jpg')",
        'from-above-desktop': "url('/images/loop-studio/desktop/image-from-above.jpg')",
        'from-above-mobile': "url('/images/loop-studio/mobile/image-from-above.jpg')",
        'grid-desktop': "url('/images/loop-studio/desktop/image-grid.jpg')",
        'grid-mobile': "url('/images/loop-studio/mobile/image-grid.jpg')",
        'night-arcade-desktop': "url('/images/loop-studio/desktop/image-night-arcade.jpg')",
        'night-arcade-mobile': "url('/images/loop-studio/mobile/image-night-arcade.jpg')",
        'pocket-borealis-desktop': "url('/images/loop-studio/desktop/image-pocket-borealis.jpg')",
        'pocket-borealis-mobile': "url('/images/loop-studio/mobile/image-pocket-borealis.jpg')",
        'soccer-team-desktop': "url('/images/loop-studio/desktop/image-soccer-team.jpg')",
        'soccer-team-mobile': "url('/images/loop-studio/mobile/image-soccer-team.jpg')",
      }
    },
  },
  plugins: [],
}