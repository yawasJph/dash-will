import { inputs} from "./utils.js";

export const isRegisterFormValid = () => {

    let isValid = true;
    
    const errorMessages = {
        name: 'Name is required.',
        email: 'Email is required.',
        password: 'Password is required.',
        invalidEmail: 'Please enter a valid email address.',
        shortPassword: 'Password must be at least 6 characters long.'
    };
  
    inputs.forEach(input => {
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
        }
        );

    })

    return isValid // Reset isValid to true before validation checks

    // let errorMessages = [];
    // const name = document.getElementById('name').value.trim();
    // const email = document.getElementById('email').value.trim();
    // const password = document.getElementById('password').value.trim();
    // const errorName = document.getElementById('errorName');
    // const errorEmail = document.getElementById('errorEmail');
    // const errorPassword = document.getElementById('errorPassword');
    // if (!name || !email || !password) {
    //     alert('All fields are required.');
    //     //errorMessages.push('All fields are required.');
    //     if (!name) {
    //         errorName.textContent = 'Name is required.';
    //     }
    //     if (!email) {
    //         errorEmail.textContent = 'Email is required.';
    //     }
    //     if (!password) {
    //         errorPassword.textContent = 'Password is required.';
    //     }     
    //     return false;
    // }

    // if (!validateEmail(email)) {
    //     alert('Please enter a valid email address.');
    //     return false;
    // }

    // if (password.length < 6) {
    //     alert('Password must be at least 6 characters long.');
    //     return false;
    // }

    // return true;
}

export const isLoginFormValid = () => {
    
    console.log(inputsLogin)
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Both email and password are required.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
