function cerrarSesion() {
  window.location.href = "index.html"; 
}

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.classList.toggle('show');
}
function publishPost() {
  const postText = document.getElementById('new-post-text').value;
  const postImage = document.getElementById('post-image').files[0]; // Obtenemos la imagen seleccionada
  const postList = document.getElementById('post-list');

  if (postText.trim() === '' && !postImage) {
      alert("Por favor, escribe algo o selecciona una imagen para tu publicación.");
      return;
  }

  // Crear un nuevo contenedor de publicación
  const postItem = document.createElement('div');
  postItem.classList.add('post-item');
  
  // Crear contenido de la publicación
  let postContent = `
      <div class="post-header">
          <img src="img/tilin.png" alt="User Avatar" class="avatar">
          <div>
              <h3>Walker 412</h3>
              <p>Publicado ahora</p>
          </div>
      </div>
      <div class="post-content">
          <p>${postText}</p>
      </div>
  `;

  // Si hay una imagen seleccionada, la agregamos a la publicación
  if (postImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const imageUrl = e.target.result;
          postContent += `
              <div class="post-image">
                  <img src="${imageUrl}" alt="Imagen publicada" class="post-img">
              </div>
              <div class="interaction-buttons">
          <button id="like-btn" onclick="likePost(this)">
              <img src="img/like.png" alt="Me gusta" title="Me gusta">
              <span id="like-count">0</span>
          </button>
          <button id="comment-btn" onclick="toggleCommentBox(this)">
              <img src="img/comentarios.png" alt="Comentario" title="Comentar">
          </button>
          <button id="view-btn" onclick="viewPost()">
              <img src="img/views.png" alt="Vistas" title="Vistas">
              <span id="view-count">0</span>
          </button>
          <button id="share-btn" onclick="sharePost()">
              <img src="img/compartir.png" alt="Compartir" title="Compartir">
          </button>
      </div>
      <div id="comment-box" class="comment-section" style="display:none;">
          <textarea id="comment-input" placeholder="Escribe tu comentario..."></textarea>
          <button id="submit-comment" onclick="submitComment()">Enviar</button>
      </div>
      <div id="comment-list" class="comment-list"></div>
          `;
          postItem.innerHTML = postContent;
          postList.prepend(postItem);
      };
      reader.readAsDataURL(postImage); // Convertir la imagen a una URL
  } else {
      postItem.innerHTML = postContent;
      postList.prepend(postItem);
  }

  // Limpiar el campo de texto y la imagen después de la publicación
  document.getElementById('new-post-text').value = '';
  document.getElementById('post-image').value = '';
}


// Función para manejar el "Me gusta"
function likePost(button) {
  const likeCount = button.previousElementSibling;
  let currentLikes = parseInt(likeCount.textContent || 0);
  currentLikes += 1;
  likeCount.textContent = currentLikes;
}

// Función para mostrar las notificaciones
function showNotifications() {
  const notificationList = document.getElementById('notificationList');
  notificationList.innerHTML = '<p>No tienes nuevas notificaciones.</p>';
}

// Función para mostrar los comentarios
function showComments() {
  const commentList = document.getElementById('commentList');
  commentList.innerHTML = '<p>No tienes nuevos comentarios.</p>';
}

// Función para cargar la imagen, video, audio o foto
function handleFileSelect(event, type) {
  const fileInput = event.target;
  const file = fileInput.files[0];
  const fileName = file ? file.name : '';

  // Mostrar el nombre del archivo o un mensaje
  alert(`${type} seleccionado: ${fileName}`);
}

// Configuración de eventos para los inputs de archivos
document.getElementById('post-image').addEventListener('change', (event) => handleFileSelect(event, 'Imagen'));
document.getElementById('post-video').addEventListener('change', (event) => handleFileSelect(event, 'Video'));
document.getElementById('post-audio').addEventListener('change', (event) => handleFileSelect(event, 'Audio'));
document.getElementById('take-photo').addEventListener('change', (event) => handleFileSelect(event, 'Foto'));

// Agregar el evento de cerrar sesión
document.querySelector('a[href="#"]').addEventListener('click', cerrarSesion);

// Mostrar el menú de perfil (con la clase "show")
document.querySelector('.profile-icon').addEventListener('click', toggleDropdown);

