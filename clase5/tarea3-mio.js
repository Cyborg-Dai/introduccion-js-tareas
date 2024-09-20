//Calcular la cantidad de horas y minutos que hay en un numero de minutos dado
function calcularHorasMinutos(minutos) {
    if (typeof minutos != 'number' || ! Number.isInteger(minutos)) { // condicion que sea un número entero. Si es distinto de number o no es un número entero. Cuando alguna de esas dos condiciones em largue true, podríamos agregar un mensaje de type error 
    throw TypeError('DEBE INGRESAR UN NÚMERO ');
}

//CALCULEMOS LA CANTIDAD DE HORAS 
let horas = Math.floor(minutos / 60); // con math floor esa,mos pidiendo el entero mas cercano a ese resultado. Utilizando la funcion floor que está definida en el objeto mmath 
let minutosRestantes = minutos = minutos % 60;

return {
    horas, minutos: minutosRestantes
};

}

console.log(calcularHorasMinutos(123)); // {HORAS: 2, MINUTOS: 3}


function calcularTotal() {
    const $horaClase = document.querySelectorAll('.horaClase');
    const $minutoClase = document.querySelectorAll('.minutoClase');
    const $segundoClase = document.querySelectorAll('segundoClase');
    
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;
for(let i = 0; i $horaClase.length; i++) {
    totalHoras += Number($horaClase[i].value) || 0;
    totalMinutos += Number($minutoClase[i].value) ||  0;
    totalSegundos += Number($segundoClase[i].value) || 0;
}

totalMinutos += Math.floor(totalSegundos / 60);
totalSegundos += totalSegundos % 60;

totalHoras += Math-floor(totalMinutos / 60);
totalMinutos = totalMinutos % 60; 

return {totalHoras, totalMinutos, totalSegundos}

}
 
for (let i = 0; i < indice; i++) {
    const $horas = document.querySelectorAll(`.horaClase`));
    /* const minutos = Number(document.querySelector(".minutoClase").value) || 0;
    const segundos = Number(document.querySelector(".segundoClase").value) || 0; */

    totalHoras +=  $horas.value;
   /*  totalMinutos += minutos;
    totalSegundos += segundos;  */ 

    console.log(totalHoras);
}

totalMinutos += Math.floor(totalSegundos / 60);
totalSegundos = totalSegundos % 60;

totalHoras += Math.floor(totalMinutos / 60);
totalMinutos = totalMinutos % 60;


return totalHoras + (totalMinutos / 60) + (totalSegundos / 3600);

}

/////////////////////////////////////
/*
let suma = 0; // Variable acumuladora

// Suponiendo que tienes un array de números
const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) { //suma = suma + numero[i] // el acumulador comienza en 0, en el numero[i] agrego el contenido de la primer posición y lo sumo ej, 10+0, ese resulado se va a guardar en el acumulador y ahora la siguiente posición tiene el valor 20, a ese numero 10, le sumo 20 y as´´i hasta finalizar
    suma += numeros[i]; // Sumar el valor actual al acumulador
}

console.log("La suma total es: " + suma);
*/