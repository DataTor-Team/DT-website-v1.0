const navbar = document.getElementById("navbar");
const toggleButton = document.querySelector("#toggle");
const navbarLinks = document.querySelector("#navbarLinks");
const darkModeToggle = document.querySelector("#theme_icon");
const html = document.querySelector("html");
var mode = true;
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

const dtfastenImg = document.getElementById("card_dtfastenimg");
const dtprovenImg = document.getElementById("card_dtprovenimg");
const navbar_logo = document.getElementById("navbar_logo");
const themeIcon = document.getElementById("theme_icon");
const overviewRightLogo = document.getElementById("overview_rightlogo");
const dtfastenRightLogo = document.getElementById("dtfasten_rightlogo");
const dtfastenRight = document.getElementById("dtfasten_right");
const dtprovenRight = document.getElementById("dtproven_right");
const dtprovenRightLogo = document.getElementById("dtproven_rightlogo");
const footerSmallLogo = document.getElementById("footersmall_logo");
const homeIcon = document.getElementById("home_icon");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (isDarkModeOn()) {
        // dark to light
        dtfastenImg.setAttribute("src", "/assets/dtfasten.png");
        navbar_logo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        themeIcon.setAttribute("src", "/assets/lightmodeicon.svg");
        dtprovenImg.setAttribute("src", "/assets/dtproven.png");
        overviewRightLogo.setAttribute("src", "/assets/rightSideLogo-dark.svg");
        dtfastenRightLogo.setAttribute("src", "/assets/rightSideLogo-dark.svg");
        dtprovenRightLogo.setAttribute("src", "/assets/dtprovenRightLogo.svg");
        dtfastenRight.setAttribute("src", "/assets/dtfasten.png");
        dtprovenRight.setAttribute("src", "/assets/dtproven.png");
        footerSmallLogo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        homeIcon.setAttribute("src", "assets/homeicon.svg");
      } else {
        // light to dark
        dtfastenImg.setAttribute("src", "/assets/dtfastendark.png");
        navbar_logo.setAttribute("src", "/assets/datatorlogo.svg");
        themeIcon.setAttribute("src", "/assets/darkmodeicon.svg");
        dtprovenImg.setAttribute("src", "/assets/dtprovendark.png");
        overviewRightLogo.setAttribute("src", "/assets/rightSideLogo.svg");
        dtfastenRightLogo.setAttribute("src", "/assets/rightSideLogo.svg");
        dtprovenRightLogo.setAttribute(
          "src",
          "/assets/dtprovenRightLogo-dark.svg"
        );
        dtfastenRight.setAttribute("src", "/assets/dtfastendark.png");
        dtprovenRight.setAttribute("src", "/assets/dtprovendark.png");
        footerSmallLogo.setAttribute("src", "/assets/datatorlogo.svg");
        homeIcon.setAttribute("src", "assets/homeicon-dark.svg");
      }
    }
  });
});

observer.observe(document.querySelector("html"), { attributes: true });
