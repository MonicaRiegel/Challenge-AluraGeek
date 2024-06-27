import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

async function deletarItem(id) {
    if (confirm("Remover produto?")) {
        try{
            await conectaApi.deletaItem(id);
            const item = document.querySelector(`[data-id='${id}']`).closest('.mostruario__itens__card');
            if (item) {
                item.remove();
            }
            alert('Produto deletado com sucesso!');
        } catch (err) {
            console.error("Falha ao deletar produto", err);
            alert('Não foi possivel deletar o produto, tente novamente mais tarde.');
        }     
    }
}

function constroiCard(imagem, nome, valor, id) {
    const item = document.createElement("li");
    item.className = "mostruario__itens__card";
    item.innerHTML = `<img class="card__imagens" src="${imagem}" alt="imagem do produto"/>
                        <p class="card__nome">${nome}</p>
                        <div class="card__inf">
                            <p class="card__valor>">${valor}</p>
                            <button class="card__lixo" data-id="${id}">
                                <img src=".img/lixo.png" alt="icone lixeira" height="16px"/>
                            </button>
                        </div>
                    </div>`

const lixeira = item.querySelector(".card__lixo");
lixeira.addEventListener('click', () => deletarItem(id));   

    return item;
}

async function listaItens() {
    const listaApi = await conectaApi.listaItens();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.imagem, elemento.nome, elemento.valor, elemento.id)));
}

listaItens();
