function verificarCredenciales() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación básica
    if (email && password) {
      return true; // Redirige a perfil.html
    } else {
      alert("Usuario o contraseña incorrectos");
      return false; // Previene el envío del formulario
    }
  }