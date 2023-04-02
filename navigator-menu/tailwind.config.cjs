/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      genericWhite: '#ffffff',
      genericBlack: '#000000',
      mainMenuCardsBackground: '#F5F8FF',
      mainMenuCardsHoverBackground: '#ebeef5',
      mainHeaderBackground: '#0A0A0B',
      loopStudioDescParag: '#8c8c8c',
      equalizerOfferBg: '#191826',
      equalizerPlanBg: '#fa7352',
      equalizerPlanText: '#fcf9f8',
      equalizerAppleBtnBg: '#191826',
      equalizerAppleBtnBgHover: '#65e2db',
      equalizerAndroidBtnBg: '#fcf9f8',
      equalizerAndroidBtnText: '#191826',
      equalizerAndroidBtnBgHover: '#ffba66',
      equalizerFooterIconsHover: '#fa7352',
      eComHeaderBorder: '#f7f8fd',
      eComNavTextColor: '#68707d',
      eComNavTextColorHover: '#1d2025',
      eComNavTextBorderHover: '#ff7d1a',
      eComOrangeColor: '#ff7d1a',
      eComLimitedH1Text: '#1d2025',
      eComDiscountBg: '#ffede0',
      eComOriginalPriceText: '#b6bcc8',
      eComQuantityBtnsBg: '#f7f8fd',
    },
    screens: {
      'phone': {'min': '320px', 'max': '767px'},
      'tablet': {'min':'768px', 'max': '1023px'},
      'laptop': {'min': '1024px', 'max': '1439px'},
      'desktop': {'min': '1440px'}
    },
    extend: {
      fontFamily: {
        'alata': ['"Alata"', 'sans-serif'],
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
        'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
        'kumbh-sans': ['"Kumbh Sans"', 'sans-serif']
      },
      backgroundImage: {
        'hero-desktop': "url('/images/loop-studio/desktop/image-hero.jpg')",
        'hero-mobile': "url('/images/loop-studio/mobile/image-hero.jpg')",
        'vr-goggles-desktop': "url('/images/loop-studio/desktop/image-interactive.jpg')",
      },
      backgroundImage: {
        'offer-desktop-bg': "url('/images/equalizer/bg-pattern-2.svg')",
      },
      flex: {
        '2': '2 2 0%',
        '4': '4 4 0%',
      },
    },
  },
  plugins: [],
}
