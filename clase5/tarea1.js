
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


////////////////////////////////////////////////////
//TAMBIÉN LO PODRÍA HACER ASÍ
/*const $botonResultado = document.querySelector("#botonResultado");
const MESES_EN_UN_ANIO = 12;

$botonResultado.onclick = function() {

  const $salarioAnual = Number(document.querySelector("#salarioAnual").value);
  const $salarioMensual = document.querySelector('#salarioMensual');
  const salarioMensual = $salarioAnual / MESES_EN_UN_ANIO;

  $salarioMensual.value = salarioMensual.toFixed(2); 

  return false;

}
  TOFIXED
 //salarioMensual.toFixed(2): Convierte el salario mensual a una cadena de texto con dos decimales.
  //en el código proporcionado, el resultado se muestra como una cadena de texto, incluso si es un número.
  //Esto se debe a que el valor de los campos de entrada (input) en HTML se maneja como texto. Aquí está cómo funciona
  //La función toFixed(2) convierte el número a una cadena de texto con dos decimales. Esto es necesario porque los valores de los campos de entrada (input) deben ser cadenas de texto.
  //toFixed(2): Devuelve una representación en cadena del número con dos decimales. Por ejemplo, si el cálculo resulta en 1234.56, 
  //toFixed(2) convertirá esto a la cadena "1234.56".

  A DIFERENCIA DE .STRING, ESTE ME REDONDE A LOS DECIMALES QUE YO LE PIDA. EN CAMBIO EL .STRING MME DEVUELVE UN STRING SIN REDONDEAR



/*


/////////////////////////////////////////////////////////
CON PARSEINT
const $botonResultado = document.querySelector("#botonResultado");
const MESES_EN_UN_ANIO = 12;

$botonResultado.onclick = function() {

  const $salarioAnual = Number(document.querySelector("#salarioAnual").value);
  const $salarioMensual = document.querySelector('#salarioMensual'));
  const salarioMensual = $salarioAnual / MESES_EN_UN_ANIO;

  $salarioMensual.value = parseInt(salarioMensual, 10); // Si pongo sin el , 10 me devuelve igual 10 como default 

  return false;
}
  PARSEINT
El segundo argumento de parseInt es la base del sistema numérico que se usará para interpretar 
el número. En el caso de parseInt(salarioMensual, 10);, el 10 especifica que el número se debe 
interpretar en base decimal (el sistema numérico que usamos habitualmente).

Aquí hay una explicación de los valores posibles:
Base 10: Es el sistema numérico decimal, el más común, que usa los dígitos del 0 al 9.
Base 16: Es el sistema hexadecimal, que usa los dígitos del 0 al 9 y las letras A a F.
Base 2: Es el sistema binario, que usa los dígitos 0 y 1.
Usar la base 10 en parseInt asegura que el número se interprete como un entero decimal,
 que es lo que generalmente necesitas para la mayoría de los cálculos con dinero o salarios. 
 Si no se especifica la base, el comportamiento puede variar dependiendo del entorno y los datos
  de entrada. Por lo tanto, siempre es una buena práctica especificar la base para evitar 
  comportamientos inesperados.
*/








