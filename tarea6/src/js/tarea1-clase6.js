/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector('#siguiente-paso').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');// l- Acá a ese id se lo asigno a una const con el mismo nombre. Esa id es un input type number
    const cantidadIntegrantes = Number($cantidadIntegrantes.value); // Acá guardo el valor que se le asigne a cant de integrantes. Si ingreso 5 esto vale 5, si ingreso 10, vale 10 y así
    
    borrarResultadosSalarios();
    borrarResultadosAnteriores()
    borrarIntegrantesAnteriores(); //MUy importante, porque isno sigue sumando cant de int
    borrarCrearCamposSalario();
    crearIntegrantes(cantidadIntegrantes);
    mostrarBotonResetear();
    
    
  
  
    event.preventDefault();

  };
  
  document.querySelector('#calcular-edad').onclick = function(event) {
    const edades = obtenerEdadesIntegrantes();

    const edadMayor = obtenerEdadMayor(edades);
    const edadMenor = obtenerEdadMenor(edades);
    const edadPromedio = obtenerPromedioEdad(edades);

    ocultarBotonCalculo();
    ocultarBotonResetear();
    mostrarResultados();
    mostrarResultadoAnalisis(edadMayor, edadMenor, edadPromedio);
    mostrarBotonSiguiente();
    

    event.preventDefault();
  
  }
  
  document.querySelector('#resetear').onclick = resetear;
  
  function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
      $integrantes[i].remove();
    }
  }
  
  function  borrarCrearCamposSalario() {
    const $salarios = document.querySelectorAll('.salario');
    for (let i = 0; i < $salarios.length; i++) {
      $salarios[i].remove();
    }
  }

  function crearIntegrantes(cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) { //Si yo pongo esto, es para que cuando ponga la cantidad de integrantes, si pongo 0 qu eno  me aparezca un campo a completar
      mostrarBotonCalculo();
    } else {
      resetear();
    }
  
    for (let i = 0; i < cantidadIntegrantes; i++) {
      crearIntegrante(i);
    }
  }
  
  function crearIntegrante(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.setAttribute('for', `integrante${indice + 1}`); //chequear clase
    $label.textContent = `Edad del integrante N° ${indice + 1}`;

    
    const $input = document.createElement('input');
    $input.setAttribute('id', `integrante${indice + 1}`); //chequear clase
    $input.className = 'edadIntegrante';
    $input.type = 'number';
    $input.placeholder = 'Ej. 21';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $integrantes = document.querySelector('#integrantes'); //div del js se appenda al div del html
    $integrantes.appendChild($div);

  } 

  function obtenerEdadesIntegrantes() {
    const $edadesIntegrantes = document.querySelectorAll('.edadIntegrante');
    const edadesIntegrantes = [];
    for (let i = 0; i < $edadesIntegrantes.length; i++) {
      edadesIntegrantes.push(Number($edadesIntegrantes[i].value));
    }
    return edadesIntegrantes;
  }

  
  function obtenerEdadMayor(numeros) {
    let mayorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayorNumero) {
        mayorNumero = numeros[i];
      }
    }
    return mayorNumero;
   
  }
  
  function obtenerEdadMenor(numeros) {
    let menorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {     
      if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
      }
    }
    return menorNumero;
  }
  
  function obtenerPromedioEdad(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma / numeros.length;

    
} 

function mostrarResultadoAnalisis(mayorEdad, menorEdad, promedioEdad) {
  const $mayorEdad = document.querySelector('#mayor-edad');
  const $menorEdad = document.querySelector('#menor-edad');
  const $promedioEdad = document.querySelector('#promedio-edad');

  $mayorEdad.textContent = mayorEdad;
  $menorEdad.textContent = menorEdad;
  $promedioEdad.textContent = promedioEdad;
   
}

function borrarResultadosAnalisis() {
  const $mayorEdad = document.querySelector('#mayor-edad');
  const $menorEdad = document.querySelector('#menor-edad');
  const $promedioEdad = document.querySelector('#promedio-edad');


  $mayorEdad.textContent = '';
  $menorEdad.textContent = '';
  $promedioEdad.textContent = '';

}

  function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
  }

  function borrarResultadosAnteriores() {
    borrarResultadosAnalisis();
    ocultarResultados();
  }
 
  
  
  document.querySelector('#resetear-campos').onclick = function(event){
    borrarIntegrantesAnteriores();
    ocultarBotonResetear();

  }

  function ocultarBotonCalculo() {
    document.querySelector('#calcular-edad').className = 'oculto';
  }
  
  function mostrarBotonCalculo() {
    document.querySelector('#calcular-edad').className = '';
  }

  /*
  function ocultarBotonResetar() {
    document.querySelector('#resetear').className = 'oculto';
  }
 
    function mostrarBotonResetear() {
      document.querySelector('#resetear').className = '';
    }
  */

  function ocultarResultados() {
    document.querySelector('#analisis-edad').className = 'oculto';
  }
  
  function mostrarResultados() {
    document.querySelector('#analisis-edad').className = '';
  }

  function mostrarBotonSiguiente() {
    document.querySelector('#segundo-paso').className = '';
  }
  
  function ocultarBotonSiguiente() {
    document.querySelector('#segundo-paso').className = 'oculto';
  }

  function mostrarBotonResetear(){
    document.querySelector('#resetear-campos').className = '';
  }

  function ocultarBotonResetear(){
    document.querySelector('#resetear-campos').className = 'oculto';
  }