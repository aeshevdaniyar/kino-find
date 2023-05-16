export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#E74749",
          900: "#D91C1F",
        },
        grey: {
          25: "#FCFCFD",
          100: "#F2F4F7",
          400: "#98A2B3",
          600: "#475467",
          900: "#101828",
          300: "#D0D5DD",
          200: "#E4E7EC",
        },
        warning: {
          400: "#FDB022",
        },
      },
    },
  },
  plugins: [],
};
