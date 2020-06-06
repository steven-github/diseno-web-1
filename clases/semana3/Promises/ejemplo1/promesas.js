"use strict";
let miPrimeraPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 2000);
});

$(document).ready(function () {
  console.log(window.Promise);
  if ("Promise" in window) {
    miPrimeraPromesa.then(function (data) {
      console.log(data);
    });
  } else {
    alert("Tu navegador no soporta promesas.");
  }
});
