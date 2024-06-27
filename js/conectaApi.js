async function listaItens() {
    const conexao = await fetch("http://localhost:3000/itens");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaItem(imagem, nome, valor) {
    const conexao = await fetch("http://localhost:3000/itens", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            valor: `$ ${valor}`
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaItem(id) {
    const conexao = await fetch(`http://localhost:3000/itens/${id}`, {
        method: "DELETE"
    })
    if(!conexao.ok) {
        throw new Error('Erro ao deletar produto');
    } else {
    return conexao.json();
    }
}


export const conectaApi = {
    listaItens,
    criaItem,
    deletaItem
}