// TAREA1: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.


function tarea1() {
    for (let i = 3; i <= 23; i += 3) { 
        console.log(i);
    }  
}
tarea1();

// TAREA2: Usando un bucle 'while', decile a tu computadora que registre los números de
// diez a uno.

function tarea2() {
    let i = 10;
    while (i >= 1) { 
        console.log(i);
        i--;
    }
}

tarea2();

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.


function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();


//TAREA4: HACER UNA FUN CION QUE SE LLAME calculaPromerio
//que tome como parámetro un array 
//tenemos que convertir esto en una función y como lo hariamos a través de una función

//Entonces al final de todo vamos a preguntar cuanto vale total notas
//En este caso me debería dar 10, 20, 25

//Para calcular el total de las notas, me fijo cuantos parciales tengo (q en est caso tenemos 5)
//el algoritmo dice conta tantos paraciales como tengas y cómo expreso tantos parciales como tengas
//Lo expreso así notasParciales.lenght (esto es tantos parciales como tengas.)
//Entonces, total notas dividido tantos parcciales como tenga es el resultado final
//console.lo("El promedio es " + totalNotas / notaParciales.lenght);

//let notasParciales = [10, 5, 4, 2, 8];

//// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

//parámetro es un placeholder, es im ñugar reservado y se puede llamar de cualquier manera
// argumento son los datos que reeplazan al parametro 

let notasParciales = [10, 5, 4, 2, 8];
let promedio = calcularPromedio(notasParciales);

function calcularPromedio(notasParciales) {
    if (notasParciales.length === 0) {
        return 0;
    }
    let sumaTotal = 0;
    for (let i = 0; i < notasParciales.length; i++) {
        sumaTotal += notasParciales[i]; 
    }
    return sumaTotal / notasParciales.length;
}

console.log(`El promedio es ${promedio}`);



