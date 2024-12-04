// Elementos de la página
const loadingScreen = document.getElementById('loading-screen'); // Página de carga
const loginSection = document.getElementById('login-section'); // Sección de login
const registerSection = document.getElementById('register-section'); // Sección de registro
const profileSection = document.getElementById('profile-section'); // Sección de perfil

const showRegister = document.getElementById('show-register'); // Botón para mostrar registro
const showLogin = document.getElementById('show-login'); // Botón para mostrar login
const loginForm = document.getElementById('login-form'); // Formulario de login
const registerForm = document.getElementById('register-form'); // Formulario de registro

// Desaparecer la página de carga después de un breve delay
setTimeout(function () {
  loadingScreen.style.display = 'none'; // Ocultar la página de carga
  loginSection.style.display = 'block'; // Mostrar la sección de login
}, 2000); // Tiempo de espera antes de mostrar el login

// Función para mostrar la sección de registro
showRegister.addEventListener('click', function () {
  loginSection.style.display = 'none';
  registerSection.style.display = 'block';
});

// Función para mostrar la sección de login
showLogin.addEventListener('click', function () {
  registerSection.style.display = 'none';
  loginSection.style.display = 'block';
});

// Simulación de base de datos de usuarios
const users = []; // Aquí se almacenan temporalmente los usuarios registrados

// Simulación de inicio de sesión
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener datos del formulario de login
  const loginEmail = document.getElementById('login-email').value;
  const loginPassword = document.getElementById('login-password').value;

  // Validar usuario
  const user = users.find(
    (user) => user.email === loginEmail && user.password === loginPassword
  );

  if (user) {
    alert('Inicio de sesión exitoso. Redirigiendo al perfil...');
    window.location.href = "http://127.0.0.1:5500/user-profile.html"; // Redirigir a la página de perfil
  } else {
    alert('Correo o contraseña incorrectos. Por favor, intenta nuevamente.');
  }
});

// Simulación de registro
registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener datos del formulario de registro
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;

  // Validar contraseñas coinciden
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  // Verificar si el usuario ya existe
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    alert('Este correo ya está registrado. Por favor, inicia sesión.');
    return;
  }

  // Registrar nuevo usuario
  users.push({ name, email, password });
  alert('¡Registro exitoso! Ahora puedes iniciar sesión.');

  // Cambiar a la sección de login
  registerSection.style.display = 'none';
  loginSection.style.display = 'block';
});
