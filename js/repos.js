import repos from "./repo-data";

const reposContainer = document.querySelector(".repos");

function convertRepoName(input) {
  return input
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let index = 0;
for (const repo of repos) {
  const articleEl = document.createElement("article");
  articleEl.classList.add("repo");
  articleEl.style.animationDelay = `${index * 200}ms`;
  articleEl.innerHTML = `
  <div class="text">
    <h3>${convertRepoName(repo.name) ?? ""}</h3>
    <p>${repo.description ?? ""}</p>
  </div>
  <div class="buttons">
    ${repo.demoUrl && `<a target="_blank" href="${repo.demoUrl}">demo</a>`}
    <a target="_blank" href="https://github.com/simon-off/${repo.name ?? ""}">github</a>
  </div>
  `;

  reposContainer.append(articleEl);
  index++;
}
