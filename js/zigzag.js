const navlinks = document.querySelectorAll(".navlink");
const banner = document.querySelector(".banner");
const glasses = document.querySelector(".glasses");

function addClassesToElements(input, [class1, bp1], [class2, bp2], [class3, bp3]) {
  for (let i = 0; i < input.length; i++) {
    if (i < bp1) {
      input[i].classList.add(class1);
      continue;
    }
    if (i < bp2) {
      input[i].classList.add(class2);
      continue;
    }
    if (i < bp3) {
      input[i].classList.add(class3);
      continue;
    }
  }
}

function spanString(input) {
  let output = "";
  for (const char of input) {
    output += `<span>${char}</span>`;
  }
  return output;
}

function getRandomValue(max) {
  return Math.random() * max;
}

function translateChildrenZigZag(parent, max) {
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    const up = getRandomValue(max);
    const down = getRandomValue(max) - max;
    const left = (down / 6) * -1;
    const right = (up / 6) * -1;

    if (i % 2 != 0) {
      child.style.transform = `translate(${right}em, ${up}em)`;
    } else {
      child.style.transform = `translate(${left}em, ${down}em)`;
    }
  }
}

for (const el of navlinks) {
  el.innerHTML = spanString(el.innerText);
  el.addEventListener("mouseover", () => translateChildrenZigZag(el, 0.2));
  el.addEventListener("mouseout", () => translateChildrenZigZag(el, 0));

  const delayTime = 250;
  const delayMultiplier = delayTime / ((2 * Math.floor(el.children.length)) / 2);
  for (let i = el.children.length - 1; i >= 0; i--) {
    const randomness = getRandomValue(delayTime);

    el.children[i].style.animationDelay = `${
      Math.abs((i - el.children.length / 2) * delayMultiplier + delayMultiplier / 2) +
      delayMultiplier / 2 +
      randomness +
      Number(el.dataset.delay)
    }ms`;
  }
}

banner.innerHTML = spanString(banner.innerText);
addClassesToElements(banner.children, ["sim", 3], ["on", 5], ["off", 8]);
banner.addEventListener("mouseover", () => translateChildrenZigZag(banner, 0.125));
banner.addEventListener("mouseout", () => translateChildrenZigZag(banner, 0));
banner.addEventListener("click", () => {
  banner.classList.toggle("clicked");
  glasses.classList.toggle("clicked");
});
for (let i = banner.children.length - 1; i >= 0; i--) {
  banner.children[i].style.animationDelay = `${i * 100 + 100}ms`;
}
