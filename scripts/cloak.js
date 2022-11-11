const cloaked = document.querySelector("#cloaked");

const address =
  "bailto".replace("b", "m") +
  String.fromCharCode(58) +
  "hi" +
  String.fromCharCode(64) +
  "simonoff.se";

cloaked.href = address;
cloaked.textContent = "hi@simonoff.se";
