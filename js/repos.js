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
  articleEl.style.setProperty("--title", `"${repo.description.repeat(4)}"`);
  if (mediaQuery.matches) {
    articleEl.style.animationDelay = `${index * 150}ms`;
  }
  articleEl.innerHTML = `
  <div class="repo-inner">
    <div class="text">
      <h3>${convertRepoName(repo.name) ?? ""}</h3>
      <p>${repo.description ?? ""}</p>
      <ul>${repo.topics.map((tag) => `<li>${tag}</li>`).join(" ")}</ul>
    </div>
      <div class="buttons">
      ${repo.demoUrl && `<a target="_blank" href="${repo.demoUrl}">demo</a>`}
      ${repo.repoUrl && `<a target="_blank" href="${repo.repoUrl}">github</a>`}
    </div>
  </div>
  `;

  reposContainer.append(articleEl);
  index++;
}
