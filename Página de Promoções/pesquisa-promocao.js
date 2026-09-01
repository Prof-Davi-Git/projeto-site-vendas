// ATUALIZAÇÃO 01/09 - PESQUISA DOS PRODUTOS PROMOCIONAIS

function normalizarTextoPesquisa(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

// ATUALIZAÇÃO 01/09 - LOCALIZA O PRODUTO DIGITADO E LEVA O USUÁRIO ATÉ O CARD
function pesquisarPromocao() {
    const campoPesquisa = document.getElementById("pesquisaPromocao");
    const mensagem = document.getElementById("resultadoPesquisaPromocao");

    if (!campoPesquisa || !mensagem) {
        return;
    }

    const termo = normalizarTextoPesquisa(campoPesquisa.value.trim());

    document.querySelectorAll(".card-promocao.encontrado").forEach(function(card) {
        card.classList.remove("encontrado");
    });

    if (termo === "") {
        mensagem.textContent = "";
        return;
    }

    const cards = document.querySelectorAll(".card-promocao");
    let cardEncontrado = null;

    cards.forEach(function(card) {
        if (cardEncontrado) {
            return;
        }

        const nomeProduto = card.querySelector("h3");

        if (
            nomeProduto &&
            normalizarTextoPesquisa(nomeProduto.textContent).includes(termo)
        ) {
            cardEncontrado = card;
        }
    });

    if (!cardEncontrado) {
        mensagem.textContent = "Nenhum produto promocional encontrado.";
        mensagem.classList.add("sem-resultado");
        return;
    }

    mensagem.classList.remove("sem-resultado");

    const nomeEncontrado = cardEncontrado.querySelector("h3").textContent;
    const secao = cardEncontrado.closest(".secao-promocao");
    const janela = cardEncontrado.closest(".janela-carrossel");

    mensagem.textContent = "Produto encontrado: " + nomeEncontrado;

    if (secao) {
        secao.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (janela) {
        const categoria = janela.id.replace("janela-", "");

        pararCarrossel(categoria);

        const posicao =
            cardEncontrado.offsetLeft -
            (janela.clientWidth / 2) +
            (cardEncontrado.offsetWidth / 2);

        janela.scrollTo({
            left: posicao,
            behavior: "smooth"
        });

        setTimeout(function() {
            iniciarCarrossel(categoria);
        }, 5000);
    }

    cardEncontrado.classList.add("encontrado");

    setTimeout(function() {
        cardEncontrado.classList.remove("encontrado");
    }, 5000);
}
