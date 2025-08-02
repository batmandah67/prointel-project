import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-in": "slideIn 0.4s ease-out forwards",
        "hover-slide": "hoverSlide 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        hoverSlide: {
          "0%": {
            backgroundColor: "transparent",
            color: "#040f2e",
            transform: "translateX(0)",
          },
          "100%": {
            backgroundColor: "#08359F",
            color: "#ffffff",
            transform: "translateX(5px)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
