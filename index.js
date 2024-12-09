 document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = form.querySelector('input[type="email"]');
    const statusRadios = form.querySelectorAll('input[name="status"]');
    const submitButton = form.querySelector("button");
    const alertMessage = document.createElement("p");
    alertMessage.style.display = "none"; // Oculto por defecto
    alertMessage.style.marginTop = "8px";
    alertMessage.style.fontWeight = "bold";
    alertMessage.style.fontSize = "1rem";

    // Insertar el mensaje de alerta debajo del botón
    form.appendChild(alertMessage);

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evitar el envío del formulario por defecto

      // Validar el email
      const emailValue = emailInput.value.trim();
      if (!emailValue) {
        alertMessage.textContent = "Por favor, ingresa tu correo electrónico.";
        alertMessage.style.color = "red";
        alertMessage.style.display = "block";
        return;
      }

      // Validar formato de correo
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailValue)) {
        alertMessage.textContent = "Por favor, ingresa un correo válido.";
        alertMessage.style.color = "red";
        alertMessage.style.display = "block";
        return;
      }

      // Validar si un radio está seleccionado
      const isRadioChecked = Array.from(statusRadios).some((radio) => radio.checked);
      if (!isRadioChecked) {
        alertMessage.textContent = "Por favor, selecciona una opción.";
        alertMessage.style.color = "red";
        alertMessage.style.display = "block";
        return;
      }

      // Si pasa las validaciones
      alertMessage.textContent = "¡Formulario enviado con éxito!";
      alertMessage.style.color = "green";
      alertMessage.style.display = "block";

      // Opcional: Resetear el formulario después de un tiempo
      setTimeout(() => {
        form.reset();
        alertMessage.style.display = "none";
      }, 3000);
    });
  });

