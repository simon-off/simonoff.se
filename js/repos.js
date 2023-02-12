import repos from "./repo-data";

const reposContainer = document.querySelector(".repos");

function convertRepoName(input) {
  return input
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// If the entirety of reposContainer fits on screen:
const mediaQuery = window.matchMedia(`(min-height: ${1000}px)`);

let index = 0;
for (const repo of repos) {
  const articleEl = document.createElement("article");
  articleEl.classList.add("repo", "observe");
  if (mediaQuery.matches) {
    articleEl.style.animationDelay = `${index * 150}ms`;
  }
  articleEl.innerHTML = `
  <div class="text">
    <h3>${convertRepoName(repo.name) ?? ""}</h3>
    <p>${repo.description ?? ""}</p>
    <ul>${repo.topics.map((tag) => `<li>${tag}</li>`).join(" ")}</ul>
  </div>
  <div class="buttons">
    ${repo.demoUrl && `<a target="_blank" href="${repo.demoUrl}">demo</a>`}
    <a target="_blank" href="https://github.com/simon-off/${repo.name ?? ""}">github</a>
  </div>
  `;

  reposContainer.append(articleEl);
  index++;
}
