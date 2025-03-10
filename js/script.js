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

document.addEventListener("DOMContentLoaded", function () {
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
});

// Animação das barras de progresso ao rolar a página
window.addEventListener("scroll", function () {
    const skills = document.querySelectorAll(".progress");

    skills.forEach(skill => {
        const position = skill.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            skill.style.width = skill.dataset.width;
        }
    });
});

// Efeito de fade-in ao rolar a página
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in, .project-card");

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("visible");
        }
    });
});

// Efeito de fade-in ao rolar a página
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in, .project-card");

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            element.classList.add("visible");
        }
    });
});

