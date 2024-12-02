document.addEventListener('DOMContentLoaded', function() {
    // Elementos de la página
    const loadingScreen = document.getElementById('loading-screen');  // Página de carga
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const profileSection = document.getElementById('profile-section');
    
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Desaparecer la página de carga después de un breve delay
    setTimeout(function() {
        loadingScreen.style.display = 'none';  // Ocultar la página de carga
        loginSection.style.display = 'block';  // Mostrar la sección de login
    }, 2000); // Tiempo de espera antes de mostrar el login

    // Función para mostrar la sección de login
    showRegister.addEventListener('click', function() {
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });

    // Función para mostrar la sección de registro
    showLogin.addEventListener('click', function() {
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Simulación de inicio de sesión
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Aquí deberías verificar las credenciales, por ejemplo:
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        if (email && password) {  // Simulación de autenticación exitosa
            window.location.href="http://127.0.0.1:5500/user-profile.html";
        } else {
            alert('Por favor, ingresa un correo y una contraseña válidos');
        }
    });

    // Simulación de registro
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password === confirmPassword) {
            alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
            // Aquí puedes redirigir o cambiar a la sección de login
            registerSection.style.display = 'none';
            loginSection.style.display = 'block';
        } else {
            alert('Las contraseñas no coinciden.');
        }
    });
});
