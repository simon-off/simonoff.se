import repos from "./repo-data";

const reposContainer = document.querySelector(".repos");

console.log(repos);

for (const repo of repos) {
  const articleEl = document.createElement("article");
  articleEl.classList.add("repo");
  articleEl.innerHTML = `
    <h3>${repo.name ?? ""}</h3>
    <p>${repo.description ?? ""}</p>
    <a href="https://github.com/simon-off/${repo.name ?? ""}">github</a>
    <a href="${repo.demoUrl}">${repo.demoUrl ? "demo" : ""}</a>
  `;

  reposContainer.append(articleEl);
}
