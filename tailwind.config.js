/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans'],
        alata: ['Alata'],
      },
      letterSpacing: {
        wide: '0.3em',
      },
    },
  },
  plugins: [],
};
