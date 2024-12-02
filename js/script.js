let likeCount = 0;
let viewCount = 0;

// Función para dar like
function likePost() {
    likeCount++;  // Incrementa el contador de likes
    document.getElementById("like-count").textContent = likeCount;
}

// Función para comentar
function commentPost() {
    // Aquí puedes agregar la lógica para mostrar un formulario o una sección de comentarios
    alert("¡Deja tu comentario!");
}

// Función para contar vistas
function viewPost() {
    viewCount++;  // Incrementa el contador de vistas
    document.getElementById("view-count").textContent = viewCount;
}

// Función para compartir
function sharePost() {
    // Aquí podrías implementar compartir en redes sociales o generar un link para compartir
    alert("¡Post compartido!");
}
