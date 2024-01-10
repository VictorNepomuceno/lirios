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

const whatsTooltip = document.querySelectorAll("[data-tooltip]");

whatsTooltip.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {
  const toolTipBoxEvent = criarToolTip(this);

  onMouseLeave.toolTipBoxEvent = toolTipBoxEvent;
  onMouseMove.toolTipBoxEvent = toolTipBoxEvent;

  this.addEventListener("mouseleave", onMouseLeave);
  this.addEventListener("mousemove", onMouseMove);
}

const onMouseLeave = {
  handleEvent() {
    this.toolTipBoxEvent.remove();
  },
};

const onMouseMove = {
  handleEvent(event) {
    this.toolTipBoxEvent.style.top = event.pageY + -20 + "px";
    this.toolTipBoxEvent.style.left = event.pageX + -300 + "px";
  },
};

function criarToolTip(element) {
  const toolTipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  toolTipBox.innerText = text;
  toolTipBox.classList.add("tooltip");
  document.body.appendChild(toolTipBox);
  return toolTipBox;
}
