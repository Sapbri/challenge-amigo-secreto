// Array Amigos
let amigos = [];

// Función agregar amigo desde el input.
function agregarAmigo() {
  let nombreAmigo = document.getElementById('amigo').value;
  if (nombreAmigo == "") {
    alert('Por favor, inserte un nombre.');
  } else {
    amigos.push(nombreAmigo);
    asignarTextoListaAmigos(nombreAmigo);
  }
  console.log(amigos);
  limpiarInput();
}

// Función para mostrar los nombres de nuestros amigos secretos, cada uno en un elemeto li. Se limpia la lista para evitar los nombres duplicados al actualizar.
function asignarTextoListaAmigos() {
  let listaAmigoSecreto = document.getElementById('listaAmigos');
  listaAmigoSecreto.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    textoNombreAmigo = amigos[i];
    li.appendChild(document.createTextNode(textoNombreAmigo));
    listaAmigoSecreto.appendChild(li);
  }
}

// Función para limpiar nuestro input, cada vez que clickeamos nuestro botón 'Añadir'.
function limpiarInput() {
  document.querySelector('#amigo').value = '';
}
