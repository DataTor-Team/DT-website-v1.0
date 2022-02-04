const navbar = document.querySelector("nav");
const toggleButton = document.querySelector("#toggle");
const navbarLinks = document.querySelector("#navbarLinks");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("left-0");
  navbarLinks.classList.toggle("left-full");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("bg-white");
    // navbar.classList.remove("sticky");
  } else {
    navbar.classList.remove("bg-white");
    // navbar.classList.add("sticky");
  }
});
