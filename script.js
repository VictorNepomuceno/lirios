const btnMobile = document.querySelector(".toggle-menu");

function menuAtivo() {
  const nav = document.querySelector(".navbar-list");
  nav.classList.toggle("ativo");
  const shadowMenu = document.querySelector(".header-menu");
  shadowMenu.classList.toggle("ativo");
}

btnMobile.addEventListener("click", menuAtivo);

new SimpleAnime();
