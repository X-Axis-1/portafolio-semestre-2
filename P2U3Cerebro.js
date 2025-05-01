document.getElementById('formRegistro').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recargar la página

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const edad = document.getElementById('edad').value;
  const genero = document.getElementById('genero').value;

  // Mostrar los datos en el div
  const resultado = document.getElementById('resultado');
  resultado.textContent = `Nombre: ${nombre}
Correo: ${email}
Edad: ${edad}
Género: ${genero}`;
});
