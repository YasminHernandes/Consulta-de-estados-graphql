/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    colors: {
      "blue-dark": "#0D0A39",
      gray: {
        dark: "#273444",
        DEFAULT: "#8492a6",
        light: "#d3dce6",
      },
    },
    extend: {
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "64px",
        "1r": "1rem",
      },
      borderRadius: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
      },
    },
  },
  plugins: [],
};
