

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");
    
     // Exemplo simples de validação
     if (username === "chesterlopes65@gmail.com" && password === "82406541") {
        // Login bem-sucedido, redirecionar para a página de formulário
        window.location.href = "formulario.html";
    } else {
        messageElement.style.color = "red";
        messageElement.innerHTML = "Usuário ou senha incorretos.";
    }
});


// Alterar a imagem de fundo aleatoriamente
window.onload = function() {
    const imagens = [
        './assets/imagem moedas.jpg',
        './assets/moedas.jpg',
        './assets/parede.jpg',
        './assets/mao com dinheiro.jpg',
        './assets/euro.jpg',
        './assets/montante dinheiro.jpg'
    ];

    const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
    document.body.style.backgroundImage = `url('${imagemAleatoria}')`;
};


