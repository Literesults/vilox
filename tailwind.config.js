/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        headText: "#0F0F0F",
        paraText: '#373737',
        lightBg: '#EFEFEF',
        linkColor: 'rgba(15, 15, 15, 1)',
        footerBg: 'rgba(30, 30, 30, 0.1)'
      },
    },
    colors: {
      white: "#FFFFFF",
      danger: "#ef4444",
      black: "#000000",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
    },
  },
 
  plugins: [],
};
