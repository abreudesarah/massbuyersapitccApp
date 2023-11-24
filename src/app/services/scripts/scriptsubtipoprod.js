const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.querySelector(".nome");
const itipoprod = document.querySelector(".tipoprod");


function cadastrar(){
  fetch("http://localhost8080/subtipos",
  {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application-json"
    },
    method: "POST",
    body: JSON.stringify({
      nome: inome.value,
      tipoprod: itipoprod.value
    })
  })

  .then(function (res) { console.log(res) })
  .catch(function (res) { console.log(res) })
}
