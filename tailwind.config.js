module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        'titanium-white': '#e5e5e5',
      },
      colors: {
        'dim-gray': '#696969',
        'royal-blue': '#4285F4',
        'shorten-btn-hover': '#2374FA',
        white: '#ffffff',
        gdscBlue: '#4285F4',
        blue: {
          100: '#76A6FA',
          200: '#0066FF',
        },
        gdscVeryDarkGrey: '#4D4D4D',
        gdscDarkGrey: '#696969',
        'get-started-btn': '#E3EDFE',
        'get-started-btn-hover': '#D9E8FF',
        'mobile-background': '#ECF2FB',
      },
    },
    borderRadius: {
      DEFAULT: '8px',
    },
  },
  plugins: [],
};
