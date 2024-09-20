//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."




const $botonCalcular = document.querySelector("#calcular");
const listaNumeros = document.querySelectorAll('li');
const arrayNumeros = Array.from(listaNumeros, li => Number(li.textContent));

const $resultadoPromedio = document.querySelector("#resultadoPromedio");
const $resultadoNumeroPequenio = document.querySelector("#resultadoNumeroPequenio");
const $resultadoNumeroGrande = document.querySelector("#resultadoNumeroGrande");
const $resultadoNumeroFrecuente = document.querySelector("#resultadoNumeroFrecuente");


$botonCalcular.onclick = function () {
    const resultadoPromedio = calcularPromedio(arrayNumeros);
    const numeroMinimo = calcularNumeroMasPequenio(arrayNumeros);
    const numeroMaximo = calcularNumeroMasGrande(arrayNumeros);
    const numeroMasVecesRepetido = calcularNumeroMasRepetido(arrayNumeros);

    $resultadoPromedio.textContent = `El promedio es: ${resultadoPromedio}`;
    $resultadoNumeroPequenio.textContent = `El número más pequeño es: ${numeroMinimo}`;
    $resultadoNumeroGrande.textContent = `El número más grande es: ${numeroMaximo}`;
    $resultadoNumeroFrecuente.text = `El número más repetido es: ${numeroMasVecesRepetido}`;


    return false;
};


function calcularPromedio(numeros) {

    let numero = 0;
    for (let i = 0; i < numeros.length; i++) {

        numero = numero + numeros[i]
       
    }

    return numero / numeros.length;
}


function calcularNumeroMasPequenio(numeros) {

    let numeroMinimo = numeros[0]
    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] < numeroMinimo) {

            numeroMinimo = numeros[i]
        }
    }

    return numeroMinimo;
}


function calcularNumeroMasGrande(numeros) {

    let numeroMaximo = numeros[0]
    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > numeroMaximo) {

            numeroMaximo = numeros[i]
        }
    }

    return numeroMaximo;
}


function calcularNumeroMasRepetido(numeros) {
    let numeroMasRepetido;
    let masRepetido = 0;

    for (let i = 0; i < numeros.length; i++) {

        let numero = numeros[i]
        let repetido = 0;

        for (let x = 0; x < numeros.length; x++) {

            if(numeros[x] === numero) {

                repetido ++
            }
            
            if (repetido > masRepetido) {

                masRepetido = repetido;
                numeroMasRepetido = numero;
            }
        }
    }

    return numeroMasRepetido;
}


