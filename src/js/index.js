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


(function (root, smoothScroll) {
  'use strict';

  // Support RequireJS and CommonJS/NodeJS module formats.
  // Attach smoothScroll to the `window` when executed as a <script>.

  // RequireJS
  if (typeof define === 'function' && define.amd) {
    define(smoothScroll);

  // CommonJS
  } else if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = smoothScroll();

  } else {
    root.smoothScroll = smoothScroll();
  }

})(this, function(){
'use strict';

// Do not initialize smoothScroll when running server side, handle it in client:
if (typeof window !== 'object') return;

// We do not want this script to be applied in browsers that do not support those
// That means no smoothscroll on IE9 and below.
if(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) { return; }

// Get the top position of an element in the document
var getTop = function(element, start) {
    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
    if(element.nodeName === 'HTML') return -start
    return element.getBoundingClientRect().top + start
}
// ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }

// calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)
var position = function(start, end, elapsed, duration) {
    if (elapsed > duration) return end;
    return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
    // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
}

// we use requestAnimationFrame to be called by the browser before every repaint
// if the first argument is an element then scroll to the top of this element
// if the first argument is numeric then scroll to this location
// if the callback exist, it is called when the scrolling is finished
// if context is set then scroll that element, else scroll window
var smoothScroll = function(el, duration, callback, context){
    duration = duration || 500;
    context = context || window;
    var start = context.scrollTop || window.pageYOffset;

    if (typeof el === 'number') {
      var end = parseInt(el);
    } else {
      var end = getTop(el, start);
    }

    var clock = Date.now();
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){window.setTimeout(fn, 15);};

    var step = function(){
        var elapsed = Date.now() - clock;
        if (context !== window) {
          context.scrollTop = position(start, end, elapsed, duration);
        }
        else {
          window.scroll(0, position(start, end, elapsed, duration));
        }

        if (elapsed > duration) {
            if (typeof callback === 'function') {
                callback(el);
            }
        } else {
            requestAnimationFrame(step);
        }
    }
    step();
}

var linkHandler = function(ev) {
    if (!ev.defaultPrevented) {
        ev.preventDefault();

        if (location.hash !== this.hash) window.history.pushState(null, null, this.hash)
        // using the history api to solve issue #1 - back doesn't work
        // most browser don't update :target when the history api is used:
        // THIS IS A BUG FROM THE BROWSERS.
        // change the scrolling duration in this call
        var node = document.getElementById(this.hash.substring(1))
        if (!node) return; // Do not scroll to non-existing node

        smoothScroll(node, 500, function (el) {
            location.replace('#' + el.id)
            // this will cause the :target to be activated.
        });
    }
}

// We look for all the internal links in the documents and attach the smoothscroll function
document.addEventListener("DOMContentLoaded", function () {
    var internal = document.querySelectorAll('a[href^="#"]:not([href="#"])'), a;
    for(var i=internal.length; a=internal[--i];){
        a.addEventListener("click", linkHandler, false);
    }
});

// return smoothscroll API
return smoothScroll;

});
