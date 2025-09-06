// Script de acessibilidade
const botao = document.getElementById("botao-acessibilidade");
const opcoes = document.getElementById("opcoes-acessibilidade");
const aumentar = document.getElementById("aumentar-fonte");
const diminuir = document.getElementById("diminuir-fonte");
const contraste = document.getElementById("alterna-contraste");

// Toggle menu acessibilidade
botao.addEventListener("click", () => {
    opcoes.classList.toggle("apresenta-lista");
});

// Aumentar fonte
aumentar.addEventListener("click", () => {
    document.body.style.fontSize = "larger";
});

// Diminuir fonte
diminuir.addEventListener("click", () => {
    document.body.style.fontSize = "smaller";
});

// Alternar contraste
contraste.addEventListener("click", () => {
    document.body.classList.toggle("contraste-alto");
});
