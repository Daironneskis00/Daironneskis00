// script.js
function verificar() {
  const password = document.getElementById("password").value;
  const claveCorrecta = "comunidad2024"; // Aquí puedes cambiar la contraseña

  if (password === claveCorrecta) {
    window.location.href = "panel.html";
  } else {
    document.getElementById("mensaje-error").textContent = "Contraseña incorrecta.";
  }
}
