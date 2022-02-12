const dtfastenImg = document.getElementById("dtfasten");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (dtfastenImg.src.includes("/assets/dtfastendark.png")) {
        dtfastenImg.setAttribute(
          "src",
          "http://localhost:3000/assets/dtfasten.png"
        );
      } else {
        dtfastenImg.setAttribute(
          "src",
          "http://localhost:3000/assets/dtfastendark.png"
        );
      }
    }
  });
});

observer.observe(document.querySelector("html"), { attributes: true });
