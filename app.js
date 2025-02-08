// Array Amigos
const amigos = [];

// Función agregar amigo desde el input.
function agregarAmigo() {
  let nombreAmigo = document.getElementById('amigo').value;
  if (nombreAmigo == "") {
    alert('Por favor, inserte un nombre.');
  } else if (amigos.includes(nombreAmigo)) {
    alert('Ese nombre ya fue registrado.')
  } else {
    amigos.push(nombreAmigo);
    asignarTextoListaAmigos();
  }
  limpiarInput();
}

// Función para mostrar los nombres de nuestros amigos secretos, cada uno en un elemeto li. Se limpia la lista para evitar los nombres duplicados al actualizar.
function asignarTextoListaAmigos() {
  let listaAmigoSecreto = document.getElementById('listaAmigos');
  listaAmigoSecreto.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    let textoNombreAmigo = amigos[i];
    li.appendChild(document.createTextNode(textoNombreAmigo));
    listaAmigoSecreto.appendChild(li);
  }
}

// Función sortear amigo, para mostrar el nombre ganador del sorteo del amigo secreto.
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Por favor, añada un nombre.')
  } else {
    limpiarListaAmigos()
    let indiceGenerado = Math.floor(Math.random()*amigos.length);
    let amigoGanador = amigos[indiceGenerado];
    let ganadorHTML = document.getElementById('resultado');
    ganadorHTML.innerHTML = (`El amigo secreto sorteado es: ${amigoGanador}`);
  }
}

//Función para limpiar nuestra lista de amigos en la parte visual.
function limpiarListaAmigos() {
  let listaAmigo = document.getElementById('listaAmigos');
  listaAmigo.innerHTML = ''; 
}

// Función para limpiar nuestro input, cada vez que clickeamos nuestro botón 'Añadir'.
function limpiarInput() {
  document.querySelector('#amigo').value = '';
}