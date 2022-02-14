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

window.onscroll = () => {
  if (window.scrollY > 0) {
    if (mode) {
      navbar.classList.add("bg-white");
    } else {
      navbar.classList.add("bg-[#272727]");
    }
    navbar.classList.add("boxshadow");
  } else {
    if (mode) {
      navbar.classList.remove("bg-white");
    } else {
      navbar.classList.remove("bg-[#272727]");
    }
    navbar.classList.remove("boxshadow");
  }
};

darkModeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  mode = !mode;
  navbar.classList.remove("bg-white");
  navbar.classList.remove("bg-[#272727]");
  // if (screen.width > "768px") {
  //   navbarLinks.classList.remove("bg-white");
  //   navbarLinks.classList.remove("bg-[272727]");
  // }
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

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (dtfastenImg.src.includes("/assets/dtfastendark.png")) {
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
      }
    }
  });
});

observer.observe(document.querySelector("html"), { attributes: true });
