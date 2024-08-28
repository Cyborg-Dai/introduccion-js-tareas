//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



document.querySelector('#siguientePaso').onclick = function(event) {
    const $cantidadClases = document.querySelector('#cantidadClases');
    const cantidadClases = Number($cantidadClases.value);
    
    borrarCamposClasesAnteriores();
    crearCamposClases(cantidadClases);

    event.preventDefault();
};

document.querySelector('#calcular').onclick = function(event) {
    const { totalHoras, totalMinutos, totalSegundos } = calcularTotal();
    const resultado =  `La carga horaria de la cursada es de: ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`;
    
    document.querySelector('#infoTotal').value = resultado;
   
    mostrarResultado();

    event.preventDefault();
};

function borrarCamposClasesAnteriores(){
    const $cantidadClase = document.querySelectorAll('.cantidadClase'); //Es para que me devuelva un NodeList
    for (let i = 0; i < $cantidadClase.length; i++) { //lenght cuenta cantidad de objeto (ej, desde 1 si hay objeto y si no hay, cero). PARA MINUPULAR()AGRE O QUIT) O BUSCAR SI USO EL INDICE (EL CUAL COMIENXZA EN 0)
    $cantidadClase[i].remove();                       // [clase1, clase2. clase3] ACÁ, i = 0; 0 < 3; 0+1 -- como i = 0 se va a reemplazr aqui $cantidadClase[0]. remove() y me va a borrar ese objeo que estte en la posicion cero. Así hastta llegar a 3, como 3 < 3 tres no es menor a tres va a frenar ahí y no va a seguir iterando ni eliminando nada, porque ya no hay nada para elimminar
    }
}

function crearCamposClases(cantidadClase){

    if (cantidadClase > 0) {
        mostrarBotonCalculo();
    } else {
        alert('El campo no puede estar vacío');
    }

    let numeroClase = 1;
    for (let i = 1; i <= cantidadClase; i++) {
        
    const $div = document.createElement('div');
    $div.className = "cantidadClase";

    const $label = document.createElement('label');
    $label.setAttribute('for', `clase${i}`);
    $label.textContent = `Clase número ${i}`;

    const $horasInput = document.createElement('input');
    $horasInput.setAttribute('id', `clase${i}`);
    $horasInput.className = `horaClase`;
    $horasInput.type = "number";
    $horasInput.placeholder = "Horas";

    const $minutosInput = document.createElement('input');
    $minutosInput.className = "minutoClase";
    $minutosInput.type = "number";
    $minutosInput.placeholder = "Minutos";

    const $segundosInput = document.createElement('input');
    $segundosInput.className = `segundoClase`;
    $segundosInput.type = "number";
    $segundosInput.placeholder = "Segundos";
    
 $div.appendChild($label);
 $div.appendChild($horasInput);
 $div.appendChild($minutosInput);
 $div.appendChild($segundosInput);
 
 const $clases = document.querySelector('#clases'); 
 $clases.appendChild($div);
 
 
    }
} 

function calcularTotal() {
    const $horaClase = document.querySelectorAll(`.horaClase`);
    const $minutoClase = document.querySelectorAll('.minutoClase');
    const $segundoClase = document.querySelectorAll('.segundoClase');
    
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

for(let i = 0; i < $horaClase.length; i++) {

    totalHoras += Number($horaClase[i].value) || 0;
    totalMinutos += Number($minutoClase[i].value) ||  0;
    totalSegundos += Number($segundoClase[i].value) || 0;
}

totalMinutos += Math.floor(totalSegundos / 60);
totalSegundos = totalSegundos % 60;

totalHoras += Math.floor(totalMinutos / 60);
totalMinutos = totalMinutos % 60; 


return {totalHoras, totalMinutos, totalSegundos}

}

document.querySelector('#resetear').onclick = resetear;

function mostrarBotonCalculo() {
    document.querySelector('#calcular').className = '';
}

function ocultarrBotonCalculo() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarResultado (){
    document.querySelector('#informacion').className = '';
}

function ocultarResultado (){
    document.querySelector('#informacion').className = 'oculto';
}

