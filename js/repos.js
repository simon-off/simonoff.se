import repos from "./repo-data";

const reposContainer = document.querySelector(".repos");

console.log(repos);

let index = 0;
for (const repo of repos) {
  const articleEl = document.createElement("article");
  articleEl.classList.add("repo");
  articleEl.style.animationDelay = `${index * 200}ms`;
  articleEl.innerHTML = `
  <div class="text">
    <h3>${index + 1} ${repo.name ?? ""}</h3>
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
