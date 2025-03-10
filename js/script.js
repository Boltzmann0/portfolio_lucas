let player = document.getElementById("player");
let position = 50;
let score = 0;

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


