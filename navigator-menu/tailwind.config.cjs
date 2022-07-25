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
      tipsCalculatorMainBackground: '#C5E4E7',
      tipsCalcLabelTextColor: '#5e7a7d',
      tipsCalcInputColor: '#00494d',
      tipsCalcInputDivBG: '#f4fafa',
      tipsCalcInputDivOutline: '#26c0ab',
      tipsCalcBtnBG: '#00494d',
      tipsCalcBtnHover: '#a1e8e0',
      tipsCalcBtnTextHover: '#00494d',
      tipsCalcCustBtnBG: '#f4fafa',
      tipsCalcErrorText: '#e07152',
    },
    screens: {
      'phone': {'min': '320px', 'max': '767px'},
      'tablet': {'min':'768px', 'max': '1023px'},
      'desktop': {'min': '1440px'}
    },
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}