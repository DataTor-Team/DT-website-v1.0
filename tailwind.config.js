module.exports = {
  content: ["./src/**/*.css", "./**.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        heroSection:
          "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.5) 100%), url('/assets/heroSection.jpeg')",
        productSection:
          "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%), url('/assets/dishplate.png')",
      },
    },
    fontFamily: {
      sans: "Inter",
      megrim: "Megrim",
    },
  },
  plugins: [],
};
