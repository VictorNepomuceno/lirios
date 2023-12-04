// document.addEventListener("DOMContentLoaded", function () {
//   const movableImage = document.getElementById("movableImage");
//   const originalTop = parseInt(getComputedStyle(movableImage).top);

//   function moveImage() {
//     movableImage.style.top = originalTop - 30 + "px";

//     setTimeout(function () {
//       movableImage.style.top = originalTop + "px";
//     }, 1000);
//   }

//   setInterval(moveImage, 8000); // Movimenta a imagem a cada 17 segundos (15s para cima + 2s para baixo)
// });

new SimpleAnime();
