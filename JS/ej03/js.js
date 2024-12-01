function actualizarHora() {
  const contenido = document.getElementById("contenido");
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  contenido.textContent = hora;
}

setInterval(actualizarHora, 1000);

actualizarHora();
