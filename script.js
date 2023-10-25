//alert("Hola este es mi Javascript");

//let nombre = "Johan";
//nombre = "Mario";

//var nombre1 = "Johan";

//const nombre2 = "Johan";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS

document.addEventListener("DOMContentLoaded", function() {
    let contenidotitulo = "Johan";

    let titulo = document.querySelector(".encabezado");
    titulo.innerHTML = contenidotitulo;

    //CONDICIONALES
    let textoTitulo = titulo.innerText;
    console.log(textoTitulo);

    if (textoTitulo == "Nombre") {
        titulo.innerHTML = "Otro";
    } else {
        console.log("no se cumple");
    }


//FUNCIONES

let nombre2 = "Mario";
let ciudad = "Bogota";
let gusto = "pool";

let parrafo2 = document.querySelector(".parrafo-2");

function cambiarTexto(nombre2, ciudad, gusto) {
    let contenido = `Mi nombre es ${nombre2}, 
    tengo 25 años de edad, nacido y criado en el 
    municipio de ${ciudad}. 
    Soltero. Ingeniero ambiental desde el 2021, 
    me dedico al mundo del emprendimiento digital;
    Dropshipping desde el 2021. me gusta el ${gusto}.`;

    return contenido;
}

parrafo2.innerText = cambiarTexto(nombre2, ciudad, gusto);

//SCRIPT PARA FORMULARIO


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

}); 
