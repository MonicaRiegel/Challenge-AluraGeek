const formulario = document.querySelector("[data-formulario]");

function criarItem(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;
}

formulario.addEventListener("submit", evento => criarItem(evento));