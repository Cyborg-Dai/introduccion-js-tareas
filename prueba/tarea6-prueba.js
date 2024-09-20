/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let contadorSalarios = 0;

function crearFormulario(cantidadFamiliares) {
  const formulario = document.getElementById("formulario");
  formulario.innerHTML = "";

  for (let i = 0; i < cantidadFamiliares; i++) {
    const label = document.createElement("label");
    label.textContent = "Edad de la persona  " +  i + ":";
    const input = document.createElement("input");
    input.type = "number";
    input.name = "edad-${i}";
    input.min = "0";
    formulario.appendChild(label);
    formulario.appendChild(input);
    formulario.appendChild(document.createElement("br"));
  }
};
  
function agregarSalario() {
  const formulario = document.getElementById("formulario");
  const label = document.createElement("label");
  label.textContent = "Salario anual " + (contadorSalarios + 1) + ":";
  const input = document.createElement("input");
  input.type = "number";
  input.name = "salario-${contadorSalarios}";
  input.min = "0";
  formulario.appendChild(label);
  formulario.appendChild(input);
  formulario.appendChild(document.createElement("br"));
  contadorSalarios++;
};

function quitarSalario() {
  const formulario = document.getElementById("formulario");
  if (contadorSalarios > 0) {
    for (let i = 0; i < 3; i++) {
      formulario.removeChild(formulario.lastChild);
    }
    contadorSalarios--;
  }
};

function calcularEdadesYSalarios() {
  const inputs = document.querySelectorAll("#formulario input[name^='edad']");
  let edades = [];
  inputs.forEach(input => {
    const edad = Number(input.value);
    if (!isNaN(edad) && edad >= 0) edades.push(edad);
  });
  if (edades.length > 0) {
    const mayorEdad = Math.max(...edades);
    const menorEdad = Math.min(...edades);
    const promedioEdad = edades.reduce((a, b) => a + b, 0) / edades.length;
    document.getElementById("mayor-edad").textContent = mayorEdad;
    document.getElementById("menor-edad").textContent = menorEdad;
    document.getElementById("promedio-edad").textContent = promedioEdad.toFixed(2);
  }

  const inputsSalarios = document.querySelectorAll("#formulario input[name^='salario']")
  let salarios = [];
  inputsSalarios.forEach(input => {
    const salario = Number(input.value);
    if (!isNaN(salario) && salario >= 0) salarios.push(salario);
  });

  if (salarios.length > 0) {
    const mayorSalario = Math.max(...salarios);
    const menorSalario = Math.min(...salarios);
    const promedioSalarioAnual = salarios.reduce((a, b) => a + b, 0) / salarios.length;
    const promedioSalarioMensual = promedioSalarioAnual / 12;
    document.getElementById("mayor-salario").textContent = mayorSalario;
    document.getElementById("menor-salario").textContent = menorSalario;
    document.getElementById("anual-promedio").textContent = promedioSalarioAnual;
    document.getElementById("mensual-promedio").textContent = promedioSalarioMensual;
  }};

function reiniciarFormulario() {
  document.getElementById("formulario").innerHTML = "";
  document.getElementById("mayor-edad").textContent = "";
  document.getElementById("menor-edad").textContent = "";
  document.getElementById("promedio-edad").textContent = "";
  document.getElementById("mayor-salario").textContent = "";
  document.getElementById("menor-salario").textContent = "";
  document.getElementById("anual-promedio").textContent = "";
  document.getElementById("mensual-promedio").textContent = "";
  
  contadorSalarios = 0;

  let cantidadFamiliares = Number(prompt("¿Cuantos familiares tiene?"));

  if (isNaN(cantidadFamiliares) || cantidadFamiliares <= 0) {
    alert("Por favor ingrese un numero valido.")
  } else {
    console.log("Cantidad de familiares: " + cantidadFamiliares);
    crearFormulario(cantidadFamiliares);
  }
};

document.getElementById("calcular").addEventListener("click", calcularEdadesYSalarios);
document.getElementById("reiniciar").addEventListener("click", reiniciarFormulario);
document.getElementById("agregar").addEventListener("click", agregarSalario);
document.getElementById("quitar").addEventListener("click", quitarSalario);

reiniciarFormulario();

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/