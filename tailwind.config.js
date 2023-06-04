/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "460px",
      sm: "640px",
      md: "900px",
      lg: "1024px",
      xl: "1290px",
      "2xl": "1536px",
    },
    extend: {
      borderRadius: {
        large: "80px",
      },
      colors: {
        main: "#F40076",
        light: "#F7ECF1",
        white: "#FFFFFF",
        blurpink: "#840844",
        grey: "rgb(87, 87, 87)",
      },
      animation: {
        carousel: "carousel 10s infinite linear",
      },
      keyframes: ({ theme }) => ({
        carousel: {
          to: {
            transform: `translateX(calc(${168 * -2}px - (${theme(
              "spacing.4"
            )}*4)))`,
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
