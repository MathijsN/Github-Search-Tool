const username = document.getElementById("github-username");
const form = document.getElementById("repos-form");
const list = document.getElementById("repos-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(username.value);

  fetch(`https://api.github.com/users/${username.value}/repos`)
    .then((res) => res.json())
    .then((data) => {
      list.innerHTML = "";
      data.forEach((repo) => {
        console.log(repo);
        list.insertAdjacentHTML(
          "beforeend",
          `
        <li><a href="${repo.html_url}">${repo.full_name}</a></li>
        `
        );

        // list.innerHTML += `
        // <li>${repo.full_name}</li>
        // `;
      });
    });
});
