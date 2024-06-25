import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarItem(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criaItem(imagem, nome, valor);

    window = alert("Produto cadastrado com sucesso!"); 
}

formulario.addEventListener("submit", evento => criarItem(evento));