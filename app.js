// 1. Crear un array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos a la lista
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim(); // Obtener el nombre desde el input

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Si el nombre está vacío, salimos de la función
    }

    amigos.push(nombre); // Agregar el nombre al array
    document.getElementById('amigo').value = ""; // Limpiar el campo de texto después de agregarlo

    actualizarLista(); // Actualizar la lista visible en la página

    // **Commit 1**: Funcionalidad de agregar amigos implementada.
}
// 3. Función para actualizar la lista de amigos visualmente
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li); // Agregar cada amigo como elemento <li> en la lista
    });

    // **Commit 2**: Funcionalidad de actualizar la lista de amigos implementada.
}
// 4. Función para sortear un amigo secreto de forma aleatoria
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return; // Si no hay amigos en la lista, no hacemos el sorteo
    }

    // Seleccionar un índice aleatorio en el array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre del amigo sorteado en la sección de resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>¡El amigo secreto es: ${amigoSorteado}!</strong></li>`;

    // **Commit 3**: Funcionalidad de sortear un amigo secreto implementada.
}

