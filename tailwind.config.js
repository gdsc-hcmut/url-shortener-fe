module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        gdscGrey: {
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#CCCCCC',
          400: '#B3B3B3',
          500: '#999999',
          600: '#808080',
          700: '#696969',
          800: '#4D4D4D',
          900: '#333333',
        },
      },
      colors: {
        'shorten-btn-hover': '#2374FA',
        'login-btn-hover': '#0066FF',
        'get-started-btn': '#E3EDFE',
        'get-started-btn-hover': '#D9E8FF',
        'mobile-background': '#ECF2FB',
        'sign-in-with-google': '#FCEAE9',
        gdscBlue: {
          100: '#A0C3FF',
          200: '#76A7FA',
          300: '#4285F4',
        },
        gdscRed: {
          100: '#ED9D97',
          200: '#E57368',
          300: '#DB4437',
        },
        gdscYellow: {
          100: '#FFE168',
          200: '#FBCB43',
          300: '#F4B400',
        },
        gdscGreen: {
          100: '#7BCFA9',
          200: '#33B679',
          300: '#0F9D58',
        },
        gdscGrey: {
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#CCCCCC',
          400: '#B3B3B3',
          500: '#999999',
          600: '#808080',
          700: '#696969',
          800: '#4D4D4D',
          900: '#333333',
        },
      },
      backgroundImage: {
        blue: "url('/src/assets/image/background.svg')",
      },
    },
    borderRadius: {
      DEFAULT: '8px',
    },
  },
  plugins: [],
};
