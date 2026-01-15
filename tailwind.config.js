/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hkn: {
          white: '#FFFFFF',
          goldTransparent: '#1C1B18',
          black: '#090909', // Fundo Principal
          surface: '#1A1A1A', // Cards/Fundo Secundário
          card: '#2D2D2D', // Detalhes/Bordas
          gold: {
            light: '#EBD197',
            DEFAULT: '#C6A355', // Cor principal da marca
            dark: '#8E702D',
          },
          muted: '#A3A3A3', // Texto secundário
        },
      },

      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #EBD197 0%, #C6A355 50%, #8E702D 100%)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Podemos definir uma fonte melhor depois
      },
    },
  },
  plugins: [],
};
