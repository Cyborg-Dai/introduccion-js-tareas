//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

////////////////////////////////////////////////////////////////////////////////////
//Desafío de programación #1: Imprimí los números del 1 al 10
//Resultado: 10 9 8 7 6 5 4 3 2 1
function imprimirDelUnoAlDiez() {
    for (let i = 10; i > 0; i--) { 
        console.log(i);
    }  
}
imprimirDelUnoAlDiez();


 ////////////////////////////////////////////////////////////////////////////////////
 //Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 //1 3 5 ... 99

 function imprimirImpares() {
 for(let i = 1; i < 100; i++){
    if(i % 2 !==0){
    console.log(i);
   }
  }
 }
 imprimirImpares();


////////////////////////////////////////////////////////////////////////////////////
//Desafío de programación #3: Imprimí la tabla de multiplicación del 7

// 7x0 = 0
// 7x1 = 7
// 7x9 = 63

 function imprimirTablaDelSiete() {
  const numero = 7;
  for (let i = 0; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
 }
 imprimirTablaDelSiete();


////////////////////////////////////////////////////////////////////////////////////
//Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

/*
 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
*/

 //podría hacer un bucle for del 0 al 10 
 //y otro bucle for del 1 al 9 

 function imprimirTablaDelUnoAlNueve() {
 for (let i = 1; i <= 9; i++){
  for (let k = 0; k <= 9; k++){
    console.log(`${i} x ${k} = ${i * k}`);   
   }
  }
 }
  imprimirTablaDelUnoAlNueve();



/*
////////////////////////////////////////////////////////////////////////////////////
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
*/
function sumaDelUnoAlDiez() {
const array = [1,2,3,4,5,6,7,8,9,10]
let suma = 0;
for(let i=0; i <= array.legth; i++){ 
 suma += array[i];
 }
 return suma;
}
sumaDelUnoAlDiez();


////////////////////////////////////////////////////////////////////////////////////
//Desafío de programación #6: Calcula 10! (10 factorial)

 //10 * 9 * 8 * ... * 1

//pordía hacer un bucle anidado tambienm 

function calcularDiezFactorial() {
const array = [10,9,8,7,6,5,4,3,2,1]
let multiplicación;
for(let i=0; i < array.lenght; i++){
  multiplicación += array[i]
  }
  return multiplicación;
}
calcularDiezFactorial();


////////////////////////////////////////////////////////////////////////////////////
//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

function calcularNumerosImpares() {
let suma = 0;
for(let i=11; i < 30; i +=2) {
 suma += i;
  }
}
calcularNumerosImpares();


////////////////////////////////////////////////////////////////////////////////////
//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
celsiusAFahrenheit(celsius);


///////////////////////////////////////////////////////////////////////////////////////
//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
fahrenheitACelsius(fahrenheit)


/////////////////////////////////////////////////////////////////////////////////////////
//Desafío de programación #10: Calcula la suma de todos los números en un array de números

function sumaArray(numeros) {
let suma = 0;
for(let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
 }
  return suma;
}
const arrayNumeros = [1997, 3, 5, 10]; 
const resultadoArray = sumaArray(arrayNumeros); 
console.log(`La suma del array es: ${resultadoArray}`);


//////////////////////////////////////////////////////////////////////////////////////////////// 
//Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

function calcularPromedio(numeros){
let suma = 0;
for(let i = 0; i < numeros.length; i++){
  suma += numeros[i];
 }
  let promedio = suma / numeros.length;
  return promedio;
}

const notas = [6, 5, 8, 10, 4]; 
const resultadoPromedio = calcularPromedio(notas); 
console.log(`El promedio es: ${resultadoPromedio}`);


//////////////////////////////////////////////////////////////////////////////////////////////// 
//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

function filtrarPositivos(numeros){
let positivos = [];
for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] > 0) {
  positivos.push(numeros[i]);
  }
 }
  return positivos;
}

const numerosAleatorios = [-5, 3, -1, 0, 8, -2, 7, -9];  
const resultadoPositivos = filtrarPositivos(numerosAleatorios); 
console.log(`Números positivos: ${resultadoPositivos}`); 

//////////////////////////////////////////////////////////////////////////////////////////////// 
//Desafío de programación #13: Find the maximum number in an array of numbers

 function obtenerNumeroMaximo(numeros) {
    let mayorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayorNumero) {
        mayorNumero = numeros[i];
      }
    }
    return mayorNumero;
   
  }

  const numerosEnteros = [3, 5, 1, 8, 7, 9, 2]; 
  const numeroMaximo = obtenerNumeroMaximo(numerosEnteros); 
  console.log(`El número máximo es: ${numeroMaximo}`);

//////////////////////////////////////////////////////////////////////////////////////////////// 
//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

function printFibonacci() {
  let a = 0;
  let b = 1;
  console.log(a);  
  console.log(b);  

  for (let i = 0; i < 8; i++) {  
    let c = a + b; 
    console.log(c);  
    a = b;  
    b = c;  
  }
}

printFibonacci();


//////////////////////////////////////////////////////////////////////////////////////////////// 
/*
Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/

function fibonacci(n) {
    if (n <= 0) return 0;          
    if (n === 1) return 1;         
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 10; 
const resultadoFibonacci = fibonacci(n); 
console.log(`El número de Fibonacci en el índice ${n} es: ${resultadoFibonacci}`);


//////////////////////////////////////////////////////////////////////////////////////////////// 
//Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

function retornarPrimo(numero) {
  if (numero <= 1) {  
    return false;     
  }
  for (let i = 2; i < numero; i++) { 
    if (numero % i === 0) {  
      return false;          
    }
  }
  return true; 
}



//////////////////////////////////////////////////////////////////////////////////////////////// 
/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
*/

function esPrimo(numero) {
  if (numero <= 1) return false; 

  for (let i = 2; i < numero; i++) { 
    if (numero % i === 0) {
      return false; 
   }
  }
  return true; 
}

function imprimirPrimos(cantidad) {
  let contador = 0;
  let numero = 2; 

  while (contador < cantidad) {
    if (esPrimo(numero)) {
      console.log(numero); 
      contador++; 
  }
    numero++; 
  }
}

imprimirPrimos(100); 


//////////////////////////////////////////////////////////////////////////////////////////////// 
/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
*/

function esPrimo(numero) {
  if (numero <= 1) 
    return false; 
  
  let i = 2;
  while (i < numero) { 
    if (numero % i === 0) {
      return false; 
  }
    i++;
 }
  return true; 
}


function nPrimosMayoresQue(alComienzo, n) {
  const primos = []; 
  let numero = alComienzo + 1; 

  while (primos.length < n) { 
    if (esPrimo(numero)) {
   primos.push(numero); 
   }
    numero++; 
  }

  return primos; 
}

console.log(nPrimosMayoresQue(5, 5)); 
console.log(nPrimosMayoresQue(10, 4)); 


//////////////////////////////////////////////////////////////////////////////////////////////// 
/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
*/

function rotarIzquierda(array) {
  if (array.length === 0) return array; 

  const primerElemento = array.shift();

  array.push(primerElemento);

  return array; 
}


const arrayOriginal = [1, 2, 3, 4, 5];
const arrayRotado = rotarIzquierda(arrayOriginal);
console.log(arrayRotado); 


