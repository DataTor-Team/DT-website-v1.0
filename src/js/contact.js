const navbar = document.getElementById("navbar");
const toggleButton = document.querySelector("#toggle");
const navbarLinks = document.querySelector("#navbarLinks");
const darkModeToggle = document.querySelector("#theme_icon");
const html = document.querySelector("html");
/**
 * @type HTMLFormElement
 */
const form = document.querySelector("#submitForm");

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
});

const navbar_logo = document.getElementById("navbar_logo");
const themeIcon = document.getElementById("theme_icon");
const datatorBigLogo = document.getElementById("datatorbig_logo");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (navbar_logo.src.includes("/assets/datatorlogo.svg")) {
        // dark to light
        navbar_logo.setAttribute("src", "/assets/datatorlogo-dark.svg");
        themeIcon.setAttribute("src", "/assets/lightmodeicon.svg");
        datatorBigLogo.setAttribute("src", "/assets/datatorlogo-dark.svg");
      } else {
        // light to dark
        navbar_logo.setAttribute("src", "/assets/datatorlogo.svg");
        themeIcon.setAttribute("src", "/assets/darkmodeicon.svg");
        datatorBigLogo.setAttribute("src", "/assets/datatorlogo.svg");
      }
    }
  });
});

observer.observe(document.querySelector("html"), { attributes: true });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  /**
   * @type HTMLTextAreaElement
   */
  const textArea = document.querySelector("#message");
  /**
   * @type HTMLInputElement
   */
  const name = document.querySelector("#name");
  /**
   * @type HTMLInputElement
   */
  const email = document.querySelector("#email");

  const tempAnchorLink = document.querySelector("a");
  tempAnchorLink.setAttribute(
    "href",
    `mailto:info@datator.tech?cc=${email.value}&subject=Query from ${name.value}&body=${textArea.value}`
  );
  tempAnchorLink.click();
});
