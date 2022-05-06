module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      backgroundMobil1: "rgba(231, 231, 235, 1)",
      backgroundMobil2: "rgba(160, 159, 177, 1)",
      backgroundMobil3: "rgba(30, 33, 58, 1)",
      backgroundMobil4: "rgba(136, 134, 157, 1)",
      backgroundMobil5: "rgba(255, 236, 101, 1)",
      backgroundMobil6: "rgba(16, 14, 29, 1)",
      backgroundMobil7: "rgba(255, 255, 255, 0.3)",
      backgroundEscritorio: "rgba(17, 14, 60, 1)",
      backgroundEscritorio1: "rgba(88, 86, 118, 1)",
      backgroundEscritorio2: "rgba(110, 112, 122, 1)",
      backgroundEscritorio3: "rgba(255, 255, 255, 0.2)",
    },
    screens: {
      'sm': '335px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      heropattern: "url('/public/Cloud-background.png')",

    }
  },
  plugins: [],
}
