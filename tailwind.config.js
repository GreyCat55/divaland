// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        zyzol: ['Zyzol', 'sans-serif'],
        'zyzol-outline': ['Zyzol Outline', 'sans-serif'],
        'zyzol-shadow': ['Zyzol Shadow', 'sans-serif'],
        'zyzol-round': ['Zyzol Round', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
