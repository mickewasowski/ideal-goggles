/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      genericWhite: '#ffffff',
      genericBlack: '#1C1F25',
      mainMenuCardsBackground: '#F5F8FF',
      mainMenuCardsHoverBackground: '#ebeef5',
      mainHeaderBackground: '#0A0A0B',
      equalizerOfferBg: '#191826',
      equalizerPlanBg: '#fa7352',
      equalizerPlanText: '#fcf9f8',
      equalizerAppleBtnBg: '#191826',
      equalizerAppleBtnBgHover: '#65e2db',
      equalizerAndroidBtnBg: '#fcf9f8',
      equalizerAndroidBtnText: '#191826',
      equalizerAndroidBtnBgHover: '#ffba66',
      equalizerFooterIconsHover: '#fa7352',
    },
    screens: {
      'phone': {'min': '320px', 'max': '767px'},
      'tablet': {'min':'768px', 'max': '1023px'},
      'laptop': {'min': '1024px', 'max': '1440px'},
      'desktop': {'min': '1440px'}
    },
    extend: {
      fontFamily: {
        'ibm-plex': ['"IBM Plex Sans"', 'sans-serif']
      },
      backgroundImage: {
        'offer-desktop-bg': "url('/images/equalizer/bg-pattern-2.svg')",
      },
      flex: {
        '2': '2 2 0%',
        '4': '4 4 0%',
      }
    },
  },
  plugins: [],
}
