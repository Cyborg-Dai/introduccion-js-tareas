//  TAREA:
//Crear ima función que tome como parámetro el año actual y el año de nacimiento 
//y calcule la edad dle usuario (más o menos).
//Preguntarle estos datos al usuario y guardarlos en 2 variables
//Ejecutar la función con estos datos 
//Impriman el resultado en la consola


//CALCULAR EDAD
let anioActual = Number(prompt("¿Que año es?"));
let anioNacimiento = Number(prompt("¿En qué año naciste?"));

function calcularEdadUsuario(anioActual, anioNacimiento) {
     return anioActual - anioNacimiento;
       
}
let edadUsuario = calcularEdadUsuario(anioActual, anioNacimiento); 
console.log("Tu edad es " + edadUsuario + " años");



//Preguntar el salario anual y calcular el salario mensual
//Preguntar el salario menmsual y calcular el anual 
//diario... semanal, por hora, etc.


const MESES_EN_UN_ANIO = 12;
const SEMANAS_EN_UN_ANIO = 52;
const DIAS_LABORABLES_EN_UN_ANIO = 260 //Días laborables en un año. VER SI ESÁ BIEN
const HORAS_LABORABLES_EN_UN_DIA = 8//Horas aprox laborables 


//PREG. SALARIO MENSUAL Y CALC. SAL ANUAL
const salarioMensual = Number(prompt("¿Cúal es tu salario mensual?"));

function calcularSalarioAnual(salarioMensual) {
        return salarioMensual * MESES_EN_UN_ANIO;
}
console.log("Tu salario anual es " + calcularSalarioAnual(salarioMensual));


//PREG SALARIO ANUAL Y CALC SAL. MENSUAL:
const salarioAnual = Number(prompt("¿Cúal es tu salario anual?")); //ACÁ EN CONST HABIA UN LET PERO LO CAMBIE A CONST PORQUE NO CAMBIA EL VALOR DE LA VARIABLE

function calcularSalarioMensual(salarioAnual){
    return salarioAnual / MESES_EN_UN_ANIO;
}
console.log("Tu salario mensual es " + calcularSalarioMensual(salarioAnual));


//A PARTIR DEL SALARIO ANUAL CALC. SALARIO SEMANAL
function calcularSalarioSemanal(salarioAnual) {
    return salarioAnual / SEMANAS_EN_UN_ANIO;
}
const salarioSemanal = calcularSalarioSemanal(salarioAnual);
console.log("Tu salario semanal es " + salarioSemanal);
 
//A PARTIR DEL SALARIO ANUAL CALC. SALARIO DIARIO
function calcularSalarioDiario(salarioAnual) {
    return salarioAnual / DIAS_LABORABLES_EN_UN_ANIO;
}

const salarioDiario = calcularSalarioDiario(salarioAnual);
console.log("Tu salario diario es " + salarioDiario);


//A PARTIR DEL SALARIO ANUAL CALC. SALARIO X HORA
function calcularSalarioPorHora(salarioDiario) {
    return salarioDiario / HORAS_LABORABLES_EN_UN_DIA;
}
const salarioPorHora = calcularSalarioPorHora(salarioDiario);
console.log("Tu salario por hora es " + salarioPorHora);

//parseInt PARA PASAR AL NUMERO ENTERO 

// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

//tarea anterior 
/*
let anioNacimiento = Number(prompt('En que año naciste?'));
les anioActual = Number(prompt('En que año estamos?'));

function calcularEdadActual(anioNacimiento,anioActual){
    return anioActual-anioNacimiento;
}

console.log calcularEdadActual(anioNacimiento,anioActual);
*/
/*
let operador = "+" ; // variable llamada operador 
let a = 2; // variable que contenga número cualquiera
let b = 3; // variable que contenga número cualquiera
*/

function sumar(numero1,numero2) {
    return  numero1 + numero2;

}

function restar(numero1,numero2){
   return  numero1-numero2;
}

 /*let resultado;
    if(operador === "+") { 
     resultado = sumar(a,b)
    } else {
        resultado = restar(a,b);
    }
  /*  
    console.log(
        'EL resultado de ' + " " + a + " " + operador + " " + b + " es " + resultado
    );

*/
/*
console.log (
    `El resultado de ${a} ${operador} ${b} es ${sumar (a,b)}`
); 

const numero = 7;
if (numero > 7) {
    console.log('Nuestro número es mayor a 7');
} else if (number < 7) {
    console.log('Nuestro número es menor a 7');
} else {
    console.log('Nuestro número es igual a 7');
}

*/


/*
console.log(mensaje); 
var mensaje = 'Hola, mundo';
console.log(mensaje);
*/


