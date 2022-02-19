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
  isDarkModeOn() ? html.classList.add("dark") : html.classList.remove("dark")
  navbar.classList.remove("bg-white");
  navbar.classList.remove("bg-[#272727]");
}

const isDarkModeOn = () => localStorage.getItem("theme") === "dark";

const modifyThemeInLocalStorage = () => {
  html.classList.contains("dark") ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
}

window.onscroll = () => {
  if (window.scrollY > 0) {
    if (!isDarkModeOn()) {
      navbar.classList.add("bg-white");
    } else {
      navbar.classList.add("bg-[#272727]");
    }
    navbar.classList.add("boxshadow");
  } else {
    if (!isDarkModeOn()) {
      navbar.classList.remove("bg-white");
    } else {
      navbar.classList.remove("bg-[#272727]");
    }
    navbar.classList.remove("boxshadow");
  }
};

darkModeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  modifyThemeInLocalStorage();
  navbar.classList.remove("bg-white");
  navbar.classList.remove("bg-[#272727]");
});

const navbar_logo = document.getElementById("navbar_logo");
const themeIcon = document.getElementById("theme_icon");
const datatorBigLogo = document.getElementById("datatorbig_logo");
const footerSmallLogo = document.getElementById("footersmall_logo");
const homeIcon = document.getElementById("home_icon");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (!isDarkModeOn()) {
        navbar_logo.setAttribute("src", "/assets/datatorlogo.svg");
        themeIcon.setAttribute("src", "/assets/darkmodeicon.svg");
        datatorBigLogo.setAttribute("src", "/assets/datatorlogo.svg");
        footerSmallLogo.setAttribute("src", "/assets/datatorlogo.svg");
        homeIcon.setAttribute("src","assets/homeicon-dark.svg")
      } else {
        navbar_logo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        themeIcon.setAttribute("src", "/assets/lightmodeicon.svg");
        datatorBigLogo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        footerSmallLogo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        homeIcon.setAttribute("src", "assets/homeicon.svg")
      }
    }
  });
});

observer.observe(document.querySelector("html"), { attributes: true });
