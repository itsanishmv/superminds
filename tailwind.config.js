/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        centerImg: "url('./images/Homepage/postercenter.png')",
      },
      colors: {
        primaryBtn: "#FBD07A",
      },
    },
  },
  plugins: [],
};
