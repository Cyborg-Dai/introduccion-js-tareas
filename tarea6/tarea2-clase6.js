/*
TAREA2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/





document.querySelector('#segundo-paso').onclick = function(event) {
    habilitarFormSalarios();
}


document.querySelector('#habilitar-campos').onclick = function(event) {
    const $cantidadSalarios = document.querySelector('#cantidad-salarios');
    const cantidadSalarios = Number($cantidadSalarios.value); 
   
    crearCamposSalario(cantidadSalarios);
  
    event.preventDefault();

  };
  

document.querySelector('#calcular-salario').onclick = function(event) {
    const salarios = obtenerSalariosIntegrantes();

    const salarioMayor = calcularSueldoMasAlto(salarios);
    const salarioMenor = calcularSueldoMasBajo(salarios);
    const salarioPromedio = calcularSueldoPromedio(salarios);

    ocultarBotonCalculoSalario();
    mostrarAnalisisSalario();
    mostrarResultadoSalarios(salarioMayor, salarioMenor, salarioPromedio);

    event.preventDefault();
  
  }

function crearCamposSalario(cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) { //Si yo pongo esto, es para que cuando ponga la cantidad de integrantes, si pongo 0 qu eno  me aparezca un campo a completar
        mostrarBotonCalculoSalario();
    } else {
      resetear();
    }
  
    for (let i = 0; i < cantidadIntegrantes; i++) {
      crearCampoSalario(i);
    }
  }
  function crearCampoSalario(indice) {
    const $div = document.createElement('div');
    $div.className = 'salario';
  
    const $label = document.createElement('label');
    $label.setAttribute('for', `salarioIntegrante${indice + 1}`); //chequear clase
    $label.textContent = `Salario del integrante N° ${indice + 1}`;

    
    const $input = document.createElement('input');
    $input.setAttribute('id', `salarioIntegrante${indice + 1}`); //chequear clase
    $input.className = 'salarioIntegrante';
    $input.type = 'number';
    $input.placeholder = 'Ej. 200000';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $salarios = document.querySelector('#salarios'); //div del js se appenda aldiv del html
    $salarios.appendChild($div);

  } 



function obtenerSalariosIntegrantes() {
    const $salariosIntegrantes = document.querySelectorAll('.salarioIntegrante');
    const salarioIntegrante = [];
    for (let i = 0; i < $salariosIntegrantes.length; i++) {
      salarioIntegrante.push(Number($salariosIntegrantes[i].value));
    }
    return salarioIntegrante;
  }


  function calcularSueldoMasAlto(numeros) {

    let numeroMaximo = numeros[0]
    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > numeroMaximo) {

            numeroMaximo = numeros[i]
        }
    }

    return numeroMaximo;
}

function calcularSueldoMasBajo(numeros) {

    let numeroMinimo = numeros[0]
    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] < numeroMinimo) {

            numeroMinimo = numeros[i]
        }
    }

    return numeroMinimo;
}


function calcularSueldoPromedio(numeros) {

    let numero = 0;
    for (let i = 0; i < numeros.length; i++) {

        numero = numero + numeros[i]
       
    }

    return numero / numeros.length;
}

document.querySelector('#resetear-salario').onclick = resetearSalario;


function resetearSalario() {
    borrarCrearCamposSalario();
    ocultarBotonCalculoSalario();
    ocultarAnalisisSalario()    
}

function mostrarResultadoSalarios(salarioMayor, salarioMenor, salarioPromedio){
    const $salarioMayor = document.querySelector('#mayor-salario');
    const $salarioMenor = document.querySelector('#menor-salario');
    const $salarioPromedio = document.querySelector('#promedio-salario');

    $salarioMayor.textContent = salarioMayor;
    $salarioMenor.textContent = salarioMenor;
    $salarioPromedio.textContent = salarioPromedio;

}

function borrarResultados() {
  const $salarioMayor = document.querySelector('#mayor-salario');
  const $salarioMenor = document.querySelector('#menor-salario');
  const $salarioPromedio = document.querySelector('#promedio-salario');

  $salarioMayor.textContent = '';
  $salarioMenor.textContent = '';
  $salarioPromedio.textContent = '';
}

function borrarResultadosSalarios() {
  borrarResultados();
  ocultarCalculadorSalario();
}

function habilitarFormSalarios(){
    document.querySelector('#salarios-integrantes').className = '';
}
function deshabilitarFormSalarios(){
    document.querySelector('#salarios-integrantes').className = 'oculto';
}

function ocultarBotonCalculoSalario() {
    document.querySelector('#calcular-salario').className = 'oculto';
  }
  
  function mostrarBotonCalculoSalario() {
    document.querySelector('#calcular-salario').className = '';
  }
  function  ocultarAnalisisSalario() {
    document.querySelector('#analisis-salario').className = 'oculto';
  }
  
  function mostrarAnalisisSalario() {
    document.querySelector('#analisis-salario').className = '';
  }
  
  function ocultarBotonResetearSalario() {
    document.querySelector('#resetear-salario').className = 'oculto';
  }
 
    function mostrarBotonResetearSalario() {
      document.querySelector('#resetear-salario').className = '';
    }
    function mostrarCalculadorSalario() {
      document.querySelector('#salarios-integrantes').className = '';
    }
    function ocultarCalculadorSalario() {
      document.querySelector('#salarios-integrantes').className = 'oculto';
    }
   

    //poner que no acepte sdigno nii letras
    //poner que el campo no puede estar vvacio
    //poner que el numero de quienes trabajan no puede ser mayor a la cantidad de integrantes

//ERRORES A CCORREGIR
//SI CANTIDAD ESTÁ VACÍIO, NO MME DEBE MOSTRAR CALCULADOR SAKARIO
//CUANDO CAMBIO EL VALOR EN INTEGRANTES ME DEBE BORRAR CAMPOS ANTERIORES
// VER CUANDO DA NaN
