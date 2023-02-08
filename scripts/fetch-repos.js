import fs from "fs";

const repoNames = [
  "electricity-calculator",
  "analog-clock",
  "frutti-di-mare",
  "snek",
  "another-movie-database",
  "react-todo",
  "bpm-tap",
  "auto-slicer",
  "tiny-bookstore",
];

function filterData(data) {
  return {
    name: data.name,
    description: data.description,
    repoUrl: data.html_url,
    demoUrl: data.homepage,
    topics: data.topics,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    pushedAt: data.pushed_at,
  };
}

const filteredRepos = [];

for (const name of repoNames) {
  const response = await fetch(`https://api.github.com/repos/simon-off/${name}`);
  const data = await response.json();
  filteredRepos.push(filterData(data));
}

const json = JSON.stringify(filteredRepos);

fs.writeFile("./js/repo-data.json", json, (err) => {
  if (err) throw err;
  console.log("Saved data successfully!");
});
