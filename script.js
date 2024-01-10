const btnMobile = document.querySelector(".toggle-menu");

function menuAtivo() {
  const nav = document.querySelector(".navbar-list");
  nav.classList.toggle("ativo");
  const shadowMenu = document.querySelector(".header-menu");
  shadowMenu.classList.toggle("ativo");

  document.onclick = function (e) {
    if (!nav.contains(e.target) && !btnMobile.contains(e.target)) {
      nav.classList.remove("ativo");
      shadowMenu.classList.remove("ativo");
    }
  };
}

btnMobile.addEventListener("click", menuAtivo);

new SimpleAnime();

const jsScroll = document.querySelectorAll(".js-scroll");

const active = "ativo";
const halfWidowScreen = window.innerHeight * 0.6;

function animationOnScroll() {
  jsScroll.forEach((item) => {
    const articleTop = item.getBoundingClientRect().top;
    const isVisible = articleTop - halfWidowScreen < 0;
    if (isVisible) {
      item.classList.add("ativo");
    } else {
      item.classList.remove("ativo");
    }
  });
}

window.addEventListener("scroll", animationOnScroll);
