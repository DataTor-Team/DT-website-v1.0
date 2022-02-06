const navbar = document.querySelector("nav");
const toggleButton = document.querySelector("#toggle");
const navbarLinks = document.querySelector("#navbarLinks");
const darkModeToggle = document.querySelector("#dark-mode-button");
const html = document.querySelector("html");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("left-0");
  navbarLinks.classList.toggle("left-full");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("bg-white");
    navbar.classList.add("boxshadow");
  } else {
    navbar.classList.remove("bg-white");
    navbar.classList.remove("boxshadow");
  }
});

darkModeToggle.addEventListener("click", () => html.classList.toggle("dark"));
