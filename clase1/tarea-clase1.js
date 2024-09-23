//  TAREA:
//Crear ima función que tome como parámetro el año actual y el año de nacimiento 
//y calcule la edad dle usuario (más o menos).
//Preguntarle estos datos al usuario y guardarlos en 2 variables
//Ejecutar la función con estos datos 
//Impriman el resultado en la consola


//CALCULAR EDAD
const anioActual = Number(prompt("¿Que año es?"));
const anioNacimiento = Number(prompt("¿En qué año naciste?"));

function calcularEdadUsuario(anioActual, anioNacimiento) {
     return anioActual - anioNacimiento;
       
}
const edadUsuario = calcularEdadUsuario(anioActual, anioNacimiento); 
console.log("Tu edad es " + edadUsuario + " años");

//////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////
//VISTO EN CLASES//
//////////////////////////////////////////////////////////////////

pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();


var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
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
    prueba(3);

    
    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error


prueba(3);


console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
console.log('c vale: ' + c); // error
console.log('d vale: ' + d); // error
console.log('e vale: ' + e); // error
console.log('f vale: ' + f); // error


