module.exports = {
    content: ["./public/**/*.{html, js}"],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
           sans: ["vazir"],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }