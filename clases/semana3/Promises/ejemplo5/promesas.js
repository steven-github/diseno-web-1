$(document).ready(function () {
  console.log("Antes de la peticion");
  $.get("https://reqres.in/api/users")
    .then((respuesta) => {
      console.log("Primera llamada");
      console.log(respuesta);
      return respuesta.data;
    })
    .then((respuesta) => {
      console.log("Segunda llamada");
      console.log(respuesta);
      return respuesta[0];
    })
    .then((respuesta) => {
      console.log("Tercera llamada");
      console.log(respuesta);
      return respuesta.data[0];
    });
  console.log("Despues de todas las peticiones");
});
