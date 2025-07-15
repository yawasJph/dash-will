import { form } from "./utils.js";
import { User } from "./User.js";
import { isRegisterFormValid } from "./validation.js";

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!isRegisterFormValid()) {
    return; // If the form is not valid, stop the submission
  }

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = new User(name, email, password);

  // Obtener usuarios existentes o array vacío
  const users = JSON.parse(localStorage.getItem('users')) || [];
  // Agregar el nuevo usuario
  users.push(user.toJSON());
  // Guardar el array actualizado
  localStorage.setItem('users', JSON.stringify(users));

  // Opcional: guardar el usuario actual por separado
  //localStorage.setItem('user', JSON.stringify(user.toJSON()));

  // Optionally, you can log the user object to the console
  //console.log(user.toString());

  alert('Account created successfully!');

  // Aquí normalmente enviarías los datos al servidor
  console.log('Creating account with:', { name, email, password });

  // Reset the form after submission
  form.reset();
});
