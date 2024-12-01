const colores = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33F0",
  "#33FFF5",
];

const contenido = document.getElementById("contenido");

let index = 0;

setInterval(function () {
  contenido.style.backgroundColor = colores[index];
  if (index < colores.length - 1) {
    index++;
  } else {
    index = 0;
  }
}, 1000);

console.log(colores.length);
