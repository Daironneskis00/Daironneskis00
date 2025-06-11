function verificarAcceso() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  const usuarioValido = "cliente1";
  const claveValida = "segura2024";

  if (usuario === usuarioValido && password === claveValida) {
    window.location.href = "panel.html";
  } else {
    document.getElementById("mensaje-error").textContent = "Usuario o contraseña incorrectos.";
  }
}
