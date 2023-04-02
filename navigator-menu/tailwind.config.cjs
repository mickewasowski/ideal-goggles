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
      genericBlack: '#1C1F25',
      mainMenuCardsBackground: '#F5F8FF',
      mainMenuCardsHoverBackground: '#ebeef5',
      mainHeaderBackground: '#0A0A0B',
      githubLightBg: '#f6f8ff',
      githubDarkBg: '#141d2f',
      githubSearchBarAndUserDetailsBgDark: '#1e2a47',
      githubTextLightGray: '#697C9A',
      githubSearchBtnBg: '#0079ff',
      githubErrorColor: '#f74545',
      githubUserDetailsContDarkBg: '#1e2b48',
      githubUserDetailsContLightBg: '#ffffff',
      githubUsernameText: '#0077ff',
      githubUserDetailsParagText: '#697c9b',
      githubAccountInfoBg: '#f5f7ff',
      githubAccountInfoBgDark: '#141d2f',
      githubSVGAndTextLightFill: '#4b699b',
      githubSVGAndTextUnavailableLight: '#8f95a8',
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
      'laptop': {'min': '1024px', 'max': '1440px'},
      'desktop': {'min': '1440px'}
    },
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
        'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
        'kumbh-sans': ['"Kumbh Sans"', 'sans-serif'],
      },
      width: {
        '85%': '46.75rem',
        '70%': '42rem',
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
