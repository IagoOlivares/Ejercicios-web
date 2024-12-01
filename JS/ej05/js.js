const tiempoInput = document.getElementById("tiempo");
const iniciarBtn = document.getElementById("iniciar");
const posponerBtn = document.getElementById("posponer");
const detenerBtn = document.getElementById("detener");
const temporizadorP = document.getElementById("temporizador");
const alarmaMensajeP = document.getElementById("alarmaMensaje");
const audioAlarma = document.getElementById("audioAlarma");

let cuentaRegresiva;
let tiempoRestante = 0;

function iniciarAlarma() {
  const segundos = parseInt(tiempoInput.value, 10);
  if (isNaN(segundos) || segundos <= 0) {
    alert("Por favor, ingresa un número positivo.");
    return;
  }

  tiempoRestante = segundos;
  temporizadorP.style.display = "block";
  temporizadorP.textContent = `Tiempo restante: ${tiempoRestante} segundos`;
  alarmaMensajeP.style.display = "none";
  iniciarBtn.disabled = true;
  detenerBtn.disabled = false;

  decrementoTiempo();
}

function decrementoTiempo() {
  cuentaRegresiva = setInterval(() => {
    tiempoRestante--;
    temporizadorP.style.display = "block";
    temporizadorP.textContent = `Tiempo restante: ${tiempoRestante} segundos`;

    if (tiempoRestante <= 0) {
      clearInterval(cuentaRegresiva);
      posponerBtn.disabled = false;
      activarAlarma();
    }
  }, 1000);
}

function activarAlarma() {
  temporizadorP.style.display = "none";
  alarmaMensajeP.style.display = "block";
  alarmaMensajeP.textContent = "¡La alarma está sonando!";
  audioAlarma.play();
}

function posponerAlarma() {
  if (tiempoRestante <= 0) {
    tiempoRestante = 5;
    alarmaMensajeP.style.display = "block";
    alarmaMensajeP.textContent = "Alarma pospuesta 5 segundos";
    audioAlarma.pause();
    audioAlarma.currentTime = 0;

    decrementoTiempo();
  }
}

function detenerAlarma() {
  clearInterval(cuentaRegresiva);
  tiempoRestante = 0;
  temporizadorP.style.display = "none";
  alarmaMensajeP.style.display = "block";
  alarmaMensajeP.textContent = "Alarma detenida.";
  audioAlarma.pause();
  audioAlarma.currentTime = 0;
  iniciarBtn.disabled = false;
  posponerBtn.disabled = true;
  detenerBtn.disabled = true;
}

iniciarBtn.addEventListener("click", iniciarAlarma);
posponerBtn.addEventListener("click", posponerAlarma);
detenerBtn.addEventListener("click", detenerAlarma);
