function actualizarHora() {
  const elementos = document.querySelectorAll(".now");
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();

  elementos.forEach((element) => {
    element.textContent = hora;
  });
}

setInterval(actualizarHora, 1000);

actualizarHora();
