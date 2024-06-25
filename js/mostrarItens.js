import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(imagem, nome, valor) {
    const item = document.createElement("li");
    item.className = "mostruario__itens__card";
    item.innerHTML = `<img class="card__imagens" src="${imagem}" alt="imagem do produto"/>
                        <p class="card__nome">${nome}</p>
                        <div class="card__inf">
                            <p class="card__valor>">${valor}</p>
                            <img class="card__lixo" src="./img/lixo.png" alt="icone lixeira" height="16px"/>
                        </div>
                    </div>`

    return item;
}

async function listaItens() {
    const listaApi = await conectaApi.listaItens();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.imagem, elemento.nome, elemento.valor)));
}

listaItens();