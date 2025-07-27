//import { User } from "./User.js";
export const loginForm = document.getElementById('login-form');
export const inputsLogin = loginForm.querySelectorAll('input');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!isLoginFormValid()) {
        return; // If the form is not valid, stop the submission
    }

    const email = inputsLogin[0].value.trim();
    const password = inputsLogin[1].value.trim();

    // Obtener usuarios del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(JSON.stringify(users))

    // Buscar usuario que coincida
    const user = users.find(u => u.email === email && u.pass === password);
    
    if (user) {
        alert('Login successful!');
        // Puedes guardar el usuario logueado si lo deseas
        localStorage.setItem('user', JSON.stringify(user));
        history.pushState({}, '', './index.html'); // Redirigir a la página principal
        window.location.reload(); // Recargar la página para reflejar el cambio

    } else {
        alert('Invalid email or password');
    }

    // Reset the form after submission
    loginForm.reset();
});

const isLoginFormValid = () => {

    let isValid = true;

    const errorMessages = {
        name: 'Name is required.',
        email: 'Email is required.',
        password: 'Password is required.',
        invalidEmail: 'Please enter a valid email address.',
        shortPassword: 'Password must be at least 6 characters long.'
    };

    inputsLogin.forEach(input => {
        const value = input.value.trim();
        const id = input.id;
        const errorElement = document.getElementById(`error-${input.id}`);
        if (errorElement) {
            errorElement.textContent = ''; // Clear previous error messages
        }
        input.classList.remove('border-red-500'); // Remove error class
        input.classList.add('border-gray-300'); // Reset to default border color
        input.classList.remove('border-green-500'); // Remove success class
        input.classList.add('border-gray-300'); // Reset to default border color

        if (!value) {
            isValid = false;
            input.classList.add('border-red-500'); // Add error class
            if (errorElement) {
                errorElement.textContent = errorMessages[id];
                isValid = false;
            }
        }

        input.addEventListener('input', () => {
            if (errorElement) {
                errorElement.textContent = ''; // Clear error message on input
            }
            input.classList.remove('border-red-500'); // Remove error class
            input.classList.add('border-gray-300'); // Reset to default border color
            input.classList.remove('border-green-500'); // Remove success class
            input.classList.add('border-gray-300'); // Reset to default border color
        });

    })
    return isValid; // Return the final validation state
}

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