/*
    'If' - 'Else if' - 'Else'
    ===================

    Bueno, y qué pasa si tenemos 4 operaciones aritméticas en nuestra calculadora? Bueno, entonces usamos una estructura así (pseudocódigo):
    if(condicion)
        //algo
    else if(condicion)
        //algo
    else
        //algo que va a pasar si no se cumple ningún otra condición
        

    Ejemplo:

    const numero = 7;
    if (numero > 7) {
        console.log('Nuestro número es mayor a 7');
    } else if (number < 7) {
        console.log('Nuestro número es menor a 7');
    } else {
        console.log('Nuestro número es igual a 7');
    }

    Consejo: Podemos usar la cantidad de 'else if' que queramos uno después del otro, 
    el primero que es 'verdadero' es el único que pasa.
*/

// TAREA: Creemos 2 funciones más: dividir y multiplicar.
/*
function multiplicar (numero1, numero2){
    return numero1* numero2;

}
   function dividir (numero1, numero2){
    return numero1/numero2;
   }

   const operador = prompt ('Agregá un operador (+, -, *, /');
   const numero1 = 10;
   const numero2 = 20;

   let resultado;
   if (operador === "+"){
        resultado = sumar(numero1, numero2);
   }else if (operador==="-"){
        resultado = restar(numero1, numero2); 
   }else if (operador === '/'){
        resultado = dividir (numero1, numero2);
   }else if (operador === '*'){
        resultado = multiplicar (numero1, numero2);
   }else {
        console.log(`Perdón, no conozco ese operador ${operador}`);
   }

console.log(`El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`);
/*
// TAREA: Reescribamos el if-else que teníamos y extendámolos, agregando:
//       'else if' el 'operador' es igual a '-' - llamar a la función 'restar'
//       'else if' el 'operador' es igual a '/' - llamar a la función 'dividir'.
//       'else if' el 'operador' es igual a '*' - llamar a la función 'multiplicar'.
//       else console.log - "Perdón, no conozco ese operador".

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3) {
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }
    }
    prueba(4);
*/
/*
    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error


prueba(4);

*/
/*
function calcularMesesVividos(anioNacimiento, mesNacimiento) {

return (2019 - anioNacimiento) * 12 + mesNacimiento;
}
outta my head thrdlife
let mesesVividos = 34;
let anioNacimiento = Number (prompt('En que año naciste?'));
let mesNacimiento = Number (prompt('En que mes naciste?'));

console.log("Tenes " +calcularMesesVividos(anioNacimiento, mesNacimiento) + "meses vividos")
console.log(mesesVividos);












/*
    Operadores Booleanos
    =================
    Poner un signo de exclamación (!) antes de un valor Booleano nos da el valor OPUESTO.
    Este operador ! se llama el operador "not".
    
    El resultado de una comparación es un valor Booleano, lo podemos guardar en una variable así:

    const bool = (1 < 2);

    Después podemos chequear si 'bool' es verdadero o falso (true o false) usando console.log

    console.log(bool); // Devuelve veradero (TRUE), porque 1 es menor a 2
    console.log(!bool); // devuelve "no verdadero"... es decir falso (FALSE)
    console.log(bool); // El valor original no se ve afectado, sigue siendo veradero, TRUE

    También podemos asignar un valor booleano directamente a una variable o constante con
    las palabras reservadas (keywords) true y false:

    const elPesoEsEstable = false;
    let maradonaMejorQuePele = true;
*/


// TAREA: usando el operador !, Intentá invertir una variable (de true a false, o de false a true) e imprimí el
// resultado en la consola.


////////////////////////////////////////////////////////////////////////////
// Felicitaciones! Terminaste el Nivel 1 de la introducción a JavaScript! //
// El siguiente nivel es el que está en nivel2.js                         //
////////////////////////////////////////////////////////////////////////////

/*const tieneDocumento = prompt('¿Tenés documento? Contestar diciendo si o no');
let edadUsuario;

if (tieneDocumento == "si"){
     edadUsuario = Number(prompt('¿Cuál es tu edad?'));
} else if (tieneDocumento == "no"){
    console.log('No podés entrar al bar');
}else {
    console.log('No entendí la respuesta');
}
if (edadUsuario >= 18){
    console.log("Podés entrar al bar");
}else if (edadUsuario < 18){
    console.log('No podés entrar al bar');
}
*/

const nombreDelUsuario = (prompt('¿Cuál es tu nombre?') || "").toLowerCase();

/*
if ("Daiana" == nombreDelUsuario){
    console.log(`¡Hola, Tocayo! Yo también me llamo ${nombreDelUsuario}`);
} else if(nombreDelUsuario == "Kevin"){
    console.log(`Hola ${nombreDelUsuario}, te llamas igual que mi novio`);
} else{
    console.log(`¡Hola, ${nombreDelUsuario}!`)
};
*/


const MI_NOMBRE ="Daiana";
const NOMBRE_NOVIO = "Kevin";

if (MI_NOMBRE == nombreDelUsuario) {
    console.log(`¡Hola, Tocayo! Yo también me llamo ${MI_NOMBRE}`);
} else if (NOMBRE_NOVIO == nombreDelUsuario) {
    console.log(`Hola ${NOMBRE_NOVIO}, te llamas igual que mi novio`);
} else {
    console.log(`¡Hola, ${nombreDelUsuario}!`);
