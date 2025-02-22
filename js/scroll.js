import smoothscrollAnchorPolyfill from "smoothscroll-anchor-polyfill";
smoothscrollAnchorPolyfill;

//===========================================================//
//+++ viewing observer +++||---------------------------------//
//===========================================================//

const viewObserver = new IntersectionObserver(entries => {
  entries.forEach(({ target, isIntersecting }) => {
    isIntersecting
      ? target.classList.add("viewed", "viewing")
      : target.classList.remove("viewing");
  });
}, { threshold: 0.25 });

for (const element of document.querySelectorAll(".observe")) {
  viewObserver.observe(element);
}

//===========================================================//
//+++ typewriter observer +++||------------------------------//
//===========================================================//

let printIntervalIDs = {};
let deleteIntervalIDs = {};

const typewriterObserver = new IntersectionObserver(entries => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      printIntervalIDs[target.dataset.text] = setInterval(() => {
        if (target.textContent.length < target.dataset.text.length) {
          target.textContent += target.dataset.text[target.textContent.length];
        } else {
          target.classList.add("full");
        }
      }, Math.floor(Math.random() * 100) + 100);
      clearInterval(deleteIntervalIDs[target.dataset.text]);
    } else {
      deleteIntervalIDs[target.dataset.text] = setInterval(() => {
        if (target.textContent.length > 0) {
          target.textContent = target.textContent.substring(0, target.textContent.length - 1);
          target.classList.remove("full");
        }
      }, Math.floor(Math.random() * 50) + 75);
      clearInterval(printIntervalIDs[target.dataset.text]);
    }
  });
}, { threshold: 1 });

for (const element of document.querySelectorAll(".typewriter")) {
  element.textContent = "";
  typewriterObserver.observe(element);
}

//===========================================================//
//+++ to-top button +++||------------------------------------//
//===========================================================//

const toTopButton = document.querySelector("#to-top");
toTopButton.style.setProperty("--transition-time", "500ms");
toTopButton.style.setProperty("--transition-delay", "150ms");

const topObserver = new IntersectionObserver(entries => {
  entries.forEach(({ isIntersecting }) => {
    isIntersecting
      ? toTopButton.classList.remove("show")
      : toTopButton.classList.add("show");
  });
}, { rootMargin: "-8px" });

topObserver.observe(document.querySelector("header"));
