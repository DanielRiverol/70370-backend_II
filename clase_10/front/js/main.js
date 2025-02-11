const getbutton = document.querySelector('button[type="button"]'),
  form = document.querySelector("#create-user");


getbutton.addEventListener("click", () => {});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  console.log(name);
});
const crearHtml = (users) => {
  const userContainer = document.querySelector(".user-container");
  userContainer.innerHTML = "";
  let html;
  users.forEach((element) => {
    html = `<p>${element}</p>`;
    userContainer.innerHTML += html;
  });
};
