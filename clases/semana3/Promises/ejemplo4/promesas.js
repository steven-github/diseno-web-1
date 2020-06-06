$(document).ready(function () {
  console.log("Antes de la petición");
  $.get("https://reqres.in/api/users").then((respuesta) => {
    console.log("dentro del then");
    console.log(respuesta);
  });
  console.log("después de la petición");
});

$(document).ready(function () {
  console.log("Antes de la petición");
  $.get("https://reqresxxx.in/api/users").catch((respuesta) => {
    console.log("dentro del catch");
    console.log(respuesta);
  });
  console.log("después de la petición");
});
