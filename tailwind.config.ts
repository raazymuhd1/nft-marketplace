import type { Config } from "tailwindcss";

export default {
  // enabling a darkMode
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         main: "#363c42",
         secondary: "#e7e7e7",
         textWhite: "#fff",
         textBlue: "#2c9efd"
      },
    },
  },
  plugins: [],
} satisfies Config;
