import smoothscrollAnchorPolyfill from "smoothscroll-anchor-polyfill";

smoothscrollAnchorPolyfill;

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
  { rootMargin: "-100px" }
);

const observeElements = document.querySelectorAll(".observe");
for (let element of observeElements) {
  observer.observe(element);
}
