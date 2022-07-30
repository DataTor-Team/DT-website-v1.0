const navbar = document.getElementById("navbar");
const toggleButton = document.querySelector("#toggle");
const navbarLinks = document.querySelector("#navbarLinks");
const darkModeToggle = document.querySelector("#theme_icon");
const html = document.querySelector("html");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("left-0");
  navbarLinks.classList.toggle("left-full");
});

window.onload = () => {
  isDarkModeOn() ? html.classList.add("dark") : html.classList.remove("dark");
  navbar.classList.remove("bg-white");
  navbar.classList.remove("bg-[#272727]");
};

const isDarkModeOn = () => localStorage.getItem("theme") === "dark";

const modifyThemeInLocalStorage = () => {
  html.classList.contains("dark")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
};

const maindiv = document.getElementById("main");
maindiv.addEventListener("scroll", () => {
  if (maindiv.scrollTop > 2) {
    console.log(maindiv.scrollTop);
    if (!isDarkModeOn()) {
      navbar.style.backgroundColor = "white";
    } else {
      navbar.style.backgroundColor = "#272727";
    }
    navbar.classList.add("boxshadow");
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.classList.remove("boxshadow");
  }
});

darkModeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  modifyThemeInLocalStorage();
  navbar.classList.remove("bg-white");
  navbar.classList.remove("bg-[#272727]");
});

const navbar_logo = document.getElementById("navbar_logo");
const themeIcon = document.getElementById("theme_icon");
const rightSideLogo = document.getElementById("rightside_logo");
const homeIcon = document.getElementById("home_icon");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (isDarkModeOn()) {
        // dark to light
        navbar_logo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        themeIcon.setAttribute("src", "/assets/lightmodeicon.svg");
        rightSideLogo.setAttribute("src", "assets/rightSideLogo-dark.svg");
        homeIcon.setAttribute("src", "assets/homeicon.svg");
      } else {
        // light to dark
        navbar_logo.setAttribute("src", "/assets/datatorlogo.svg");
        themeIcon.setAttribute("src", "/assets/darkmodeicon.svg");
        rightSideLogo.setAttribute("src", "assets/rightSideLogo.svg");
        homeIcon.setAttribute("src", "assets/homeicon-dark.svg");
      }
    }
  });
});

observer.observe(document.querySelector("html"), { attributes: true });

// document.querySelector("#form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   axios.post("https://dt-backend-server.herokuapp.com/register", {
//     name: document.querySelector("#name").value,
//     email: document.querySelector("#email").value,
//     message: document.querySelector("#message").value,
//     // phone: document.querySelector("#phone").value,
//   });
// });
