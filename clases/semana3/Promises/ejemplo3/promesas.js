$(document).ready(function () {
  console.log("Antes de la peticion");
  $.get("https://reqres.in/api/users").then((respuesta) => {
    console.log(respuesta);
  });
  console.log("Despues de la peticion");
});
