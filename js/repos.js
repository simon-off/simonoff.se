import { repos } from "./repos-data";

const reposContainer = document.querySelector(".repos");
const mediaQuery = window.matchMedia(`(min-height: ${1000}px)`);

for (const [index, repo] of repos.entries()) {
  const articleEl = document.createElement("article");

  articleEl.classList.add("repo", "observe");
  articleEl.style.setProperty("--title", `"${repo.description.repeat(4)}"`);
  if (mediaQuery.matches) {
    articleEl.style.animationDelay = `${index * 150}ms`;
  }

  articleEl.innerHTML = /*html*/`
    <div class="repo-inner">
      <div class="text">
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <ul>${repo.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
      </div>
      <div class="buttons">
        ${repo.demoUrl ? `<a target="_blank" href="${repo.demoUrl}">demo</a>` : ""}
        ${repo.repoUrl ? `<a target="_blank" href="${repo.repoUrl}">github</a>` : ""}
      </div>
    </div>
  `;

  articleEl.addEventListener("mousemove", (e) => {
    const { left, top } = articleEl.getBoundingClientRect();
    articleEl.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    articleEl.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  });

  reposContainer.append(articleEl);
}
