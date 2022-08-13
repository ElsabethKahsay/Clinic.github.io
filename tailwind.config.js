module.exports = {
  content: ['./*.html'],
  theme: {
     listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    backgroundImage: {
      'hero-pattern': "url('/img/back.png')"                                                                    ,
      
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {},
  },
  plugins: [],
}
