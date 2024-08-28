//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!


// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


const $botonEnviar = document.querySelector('#botonEnviar');


$botonEnviar.onclick = function() {

const $primerNombreUsuario = document.querySelector('#primerNombreUsuario').value;
const $segundoNombreUsuario = document.querySelector('#segundoNombreUsuario').value;
const $apellidoUsuario = document.querySelector('#apellidoUsuario').value;
const $edadUsuario = document.querySelector('#edadUsuario').value;

const $informacion = document.querySelector('#informacion');
$informacion.value = (`Nombres: ${$primerNombreUsuario} ${$segundoNombreUsuario}, Apellido: ${$apellidoUsuario}, Edad: ${edadUsuario} `);

document.querySelector('h1').innerText = `Bienvenido ${$primerNombreUsuario}}`;
 
}

///document.addEventListener('DOMContentLoaded', function() {
///const $botonEnviar = document.querySelector('#botonEnviar');

/*
Acceso a los valores: Utiliza .value para obtener el texto de los campos de entrada.
Formato del texto: Usa la interpolación de cadenas para combinar los valores en un mensaje.
Actualización del <h1>: Incluye el primer nombre del usuario en el mensaje de bienvenida
*/




















///////////////////////////////////////////////////////////////////////

const $botonEnviar = document.querySelector("#botonEnviar");

$botonEnviar.onclick = function () {
    let nombreUsuario = document.querySelector("#nombreUsuario").value;
    let segundoNombreUsuario = document.querySelector("#segundoNombreUsuario").value;
    let apellidosUsuario = document.querySelector("#apellidosUsuario").value;
    let edadUsuario = document.querySelector("#edadUsuario").value;

    let informacion = `${nombreUsuario} ${segundoNombreUsuario} ${apellidosUsuario} ${edadUsuario}`
    document.querySelector("#informacion").value = informacion
    document.querySelector("h1").innerText = `Bienvenido/a ${nombreUsuario}`

    return false;
}