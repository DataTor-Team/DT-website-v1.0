const navbar = document.getElementById("navbar");
const toggleButton = document.querySelector("#toggle");
const navbarLinks = document.querySelector("#navbarLinks");
const darkModeToggle = document.querySelector("#theme_icon");
const html = document.querySelector("html");


toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("left-0");
  navbarLinks.classList.toggle("left-full");
});

window.onscroll = () => {
  console.log("HEllo WOLRD - 1");
  if (window.scrollY > 0) {
    navbar.classList.add("bg-white");
    navbar.classList.add("boxshadow");
    console.log("i am inside");
  } else {
    navbar.classList.remove("bg-white");
    navbar.classList.remove("boxshadow");
  }
};

darkModeToggle.addEventListener("click", () => html.classList.toggle("dark"));

//Images needes to be cchanged
const navbar_logo = document.getElementById("navbar_logo");
const themeIcon = document.getElementById("theme_icon");
const heroLogo = document.getElementById("hero_logo");
const footerLogo = document.getElementById("footer_logo");
const HWSPLogo = document.getElementById("HWSP_logo");
const DTA_logo = document.getElementById("DTA_logo");
const footerSmallLogo = document.getElementById("footersmall_logo");
const WIDimageMobile = document.getElementById("WID_mobileimg");
const WIDimageDesktop = document.getElementById("WID_desktopimg")
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (navbar_logo.src.includes("/assets/datatorlogo-dark.svg")) {
        // dark to light
        navbar_logo.setAttribute("src", "/assets/datatorlogo.svg");
        footerSmallLogo.setAttribute("src", "/assets/datatorlogo.svg");
        themeIcon.setAttribute("src", "/assets/darkmodeicon.svg");
        heroLogo.setAttribute("src", "/assets/heroLogo.svg");
        footerLogo.setAttribute("src", "/assets/heroLogo.svg");
        HWSPLogo.setAttribute("src", "/assets/datatorlogo.svg");
        DTA_logo.setAttribute("src", "/assets/DTadvan_logo-dark.svg");
      } else {
        // light to dark
        
        navbar_logo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        footerSmallLogo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        themeIcon.setAttribute("src", "/assets/lightmodeicon.svg");
        heroLogo.setAttribute("src", "/assets/heroLogo-dark.svg");
        footerLogo.setAttribute("src", "/assets/heroLogo-dark.svg");
        HWSPLogo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        DTA_logo.setAttribute("src", "/assets/DTadvan_logo.svg");
      }
    }
  });
});

observer.observe(document.querySelector("html"), { attributes: true });
