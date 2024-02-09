/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
    },
    extend: {
      colors: {
        mint: '#67B99A',
        zomp: '#56AB91',
        pineGreen: '#248277',
        skobeloff: '#14746F',
        carrabianCurr: '#036666',
        celadon: '#88D4AB',
        thistle : '#DAC3E8',
        lightWisteria :'#D2B7E5',
        wisteria :'#C19EE0',
        lavendar :'#B185DB',
        amethyst:'#A06CD5',
        royalPurple :'#7251B5',
        veryDarkblue :'#001d3d',
        viridian : '#358F80',
        VeryLightGray : '#d9d9d9',

        

      }
    },
  },
  plugins: [],
}

