const reposElement = document.querySelector(".repos");

reposElement.onmousemove = (e) => {
  for (const repo of document.querySelectorAll(".repo")) {
    const rect = repo.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    repo.style.setProperty("--mouse-x", `${x}px`);
    repo.style.setProperty("--mouse-y", `${y}px`);
  }
};
