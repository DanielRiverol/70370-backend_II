const getbutton = document.querySelector('button[type="button"]'),
  form = document.querySelector("#create-user");

getbutton.addEventListener("click", () => {
  fetch("http://localhost:3000/test")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      crearHtml(data);
    }).catch((err)=>{
      console.log(err)
    });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  console.log(name);
  fetch("http://localhost:3000/test", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      crearHtml(data.users);
    });
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

//fetch que accede a la ruta /
fetch("http://localhost:3000")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("h1").innerHTML = data.title;
  });
