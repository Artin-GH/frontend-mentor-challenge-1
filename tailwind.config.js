/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/partials/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        lightViolet: "hsl(257, 27%, 35%)",
        veryLightViolet: "hsl(257, 27%, 95%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
