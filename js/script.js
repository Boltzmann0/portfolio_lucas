let player = document.getElementById("player");
let position = 50;
let score = 0;

// Efeito de aparecer na rolagem
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


// Movimentar personagem
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        position += 20;
        player.style.transform = `translateX(${position}px)`;
    }
    if (event.key === "ArrowLeft" && position > 50) {
        position -= 20;
        player.style.transform = `translateX(${position}px)`;
    }
});

// Aumentar score ao clicar
player.addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score;
});
