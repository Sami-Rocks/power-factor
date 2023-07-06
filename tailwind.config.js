/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F89B00",
        secondary: "#AC60B5",
        secondary_text: "#452648",
        light_bg: "#E3D8F1",
        light_bg_2: "#FEEBD5",
        faded: "#E5F3FF",
        black: "#1f3341",
        white: "#ffffff",
        light_grey_text: "#A4ADC6",
        grey_text: "#4F4f4f",
        label_text: "#7483A9",
        dark_grey_text: "#333C52",
        border: "#E3E6ED",
        icon_background: "#C3C9DA",
        faded_red: "#FFECEB",
        faded_yellow: "#FFF3E6",
        red: "#F14A0E",
        peach: "#FF8168",
        yellow: "#FFAB4C",
        green: "#54C3A1",
        faded_green: "#E1F4EE",
        transparent: "rgba(0, 0, 0, 0)",
      },
      fontFamily: {
        // sans: ['EuclidSquare'],
        sans: ["Lato", "sans-serif"],
        // EuclidSquare_Bold: ["EuclidSquare_Bold", "sans-serif"],
        // EuclidSquare_SemiBold: ["EuclidSquare_SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
