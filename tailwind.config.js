// // tailwind.config.js
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // asegurate que apunta bien
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryBrand: "#022A9A",
        secondary: "#172B4D",
        textPrimary: "#3A3A3A",
        accent: "#36B37E",
        textDark: "#313643",
        textNeutral: "#606882",
        textGray: "#565656",
        gray: {
          extraLight: "#FAFAFA",
          light: "#DEE2EC",
          DEFAULT: "#E5E7EB",
          dark: "#A0AEC0",
        },
        blue: "#3564FD",
        error: "#EF4444",
        success: "#1C8367",
      },
      borderRadius: {
        xl: "1.5rem",
        layout: "32px",
      },
      spacing: {
        safe: "env(safe-area-inset-top)",
        content: "4.5rem",
      },
    },
  },
  plugins: [],
};
