// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Objetivo: Mejorar la lógica del programa para manejar una lista de participantes y realizar un sorteo.
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const inputAmigo = document.getElementById('amigo');

let amigos = [];

// Agregando a un participante a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre.length === 0 || !isNaN(nombre)) {
        alert('Ingrese un nombre válido.');
        return;
    }

    if (amigos.length < 10) {
        amigos.push(nombre);
        actualizarListaAmigos();
        inputAmigo.value = '';
        inputAmigo.focus();
    } else {
        alert('No se pueden agregar más de 10 participantes.');
    }
}

// Aqui se actualizan la lista de nombres en pantalla
function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const elemento = document.createElement('li');
        elemento.textContent = `Integrante ${i + 1}: ${amigos[i]}`;
        listaAmigos.appendChild(elemento);
    }
}

// Realiza el sorteo para conocer el amigo secreto
function sortearAmigo() {
    if (amigos.length > 1) {
        const indiceSeleccionado = Math.floor(Math.random() * amigos.length);
        const seleccionado = amigos[indiceSeleccionado];

        listaAmigos.innerHTML = '';
        resultado.innerHTML = `<li>El seleccionado es: <strong>${seleccionado}</strong></li>`;

        setTimeout(() => {
            amigos = [];
            actualizarListaAmigos();
            resultado.innerHTML = '';
            alert('Se ha reiniciado el proceso. Agregue nuevos participantes.');
        }, 5000);
    } else {
        alert('Se necesitan al menos dos participantes para realizar el sorteo.');
    }
}
