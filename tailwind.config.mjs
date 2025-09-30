/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2364AA'
        },
        neutral: {
          300: '#EBEEF1'
        },
        error: {
          500: '#C72C2C'
        }
      },
      fontSize: {
        '3xl': '28px',
        '4xl': '40px',
        '5xl': '50px'
      },

      maxWidth: {
        96: '854px'
      },

      height: {
        20: '77px'
      }
    }
  },
  plugins: []
}
