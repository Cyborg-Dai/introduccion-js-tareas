//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual. (HECHO EN HTML)
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual (IID #CALCULAR SALARIO MENSNUAL) HABILTAR SAL MMEMNUSAL
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>


const $botonResultado = document.querySelector("#botonResultado");
const MESES_EN_UN_ANIO = 12;

$botonResultado.onclick = function(event) {

  const $salarioAnual = Number(document.querySelector("#salarioAnual").value);
  const $salarioMensual = document.querySelector('#salarioMensual');

  $salarioMensual.value = ($salarioAnual / MESES_EN_UN_ANIO).toFixed(2); 

  return false;
  
}

