/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#siguiente-paso').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');// l- Acá a ese id se lo asigno a una const con el mismo nombre. Esa id es un input type number
    const cantidadIntegrantes = Number($cantidadIntegrantes.value); // Acá guardo el valor que se le asigne a cant de integrantes. Si ingreso 5 esto vale 5, si ingreso 10, vale 10 y así
  
    borrarIntegrantesAnteriores(); //MUy importante, porque isno sigue sumando cant de int
    crearIntegrantes(cantidadIntegrantes);
  
    event.preventDefault();
  };
  
  document.querySelector('#calcular').onclick = function(event) {
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarResultados();
  
    event.preventDefault();
  };
  
  document.querySelector('#resetear').onclick = resetear;
  
  function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
      $integrantes[i].remove();
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
    $label.textContent = 'Edad del integrante #: ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
  } 
  
  function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
  }
  
  function ocultarBotonCalculo() {
    document.querySelector('#calcular').className = 'oculto';
  }
  
  function mostrarBotonCalculo() {
    document.querySelector('#calcular').className = '';
  }
  
  function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
  }
  
  function mostrarResultados() {
    document.querySelector('#analisis').className = '';
  }
  
  function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
  }
  
  function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
      edades.push(Number($integrantes[i].value));
    }
    return edades;
  }
  
  /*
  TAREA:
  Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
  Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
  
  Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
  */

  document.querySelector('#siguiente-paso').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');// l
    const valorCantidadIntegrantes = Number($cantidadIntegrantes.value); // Acá guardo el valor que se le asigne a cant de integrantes. Si ingreso 5 esto vale 5, si ingreso 10, vale 10 y así
  
    borrarIntegrantesAnteriores(); //MUy importante, porque isno sigue sumando cant de int
    crearIntegrantes(cantidadIntegrantes);
  
    event.preventDefault();}
    
    /////////////////////
  };

  .oculto {
    display: none; /*Esto es para que se muestre oculto*/
}
  //////////////////////////////////////////////////////

  /*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

TAREA1
const enviarInformacion = document.querySelector("#enviar-informacion");

enviarInformacion.onclick = function(event) {
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    
    document.querySelector(".calcular").classList.remove("oculto");

    event.preventDefault();
};

document.querySelector(".calcular").onclick = function(event) {
    event.preventDefault();

    const inputsEdades = document.querySelectorAll(".integrantes input");
    const edades = [];

    for (let i = 0; i < inputsEdades.length; i++) {
        const edad = parseInt(inputsEdades[i].value);
        edades.push(edad);
    }

    const mayorEdad = calcularEdadMayor(edades);
    const menorEdad = calcularEdadMenor(edades);
    
    const promedioEdad = calculaPromedio(edades);

    document.querySelector("#edad-mayor").textContent = mayorEdad;
    document.querySelector("#edad-menor").textContent = menorEdad;
    document.querySelector("#edad-promedio").textContent = promedioEdad.toFixed(2);

    mostrarElemento("analisis");
};

document.querySelector("#empezar-de-nuevo").onclick = function(event) {
    const formulario = document.querySelector("#calcular-edades");
    formulario.reset();

    borrarIntegrantesAnteriores();

    ocultarElemento("analisis");
    ocultarElemento("calcular");

    document.querySelector(".calcular").classList.add("oculto");

    event.preventDefault();
};

function crearIntegrantes(cantidadIntegrantes) {
    const contenedor = document.querySelector(".integrantes");

    for(let i = 0; i < cantidadIntegrantes; i++) {
        const label = document.createElement("label");
        label.textContent = `Edad del integrante ${i + 1}: `;

        const input = document.createElement("input");
        input.type = "number";
        input.textContent = ` `;

        contenedor.appendChild(label);
        contenedor.appendChild(input);
    }
}

function borrarIntegrantesAnteriores() {
    const contenedorIntegrantes = document.querySelector(".integrantes");
    const integrantes = contenedorIntegrantes.querySelectorAll("label, input");

    for (let i = 0; i < integrantes.length; i++) {
        contenedorIntegrantes.removeChild(integrantes[i]);
    }
}

function ocultarElemento(clase) {
    document.querySelector("." + clase).classList.add("oculto");
}

function mostrarElemento(clase) {
    document.querySelector("." + clase).classList.remove("oculto");
}

function calcularEdadMayor(numeros) {
    let mayorEdad = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayorEdad) {
            mayorEdad = numeros[i];
        }
    }
    return mayorEdad;
}
  
function calcularEdadMenor(numeros) {
    let menorEdad = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorEdad) {
            menorEdad = numeros[i];
        }
    }
    return menorEdad;
}

function calculaPromedio(numeros) {
    let promedio = 0;
    for (let i = 0; i < numeros.length; i++) {
        promedio += numeros[i];
    }
    promedio = promedio / numeros.length;

    return promedio;
}

/*
TAREA2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const agregarIntegrantes = document.querySelector("#enviar-informacion");
const eliminarIntegrantes = document.querySelector("#eliminar");
const calcularSalarios = document.querySelector("#calcular");

agregarIntegrantes.onclick = function(event) {
    event.preventDefault();
    crearIntegrantes();
    mostrarBtnCalculo();
};

eliminarIntegrantes.onclick = function(event) {
    event.preventDefault();
    eliminarUltimoIntegrante();
};

calcularSalarios.onclick = function(event) {
    event.preventDefault();
    calcular();
};

function crearIntegrantes() {
    const contenedor = document.querySelector("#integrantes");

    const div = document.createElement("div");
    div.className = "integrante";

    const label = document.createElement("label");
    label.textContent = `Salario anual: `;

    const input = document.createElement("input");
    input.type = "number";
    input.className = "salario-anual";

    div.appendChild(label);
    div.appendChild(input);
    contenedor.appendChild(div);
}

function mostrarBtnCalculo() {
    const btnCalcular = document.querySelector("#calcular");
    btnCalcular.classList.remove("oculto");
}

function eliminarUltimoIntegrante() {
    const contenedor = document.querySelector("#integrantes");
    if (contenedor.lastElementChild) {
        contenedor.removeChild(contenedor.lastElementChild);
    }

    if (contenedor.children.length === 0) {
        const btnCalcular = document.querySelector("#calcular");
        btnCalcular.classList.add("oculto");
    }
}

function calcular() {
    const salarios = document.getElementsByClassName("salario-anual");
    let totalSalarios = 0;
    let numSalarios = 0;
    let maxSalario = -Infinity;
    let minSalario = Infinity;

    for (let i = 0; i < salarios.length; i++) {
        const salario = salarios[i].value.trim();
        if (salario !== '') {
            const salarioNum = parseFloat(salario);
            if (salarioNum !== 0) {
                totalSalarios += salarioNum;
                numSalarios++;
                if (salarioNum > maxSalario) maxSalario = salarioNum;
                if (salarioNum < minSalario) minSalario = salarioNum;
            }           
        }
    }

    if (numSalarios === 0) {
        alert("Por favor, ingrese al menos un salario válido.");
        return;
    }

    const promedioSalariosAnual = totalSalarios / numSalarios;
    const promedioSalariosMensual = promedioSalariosAnual / 12;

    document.getElementById("salario-mayor-anual").value = maxSalario.toFixed(2);
    document.getElementById("salario-menor-anual").value = minSalario.toFixed(2);
    document.getElementById("promedio-salarios-anual").value = promedioSalariosAnual.toFixed(2);
    document.getElementById("promedio-salarios-mensual").value = promedioSalariosMensual.toFixed(2);

    document.getElementById("salarios").classList.remove("oculto");
}