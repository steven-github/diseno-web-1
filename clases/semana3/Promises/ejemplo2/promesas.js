"use strict";
var promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;

  let log = document.getElementById("log");
  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount +
      ") Code Started (<small>Empieza el codigo sincrono</small>)<br>"
  );
  let p1 = new Promise((resolve, reject) => {
    log.insertAdjacentHTML(
      "beforeend",
      thisPromiseCount +
        ") Dentro de la promsea, antes del Timeout (<small>Empieza el codigo sincrono</small>)<br>"
    );
    window.setTimeout(() => {
      resolve(thisPromiseCount);
    }, Math.random() * 4000 + 1000);
  });

  p1.then(function (val) {
    log.insertAdjacentHTML(
      "beforeend",
      val +
        ") Codigo dentro del THEN (<small>Codigo asincrono terminado</small>)<br>"
    );
  }).catch((reason) => {
    console.log("Handle reject promise(" + reason + ")");
  });

  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount +
      ") Codigo debajo del THEN (<small>Codigo asincrono terminado</small>)<br>"
  );
}

$(document).ready(function () {
  console.log(window.Promise);
  if ("Promise" in window) {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", testPromise);
  } else {
    log = document.getElementById("log");
    log.innerHTML = "Tu navegador no soporta promesas";
  }
});
