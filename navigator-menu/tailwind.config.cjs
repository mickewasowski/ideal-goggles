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
      githubSearchBtnBg: '#0079ff',
      githubErrorColor: '#f74545',
      githubUserDetailsContDarkBg: '#1e2b48',
      githubUserDetailsContLightBg: '#ffffff',
      githubUsernameText: '#0077ff',
      githubUserDetailsParagText: '#697c9b',
      githubAccountInfoBg: '#f5f7ff',
      githubAccountInfoBgDark: '#141c2e',
      githubSVGAndTextLightFill: '#4b699b',
      githubSVGAndTextUnavailableLight: '#8f95a8'
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
      width: {
        '85%': '46.75rem',
        '70%': '42rem',
      }
    },
  },
  plugins: [],
}