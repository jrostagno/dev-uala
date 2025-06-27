import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // asegurate que apunta bien
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryBrand: "#022A9A",
        primartBrandLight: "#E0EDFF",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        textPrimary: "#3A3A3A",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#022A9A",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        xl: "1.5rem",
        layout: "32px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        safe: "env(safe-area-inset-top)",
        content: "4.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
