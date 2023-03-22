/** @type {import('tailwindcss').Config} */
module.exports = {
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

      },
      backgroundImage: {

        // gradient colors
        "gradient-pink-to-blue": "var(--gradient-pink-to-blue)",
        "gradient-pink-to-baby-blue": "var(--gradient-pink-to-baby-blue)",
        "gradient-purple-to-pink": "var(--gradient-purple-to-pink)",


        'gradient-24': 'linear-gradient(104deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(at top, var(--tw-gradient-stops))', 
      },
      fontFamily:{
        poppins: ["var(--font-poppins)"]
      }

    },
  },
  plugins: [],
}
