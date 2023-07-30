/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      }
    },
    colors: {
      'black': '#08080A',
      'white': '#E4EEFD',
      'light-black': '#25272A',
      'gray': '#969CA5',
      'green': '#5FD65D',
      'red': '#D65D5D',
      'light-red': '#FFB0B0',
      'blue': '#2964BD',
      'light-green': '#A1C8A0',
      'dark-green': '#268124',
      'gray-blue': '#8492A8',
      'dark-yellow': '#9F9A1F',
    },
    fontFamily: {
      title: ['ClashDisplay'],
      body: ['Nunito'],
    },
    fontSize: {
      'title-s': '1.2em',
      'title': '1.5em',
      'title-l': '2.3em',

      'body-xs': '0.5em',
      'body-s': '0.65em',
      'body': '0.9em',
      'body-l': '1.25em',
    }
  },
  plugins: [],
}

