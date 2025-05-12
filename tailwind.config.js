/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        // custom color theme for the website
        rosepine: {
          base: "var(--rosepine-base)",
          surface: "var(--rosepine-surface)",
          overlay: "var(--rosepine-overlay)",
          muted: "var(--rosepine-muted)",
          subtle: "var(--rosepine-subtle)",
          text: "var(--rosepine-text)",
          love: "var(--rosepine-love)",
          gold: "var(--rosepine-gold)",
          rose: "var(--rosepine-rose)",
          pine: "var(--rosepine-pine)",
          foam: "var(--rosepine-foam)",
          iris: "var(--rosepine-iris)",
          "highlight-low": "#21202e", // Low highlight
          "highlight-med": "#403d52", // Medium highlight
          "highlight-high": "#524f67", // High highlight
        },

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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
