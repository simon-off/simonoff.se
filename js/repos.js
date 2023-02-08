import repos from "./repo-data";

const reposContainer = document.querySelector(".repos");

console.log(repos);

for (const repo of repos) {
  const articleEl = document.createElement("article");
  articleEl.classList.add("repo");
  articleEl.innerHTML = `
    <div>
      <h3>${repo.name ?? ""}</h3>
      <p>${repo.description ?? ""}</p>
    </div>
    <div>
      <a href="https://github.com/simon-off/${repo.name ?? ""}">github</a>
      ${repo.demoUrl && `<a href="${repo.demoUrl}">demo</a>`}
    </div>
  `;

  reposContainer.append(articleEl);
}
