// Contacto

  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // evita recargar la página
    successMessage.style.display = "block"; // muestra el mensaje
    form.reset(); // limpia los campos del formulario
});