const body = document.getElementsByTagName("body")[0];
const simonoff = document.getElementById("simonoff");
const toggle = document.getElementById("dark-mode-toggle");

let darkMode = localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false;

setColorMode(darkMode);

window.onload = () => {
  document.documentElement.classList.add("fade");
};

simonoff.addEventListener("click", () => {
  darkMode = !darkMode;
  setColorMode(darkMode);
});

function setColorMode(darkMode) {
  if (darkMode) {
    toggle.src = "assets/svg/sun.svg";
    body.classList.add("dark-mode");
  } else {
    toggle.src = "assets/svg/moon.svg";
    body.classList.remove("dark-mode");
  }
  localStorage.setItem("darkMode", darkMode);
}
