/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/


//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

//tarea1
function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
  
  }
  
  const $calcularSalarioMensual = document.querySelector('#calcular-salario-mesual'); //eso es un botón, pero tenía pinta de función, y para denotar que es un elemento le pongo el signo $
  
  
  $calcularSalarioMensual.onclick = function{
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    document.querySelector('#salario-mensual').value = salarioMensual; //lo quiero actualizar cada vez que le hacen clic y cada vez que calculo el salario mensual 
  
    return false // es para que se quede la pagina y no recargue
  };
  
//tarea2
let botonInformacion = document.querySelector('#boton-informacion');

function mostrarInfo(){
  let nombre = document.querySelector('#nombre');
  let apellido = document.querySelector('#apellido').value;
  let edad = document.querySelector('#edad').value;

  let saludo = document.querySelector('#saludo');

  saludo.textContent = `Bienvenido, ${nombre}`;

  let info = document.querySelector('#info');

  info.value = `Nombre: ${nombre} ${apellido}, Edad: ${edad}`;

}

botonInformacion.onclick = mostrarInfo;

//TAREA3
document.querySelector('#boton-cant-clases').onclick = function() {
  const cantClases = document.querySelector(`#clases`).value;
  console.log('Cantidad de clases:', cantClases);

  sumarClases(cantClases);

  return false;
};

document.querySelector('#boton-sumar').onclick = function() {
  let totalSegundos = 0;
  const cantClases = document.querySelector('#clases').value;

  for (let i = 0; i < cantClases; i++) {
      const horas = parseInt(document.querySelector(`#horas${i}`).value) || 0;
      const minutos = parseInt(document.querySelector(`#minutos${i}`).value) || 0;
      const segundos = parseInt(document.querySelector(`#segundos${i}`).value) || 0;

      totalSegundos += (horas * 3600) + (minutos * 60) + segundos;
  }

  const totalHoras = parseInt(totalSegundos / 3600);
  const restanteSegundos = totalSegundos % 3600;
  const totalMinutos = parseInt(restanteSegundos / 60);
  const totalSegundosFinal = restanteSegundos % 60;

  document.querySelector('#resultado').textContent = 
      `El tiempo total del curso de r/ArgentinaPrograma es de: ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundosFinal} segundos`;

  return false;
};

function sumarClases(cantClases) {
  const tiempoDiv = document.querySelector('#tiempo');
  tiempoDiv.innerHTML = '';

  for (let i = 0; i < cantClases; i++) {
      const claseDiv = document.createElement('div');
      claseDiv.className = 'clase';

      claseDiv.innerHTML = `
          <label for="horas${i}">Horas Clase ${i + 1}: </label>
          <input type="text" id="horas${i}" name="horas${i}">
          <label for="minutos${i}">Minutos Clase ${i + 1}: </label>
          <input type="text" id="minutos${i}" name="minutos${i}">
          <label for="segundos${i}">Segundos Clase ${i + 1}: </label>
          <input type="text" id="segundos${i}" name="segundos${i}">
      `;

      tiempoDiv.appendChild(claseDiv);
  }

  document.querySelector('#boton-sumar').style.display = 'block';
  document.querySelector('#resultado').style.display = 'block';

  return false;
} 

//TAREA 4

let listaNumeros = document.querySelectorAll('li');
let arrayNumeros = [];
let suma = 0;
let conteo = {};
let numeroMasFrecuente = null;
let maxFrecuencia = 0;

for (let i = 0; i < listaNumeros.length; i++) {
    arrayNumeros.push(parseInt(listaNumeros[i].textContent));
}

document.querySelector(`#boton-enviar-numeros`).onclick = function() {
    // promedio
    for (let i = 0; i < arrayNumeros.length; i++) {
            suma += arrayNumeros[i];
    }
    let promedio = suma / arrayNumeros.length;

    // minimo
    let numeroMinimo = Math.min(...arrayNumeros);

    // maximo
    let numeroMaximo = Math.max(...arrayNumeros);

    // frecuente
    for (let i = 0; i < arrayNumeros.length; i++) {
        let num = arrayNumeros[i];
        if (conteo[num]) {
            conteo[num]++;
        } else {
            conteo[num] = 1;
        }
    }

    for (let num in conteo) {
        if (conteo[num] > maxFrecuencia) {
            maxFrecuencia = conteo[num];
            numeroMasFrecuente = num;
        }
    }

    // resultados
    document.querySelector('#promedio').textContent = `El promedio es ${promedio}`;
    document.querySelector('#pequenio').textContent = `El número más pequeño es ${numeroMinimo}`;
    document.querySelector('#grande').textContent = `El número más grande es ${numeroMaximo}`;
    document.querySelector('#frecuente').textContent = `El número más frecuente es ${numeroMasFrecuente}`;

    return false;
}

  //para denotar que algo es un elemento, le ponemos el signo $
  //porque acá la función tiene el mismo nombre que la constante
  //el elemento en este caso sería la constante 
  
  //al mandar el formulario(haciendo click) recargamos la página
  //como evitamos eso? simplemente, al final de esa función, colocamos 
  //un return false, esto hace que el formulario no se envíe 
  
  //En los input no podemos usar innertext o textcontent, tenemos que usar ".VALUE", porque esta ripificado asi en el navegador  
  
  
  //-------------------------------------------
  
  
  //TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
  // creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
  // también vamos a crear un <h1> que diga Bienvenido!
  // vas a crear un botón de acción que una vez que lo apretás, va a
  // mostrar toda la información junta en un campo de texto
  // Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
  
  /*
  Ejemplo form:
    <form id="entrada-bar" onsubmit="return false;">
      <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
      <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
      <input type="submit" value="Ingresar" id="ingresar"/>
    </form>
  
    <div id="resultado">Hola</div>
  
  //TAREA: En otro archivo distinto,
  // Por cada clase de r/argentina programa existente, vamos a pedir:
  // horas, minutos y segundos de cada video. Ej. Si un video dura
  // 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
  // cada dato.
  // al apretar el botón "Calcular tiempo total", debe mostrar en un
  // <strong> pre-creado el tiempo total de los videos.
  
  //TAREA: En otro archivo distinto,
  // Crear una lista de <ol> y <li> que contengan sólo números.
  // Convertir esos números a un array y:
  // 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
  // 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
  // 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
  // 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
  


  document.querySelector('#calcular-salario-mensual').onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);

    document.querySelector('#salario-mensual').value = salarioMensual;

    return false;
}

function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}

///////////////////////////////////////////////

/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."