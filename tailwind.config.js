/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Verde institucional Cámara de Diputados (banner / emblema)
        primary: {
          50: '#eaf5f1',
          100: '#cce8df',
          200: '#9ad1c0',
          300: '#5fb29c',
          400: '#34917a',
          500: '#1f7560',
          600: '#175e4d',
          700: '#154d42',
          800: '#123f37',
          900: '#0f342e',
        },
        // Terracota / dorado — acento institucional (iconos y águila del emblema)
        accent: {
          50: '#fdf3ec',
          100: '#fae1cf',
          200: '#f3c19f',
          300: '#ea9d6b',
          400: '#e08549',
          500: '#d06e34',
          600: '#b6582a',
          700: '#934727',
          800: '#763a23',
          900: '#61311f',
        },
        // Azul marino del logotipo "CÁMARA DE DIPUTADOS"
        navy: {
          50: '#eef1f6',
          100: '#d4dbe8',
          200: '#a6b4cd',
          300: '#7387ab',
          400: '#4a5f86',
          500: '#324468',
          600: '#243352',
          700: '#1c2942',
          800: '#172134',
          900: '#131a29',
        },
        // Arena / ámbar suave — calidez doméstica
        sand: {
          50: '#fdf9f0',
          100: '#faf0d9',
          200: '#f4dfae',
          300: '#edc878',
          400: '#e7b251',
          500: '#df9a33',
        },
        // Neutros cálidos
        ink: {
          50: '#f7f6f4',
          100: '#ebe9e4',
          200: '#d6d2c8',
          300: '#b8b1a3',
          400: '#948b79',
          500: '#776e5d',
          600: '#5f5749',
          700: '#4d473c',
          800: '#403b33',
          900: '#37332d',
        },
        // Bandera de México — usado solo como acento (barra tricolor)
        flag: {
          green: '#006847',
          white: '#ffffff',
          red: '#ce1126',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(15, 52, 46, 0.16)',
        card: '0 2px 12px -4px rgba(15, 52, 46, 0.12)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
