const startDate = new Date("August 23, 2024 22:25:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Dias totais
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
    const seconds = Math.floor((diff % (1000 * 60)) / 1000); // Segundos restantes

    document.getElementById("counter").textContent = 
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

function goToPage2() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    showBackButton(); // Mostra o botão "Voltar"
}

function goToPage3() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    showBackButton(); // Garante que o botão "Voltar" continue visível
}

function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const container = document.getElementById("page2");

    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function toggleImage() {
    const image = document.getElementById("image");
    const button = document.getElementById("toggleButton");

    if (image.style.display === "none" || !image.style.display) {
        image.style.display = "block"; // Exibe a imagem
        button.textContent = "–😻 + (–🌹)"; // Altera o texto do botão
    } else {
        image.style.display = "none"; // Esconde a imagem
        button.textContent = "😻 + 🌹"; // Restaura o texto do botão
    }
}

function playClickSound() {
    const clickSound = document.getElementById("clickSound");
    clickSound.play();
}

// Função para voltar à página anterior
function goBack() {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");

    if (page3.style.display === "block") {
        page3.style.display = "none";
        page2.style.display = "block";
    } else if (page2.style.display === "block") {
        page2.style.display = "none";
        page1.style.display = "block";
        document.getElementById("back-button").style.display = "none"; // Oculta o botão ao voltar para a página 1
    }
}

// Lógica para exibir o botão "Voltar" a partir da página 2
function showBackButton() {
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const backButton = document.getElementById("back-button");

    if (page2.style.display === "block" || page3.style.display === "block") {
        backButton.style.display = "block";
    }
}