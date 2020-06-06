function validaForm() {
  var verificar = true;
  var expRegNombre = /^[a-zA-ZÃ‘Ã±ÃÃ¡Ã‰Ã©ÃÃ­Ã“Ã³ÃšÃºÃœÃ¼\s]+$/;
  var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var formulario = document.getElementById("contacto_frm");

  var nombre = document.getElementById("nombre");
  var edad = document.getElementById("edad");
  var email = document.getElementById("email");
  var masculino = document.getElementById("M");
  var femenino = document.getElementById("F");
  var asunto = document.getElementById("asunto");
  var comentarios = document.getElementById("comentarios");

  if (!nombre.value) {
    alert("Por favor ingrese su nombre.");
    nombre.focus();
    verificar = false;
  } else if (!expRegNombre.exec(nombre.value)) {
    alert("El compo nombre no acepta numeros.");
    nombre.focus();
    verificar = false;
  } else if (!edad.value) {
    alert("La edad es requerida.");
    edad.focus();
    verificar = false;
  } else if (isNaN(edad.value)) {
    alert("El campo edad solo acepta numeros");
    edad.focus();
    verificar = false;
  } else if (edad.value < 18 || edad.value > 60) {
    alert(
      "Debes estar entre un rango de edad de 18 a 60 años, para registrarse."
    );
    edad.focus();
    verificar = false;
  } else if (!email.value) {
    alert("Por favor ingrese su email.");
    email.focus();
    verificar = false;
  } else if (!expRegEmail.exec(nombre.value)) {
    alert("El compo email no es valido.");
    email.focus();
    verificar = false;
  } else if (!masculino.checked && !femenino.checked) {
    alert("El campo sexo es requerido.");
    masculino.focus();
    verificar = false;
  } else if (!asunto.value) {
    alert("El asunto es requerido.");
    asunto.focus();
    verificar = false;
  } else if (!comentarios.value) {
    alert("El campo comentarios es requerido");
    comentarios.focus();
    verificar = false;
  } else if (comentarios.value.length > 255) {
    alert("El comentario es demasiado largo.");
    comentarios.focus();
    verificar = false;
  }

  if (verificar) {
    alert("Se ha enviado el formulario");
    document.contacto_frm.submit();
  }
}

function limpiarForm() {
  alert("Limpiando");
  document.getElementById("contacto-frm").reset();
}

window.onload = function () {
  var botonEnviar;
  var botonLimpiar;
  botonLimpiar = document.getElementById("limpiar");
  botonLimpiar.onclick = limpiarForm();

  botonEnviar = document.contacto_frm.enviar_btn;
  botonEnviar.onclick = validaForm();
};
