const main = document.getElementById("simonoff");
const sheet = document.getElementById("main-stylesheet").sheet;
const toggle = document.getElementById("color-mode-toggle");

let colorMode = localStorage.getItem("colorMode") ? localStorage.getItem("colorMode") : "light";

changeColorMode(colorMode);

toggle.addEventListener("click", () => {
	if (colorMode == "light") {
		changeColorMode("dark");
		colorMode = "dark";
		return;
	}
	changeColorMode("light");
	colorMode = "light";
});

function changeColorMode(mode) {
	mode == "light" ? (toggle.src = "assets/svg/moon.svg") : (toggle.src = "assets/svg/sun.svg");
	sheet.deleteRule(0);
	sheet.insertRule(`@import "colors-${mode}.css";`, 0);
	localStorage.setItem("colorMode", mode);
}
