const carrossel = document.getElementById("carrossel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const produtos = document.querySelectorAll(".produto");

let index = 0;
const total = produtos.length;
const visiveis = 4;

function atualizar() {
    const largura = produtos[0].offsetWidth + 30; // largura + gap
    carrossel.style.transform = `translateX(-${index * largura}px)`;
}

next.addEventListener("click", () => {
    if (index < total - visiveis) {
        index++;
        atualizar();
    }
});

prev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        atualizar();
    }
});

window.addEventListener("resize", atualizar);

window.addEventListener('resize', updateCarousel);

