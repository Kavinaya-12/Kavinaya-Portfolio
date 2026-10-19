export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent1: "var(--accent1)",
        accent2: "var(--accent2)",
        "image-base": "var(--image-base)"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
