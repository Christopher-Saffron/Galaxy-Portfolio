/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#CD482B",
        main2: "#4AABF3",
        bgcolor: "#0E0D0D",
        bgcolor2: "#000000",
        textMain: "#E9E9E9",
        textSub: "#8E8E8E",
        textSub2: "#C3BABA",
        textSub3: "#E1E1E1",
      },
      gradientColorStopPositions: {
        5: "5%",
      },
      animation: {
        appearFromTop: "appearFromTop .3s ease-in-out forwards",
        disappearToTop: "disappearToTop 1s ease-in-out forwards",
      },
      keyframes: {
        appearFromTop: {
          "0%": { transform: "translate(-50%, -50%) scale(0.3)", opacity: 0 },
          "60%": { opacity: 0.3 },
          "100%": { transform: "translate(-50, -50%) scale(1)", opacity: 1 },
        },
        disappearToTop: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        catamaran: ["Catamaran", "Tahoma"],
      },
      fontSize: {
        title: "32px",
        base: "18px",
        category: "20px",
      },
      backgroundImage: {
        stars: "url('/public/animation/stars.svg')",
        "4paths": "url('/public/animation/4paths.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        lightsvg: "url('/public/cloudy0.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
