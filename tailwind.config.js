module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
