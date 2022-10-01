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
      tipsCalcRightBG: '#00494d',
      tipsCalcRightParag: '#7f9c9f',
      tipsCalcRightH1: '#26c0ab',
      tipsCalcResetBtn: '#5e7a7d',
      tipsCalcResetBtnText: '#00494d',
      tipsCalcResetBtnHover: '#a1e8e0',
      tipsCalcResetBtnActive: '#26c0ab'
    },
    screens: {
      'phone': {'min': '320px', 'max': '767px'},
      'tablet': {'min':'768px', 'max': '1023px'},
      'laptop': {'min': '1023px', 'max': '1399px'},
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
