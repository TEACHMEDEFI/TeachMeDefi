/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary colors
        primaryPink: "var(--primary-pink)",
        primaryBlue: "var(--primary-blue)",
        primaryWhite: "var(--primary-white)",

        // secondary colors
        secondaryPink: "var(--secondary-pink)",
        secondaryBlue: "var(--secondary-blue)",
        secondaryPurple: "var(--secondary-purple)",

        // background colors
        bgDarkBlue: "var(--background-dark-blue)",
        bgDarkGray: "var(--background-dark-gray)",
        bgDarkerGray: "var(--background-darker-gray)",

        // brand colors
        polkaPink: "var(--polka-pink)",
        polkaYellow: "var(--polka-yellow)",
        polkaGreen: "var(--polka-green)",
        polkaPurple: "var(--polka-pruple)",
        polkaCyan: "var(--polka-cyan)",
        bitcoinOrange: "var(--bitcoin-orange)",
      },
      backgroundImage: {

        // gradient colors
        "gradient-pink-to-blue": "var(--gradient-pink-to-blue)",
        "gradient-pink-to-baby-blue": "var(--gradient-pink-to-baby-blue)",
        "gradient-purple-to-pink": "var(--gradient-purple-to-pink)",


        'gradient-24': 'linear-gradient(104deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at bottom, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
      },
      height: {
        screenMinusNav: "calc(100vh - 128px)"
      }

    },
  },
  textGradient: {
    DEFAULT: {
      text: 'transparent',
      'bg-clip': 'text',
      'bg-gradient-to-br': 'from-pink-400 to-red-600',
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const rainbowText = {
        '.rainbow-text:hover': {
          background: theme('colors.primaryBlue'),
          background: `linear-gradient(to right, ${theme('colors.primaryBlue')}, ${theme('colors.secondaryPurple')}, ${theme('colors.primaryPink')})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
          background: theme('colors.primaryPink'),
          background: `linear-gradient(to right, ${theme('colors.primaryPink')}, ${theme('colors.secondaryPurple')}, ${theme('colors.primaryBlue')})`,
        },
      };

      addComponents(rainbowText);
    })
  ],
}
