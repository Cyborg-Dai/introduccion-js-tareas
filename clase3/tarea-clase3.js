// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


const MI_NOMBRE = "daiana";
const NOMBRE_NOVIO= "kevin";

function preguntarNombreUsuario(){
const NOMBRE_DEL_USUARIO = (prompt('¿Cuál es tu nombre?') || "").toLowerCase();

if (MI_NOMBRE === NOMBRE_DEL_USUARIO){
    console.log(`¡Hola, Tocayo! Yo también me llamo ${NOMBRE_DEL_USUARIO}`);
}else if (NOMBRE_NOVIO === NOMBRE_DEL_USUARIO){
    console.log(`Hola ${NOMBRE_DEL_USUARIO}, te llamas igual que mi novio`);
}else if (NOMBRE_DEL_USUARIO.trim() === ''){
    console.log('No ingresaste ningún nombre. Volvé a intentar')
    preguntarNombreUsuario();
}else {
    console.log(`¡Hola, ${NOMBRE_DEL_USUARIO}!`);
}
}
////////////////////////////////////////////////////////
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.


const MI_EDAD = 27;

function preguntarEdad() {
const EDAD_DEL_USUARIO = Number(prompt('¿Cuál es tu edad?'));

if (isNaN(EDAD_DEL_USUARIO)) {
    console.log("No entendí la respuesta. Probá con un número válido");
    preguntarEdad();
}
else if (EDAD_DEL_USUARIO === MI_EDAD) {
    console.log('Tenés mi misma edad');
}else if (EDAD_DEL_USUARIO > MI_EDAD) {
    console.log("Sos mayor que yo");
}else {
    console.log("Sos menor que yo");
  }
 }


preguntarEdad();

////////////////////////////////////////////////////////////
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
    
const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";

function preguntarDniEnLaEntrada() {
const usuarioTieneDocumento = (prompt ("¿Tenés documento?") || '').toLowerCase();

if (usuarioTieneDocumento === RESPUESTA_SI) {
    const edadUsuario = Number(prompt('¿Cuántos años tenes?'));

    if (isNaN(edadUsuario)) {
        console.log("La edad ingresada no es un número válido. Por favor, intentá de nuevo.");
        preguntarDniEnLaEntrada(); 
    } else if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
            console.log("Bienvenido al bar");
    } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
        console.log("No podes entrar al bar.");
    }
} else if (usuarioTieneDocumento === RESPUESTA_NO) {
    console.log("Se necesita documento para pasar al bar.");
} else {
    console.log ("No entendí la respuesta. Por favor, intentá de nuevo");
    preguntarDniEnLaEntrada();
}
}
preguntarDniEnLaEntrada();


////////////////////

//El else if debe preceder a un if o else if, no puede estar solo.
//El else no lleva una condición. En su lugar, usa else if si necesitas más condiciones.
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//CON LA CORRECCIÓN QUE ME HICIERON, QUEDARÍA ASÍ:

function preguntarNombreUsuario() {
    const MI_NOMBRE = "daiana";
    const NOMBRE_NOVIO = "kevin";
    const NOMBRE_DEL_USUARIO = (prompt('¿Cuál es tu nombre?') || "").toLowerCase();
  
    if (MI_NOMBRE === NOMBRE_DEL_USUARIO) {
      console.log(`¡Hola, Tocayo! Yo también me llamo ${NOMBRE_DEL_USUARIO}`);
    } else if (NOMBRE_NOVIO === NOMBRE_DEL_USUARIO) {
      console.log(`Hola ${NOMBRE_DEL_USUARIO}, te llamas igual que mi novio`);
    } else if (NOMBRE_DEL_USUARIO.trim() === '') {
      console.log('No ingresaste ningún nombre. Volvé a intentar');
      preguntarNombreUsuario();
    } else {
      console.log(`¡Hola, ${NOMBRE_DEL_USUARIO}!`);
    }
  }
  
  function preguntarEdad() {
    const MI_EDAD = 27;
    const EDAD_DEL_USUARIO = Number(prompt('¿Cuál es tu edad?'));
  
    if (isNaN(EDAD_DEL_USUARIO)) {
      console.log("No entendí la respuesta. Probá con un número válido");
      preguntarEdad();
    } else if (EDAD_DEL_USUARIO === MI_EDAD) {
      console.log('Tenés mi misma edad');
    } else if (EDAD_DEL_USUARIO > MI_EDAD) {
      console.log("Sos mayor que yo");
    } else {
      console.log("Sos menor que yo");
    }
  }
  
  function preguntarDniEnLaEntrada() {
    const EDAD_MINIMA_PARA_ENTRAR = 18;
    const RESPUESTA_SI = "si";
    const RESPUESTA_NO = "no";
    const usuarioTieneDocumento = (prompt("¿Tenés documento?") || '').toLowerCase();
  
    if (usuarioTieneDocumento === RESPUESTA_SI) {
      const edadUsuario = Number(prompt('¿Cuántos años tenes?'));
  
      if (isNaN(edadUsuario)) {
        console.log("La edad ingresada no es un número válido. Por favor, intentá de nuevo.");
        preguntarDniEnLaEntrada();
      } else if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
        console.log("Bienvenido al bar");
      } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
        console.log("No podes entrar al bar.");
      }
    } else if (usuarioTieneDocumento === RESPUESTA_NO) {
      console.log("Se necesita documento para pasar al bar.");
    } else {
      console.log("No entendí la respuesta. Por favor, intentá de nuevo");
      preguntarDniEnLaEntrada();
    }
  }
  

  preguntarNombreUsuario();
  preguntarEdad();
  preguntarDniEnLaEntrada();
  




