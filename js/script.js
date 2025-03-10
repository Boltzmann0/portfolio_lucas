// Adiciona rolagem suave ao clicar no menu
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Efeito de fade-in ao rolar a página
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in");
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("visible");
        }
    });
});

// Efeito de digitação no nome
const title = document.querySelector(".typing");
const text = "Lucas Lopes";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        title.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();
