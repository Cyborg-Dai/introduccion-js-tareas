/ TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.


// TAREA1: Usando un bucle 'while', decile a tu computadora que registre los números de
// diez a uno.
/*
function tarea1(){
    let i = 11;
    while(i > 1){ // Acá en vez de i > 0, no podría ir i >= 1. Porq en el primer caso llego hasta cero y yo quiero llegar hasta 1 
        i--;
        console.log(i);
    }
}
tarea1();
*/

// TAREA1: Usando un bucle 'while', decile a tu computadora que registre los números de
// diez a uno.

function tarea1() {
    let i = 10;
    while (i >= 1) { 
        console.log(i);
        i--;
    }
}

tarea1();

//TAREA2: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function tarea2() {
    for (let i = 3; i <= 23; i += 3) { 
        console.log(i);
    }  
}
tarea2();

//TAREA3: HACER UNA FUN CION QUE SE LLAME calculaPromerio
//que tome como parámetro un array 
//tenemos que convertir esto en una función y como lo hariamos a través de una función

//Entonces al final de todo vamos a preguntar cuanto vale total notas
//En este caso me debería dar 10, 20, 25

//Para calcular el total de las notas, me fijo cuantos parciales tengo (q en est caso tenemos 4)
//el algoritmo dice conta tantos paraciales como tengas y cómo expreso tantos parciales como tengas
//Lo expreso así notasParciales.lenght (esto es tantos parciales como tengas.)
//Entonces, total notas dividido tantos parcciales como tenga es el resultado final
//console.lo("El promedio es " + totalNotas / notaParciales.lenght);


/*
Tarea 3:
function calcularPromedio(numeros) {
  let resultadoTotal = 0; // Acumulador let, va fuera del for, pero puede ir dentro de la función?
  for (let i = 0; i < numeros.length; i++) {
    resultadoTotal += numeros[i];
  }
  let promedio = resultadoTotal / numeros.length;
  return;
}
calcularPromedio();
*/

//////////////////////

//TAREA3: HACER UNA FUN CION QUE SE LLAME calculaPromerio
//que tome como parámetro un array 
//tenemos que convertir esto en una función y como lo hariamos a través de una función

//Entonces al final de todo vamos a preguntar cuanto vale total notas
//En este caso me debería dar 10, 20, 25

//Para calcular el total de las notas, me fijo cuantos parciales tengo (q en est caso tenemos 4)
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


/*
let notasParciales = [10, 1, 8, 4, 6];
console.log(notasParciales.length); al poner lengh me cuenta la cantidad de posiciones, sino me contaría los índice, o sea, me daría 4 porque comienza en 0
let promedio = calcularPromedio(notasParciales);

function calcularPromedio(notasParciales) {
    if (notasParciales.length === 0) {
        return 0;
    }
    let sumaTotal = 0;
    for (let i = 0; i < notasParciales.length; i++) {
        sumaTotal += notasParciales[i]; 
    }
    console.log(sumaTotal);
    let promedio = sumaTotal / notasParciales.length;
    return ;
}
console.log(promedio);
*/

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


// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])


 tarea4
    function calcularPromedio(array) {
        let suma = 0;
        let promedio = 0;

        for(let i = 0; i < array.length; i++) {
            suma += array[i];
        }

        promedio = suma / array.length;
        return promedio;
    }

    let arrayNumeros = [10,5,4,2,8];
    console.log(`El promedio es: ${calcularPromedio(arrayNumeros)}`);
}




//////////////////////////////

function verificaEdadEntrada(edad = 18) { //lo que esta dentro de paréntesis es un parámetro por defecto 
    if (edad >=18){
        console.log("Bienvenido al bar");
    }else{
        console.log("sos menor de edad");
    }
}
verificaEdadEntrada(); //Si ponemos el cursor en los paréntesis vemos que el parámetro de edad tiene un"?, quiere decir q es opcional
                        //Quiere decirf que si no le paso nada, "edad" ya tiene algom, tiene el valor 18

//en la consola me dice bienvenido al bar porque la edad es por default 18 (que lo puse como parámetro)
//Yo puedo sobreescribir ese valor y poner 17 en el paréntesis cuando lo nombro al llamar a la función (Acá en la consola te va a deccir, sos menor de edad) porque antes
//de entrar a la función va a leer el llamado y su parámetro, ahí va a tomar el parámetro del llamado y en el if va a salir q es  menor a 18, por lo tanto, va a devolver q 
//es menor de edad
//Esto es un parámetro por default

//OPERADOR TERNARIO
//Yo puedo decir, en vez de hacer esto en tres líneas, lo puedo hacer en una línea

function verificaEdadEntrada(edad = 18) { 

    edad >=18 ? console.log('Bienvenido al bar') : console.log('Sos menor de edad');  //el signo de pregunta es como si yo estuviera diciendo "if" (if(edad>=18)).
                                                                                        //el signo de preguntta lo que hace es divide y dice vamos a evaluar esto y depende lo que pase,
                                                                                        //si es true vamo a elegir lo q esta a la izquierda de estos dos puntos y si es false vamos a elegir
                                                                                        //lo q esta a la derecha de estos dos puntos.
                                                                                      //Las lineas de abajo (las cutro) y la linea de arriba hacen exactamente lo mismo

   /* if (edad >=18){
        console.log("Bienvenido al bar");
    }else{
        console.log("sos menor de edad");
    }
        */
}
verificaEdadEntrada();
