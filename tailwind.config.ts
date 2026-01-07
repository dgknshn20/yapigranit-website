import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          500: "#d4af37",
          600: "#b4941f"
        },
        stone: {
          DEFAULT: "#2c2c2c",
          50: "#fafaf9",
          100: "#f5f5f4",
          800: "#292524",
          900: "#1c1917"
        }
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"]
      },
      transitionDuration: {
        "700": "700ms",
        "1200": "1200ms"
      },
      flex: {
        "1.4": "1.4 1 0%"
      }
    }
  },
  plugins: []
};

export default config;
