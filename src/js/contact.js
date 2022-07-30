const navbar = document.getElementById("navbar");
const toggleButton = document.querySelector("#toggle");
const navbarLinks = document.querySelector("#navbarLinks");
const darkModeToggle = document.querySelector("#theme_icon");
const html = document.querySelector("html");
/**
 * @type HTMLFormElement
 */
const form = document.querySelector("#submitForm");

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

window.addEventListener("scroll", () => {
  if (window.scrollY > 2) {
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

// darkModeToggle.addEventListener("click", () => {
//   html.classList.toggle("dark");
//   modifyThemeInLocalStorage();
//   navbar.classList.remove("bg-white");
//   navbar.classList.remove("bg-[#272727]");
// });

const navbar_logo = document.getElementById("navbar_logo");
// const themeIcon = document.getElementById("theme_icon");
const datatorBigLogo = document.getElementById("datatorbig_logo");
const footerSmallLogo = document.getElementById("footersmall_logo");
const homeIcon = document.getElementById("home_icon");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (!isDarkModeOn()) {
        navbar_logo.setAttribute("src", "/assets/datatorlogo.svg");
        // themeIcon.setAttribute("src", "/assets/darkmodeicon.svg");
        datatorBigLogo.setAttribute("src", "/assets/datatorlogo.svg");
        footerSmallLogo.setAttribute("src", "/assets/datatorlogo.svg");
        homeIcon.setAttribute("src", "assets/homeicon-dark.svg");
      } else {
        navbar_logo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        // themeIcon.setAttribute("src", "/assets/lightmodeicon.svg");
        datatorBigLogo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        footerSmallLogo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        homeIcon.setAttribute("src", "assets/homeicon.svg");
      }
    }
  });
});

observer.observe(document.querySelector("html"), { attributes: true });


// document.getElementById("submitbtn").addEventListener("click", (event) => {
//   event.preventDefault();
//   /**
//    * @type HTMLTextAreaElement
//    */
//   const textArea = document.querySelector("#message");
//   /**
//    * @type HTMLInputElement
//    */
//   const name = document.querySelector("#name");
//   /**
//    * @type HTMLInputElement
//    */
//   const email = document.querySelector("#email");

//   const tempAnchorLink = document.querySelector("a");
//   tempAnchorLink.setAttribute(
//     "href",
//     `mailto:info@datator.tech?cc=${email.value}&subject=Query from ${name.value}&body=${textArea.value}`
//   );
//   tempAnchorLink.click();

//   tempAnchorLink.remove();
// });
