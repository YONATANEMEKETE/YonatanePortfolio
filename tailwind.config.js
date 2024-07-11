/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      header: 'var(--header)',
      body: 'var(--body)',
    },

    extend: {
      colors: {
        bg: 'var(--bg)',
        bgalt: 'var(--bgalt)',
        text: 'var(--text)',
        text2: 'var(--text2)',
        textGrey: 'var(--textGrey)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
};
