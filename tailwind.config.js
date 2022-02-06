module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        violet: {
          600: "#9738fc",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms", "@tailwindcss/aspect-ratio")],
};
