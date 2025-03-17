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
