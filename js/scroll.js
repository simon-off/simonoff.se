import smoothscrollAnchorPolyfill from "smoothscroll-anchor-polyfill";
smoothscrollAnchorPolyfill;

//===========================================================//
//+++ viewing observer +++||---------------------------------//
//===========================================================//

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("viewed", "viewing");
      } else {
        entry.target.classList.remove("viewing");
      }
    });
  },
  { threshold: 0.5 }
);

const observeElements = document.querySelectorAll(".observe");
for (let element of observeElements) {
  observer.observe(element);
}

//===========================================================//
//+++ typewriter observer +++||------------------------------//
//===========================================================//

let printIntervalIDs = {};
let deleteIntervalIDs = {};

const typewriterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;

      if (entry.isIntersecting) {
        printIntervalIDs[el.dataset.text] = setInterval(() => {
          if (el.textContent.length < el.dataset.text.length) {
            el.textContent += el.dataset.text[el.textContent.length];
          } else {
            el.classList.add("full");
          }
        }, Math.floor(Math.random() * 100) + 150);
        clearInterval(deleteIntervalIDs[el.dataset.text]);
      } else {
        deleteIntervalIDs[el.dataset.text] = setInterval(() => {
          if (el.textContent.length > 0) {
            el.textContent = el.textContent.substring(0, el.textContent.length - 1);
            el.classList.remove("full");
          }
        }, Math.floor(Math.random() * 50) + 75);
        clearInterval(printIntervalIDs[el.dataset.text]);
      }
    });
  },
  { threshold: 1 }
);

const typewriterElements = document.querySelectorAll(".typewriter");
for (let element of typewriterElements) {
  element.textContent = "";
  typewriterObserver.observe(element);
}
