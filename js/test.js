fetch("menu.json")
  .then((response) => response.JSON())
  .then((data) => createHTML(data));

function createHTML(data) {
  for (const category of Object.keys(data)) {
    const container = document.createElement("div");
    container.classList.add("accordian-container");
    container.addEventListener("click", () => {
      container.classList.toggle("active");
    });
    container.innerHTML = `
    <div class="question">${category}</div>
      <div class="answer">
        <h3>${category}</h3>
        <ul>
        ${data[category].map(
          (dish) => `
          <li>
            <p>${dish.name}</p>
            <p>${dish.price}</p>
          </li>`
        )}
        </ul>
      </div>
    </div>
  `;
  }
}
