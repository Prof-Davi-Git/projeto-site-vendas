// ATUALIZAÇÃO 01/09 - TODO ESTE ARQUIVO FOI CRIADO NESTA ATUALIZAÇÃO

// ATUALIZAÇÃO 01/09 - PEGA O ID DO PRODUTO PROMOCIONAL NA URL
const parametrosPromocao =
    new URLSearchParams(window.location.search);

// ATUALIZAÇÃO 01/09 - SE ABRIR SEM ID, CARREGA O PRODUTO 1
const idPromocao =
    parametrosPromocao.get("id") || "1";

// ATUALIZAÇÃO 01/09 - LOCALIZA O PRODUTO NO ARQUIVO produtos-promocao.js
const produtoPromocao =
    produtosPromocao[idPromocao] || produtosPromocao[1];

// ATUALIZAÇÃO 01/09 - CARREGA O PRODUTO NA TELA
carregarProdutoPromocao();

// ATUALIZAÇÃO 01/09 - PREENCHE AS INFORMAÇÕES DO PRODUTO
function carregarProdutoPromocao() {

    document
        .getElementById("categoriaProduto")
        .textContent =
        produtoPromocao.categoria;

    document
        .getElementById("nomeProduto")
        .textContent =
        produtoPromocao.nome;

    document
        .getElementById("precoOriginalProduto")
        .textContent =
        "De " + produtoPromocao.precoOriginal;

    document
        .getElementById("precoPromocionalProduto")
        .textContent =
        "Por " + produtoPromocao.precoPromocional;

    document
        .getElementById("descricaoProduto")
        .textContent =
        produtoPromocao.descricao;

    document
        .getElementById("descontoProduto")
        .textContent =
        produtoPromocao.desconto;

    document
        .getElementById("validadeProduto")
        .textContent =
        "Oferta válida até " + produtoPromocao.validade;

    criarMiniaturasPromocao();

    configurarTamanhosPromocao();
}

// ATUALIZAÇÃO 01/09 - CRIA AS MINIATURAS DAS VARIAÇÕES
function criarMiniaturasPromocao() {

    let area =
        document.getElementById("miniaturas");

    area.innerHTML = "";

    produtoPromocao.variacoes.forEach(
        function(variacao) {

            let imagem =
                document.createElement("img");

            imagem.src =
                variacao.imagem;

            imagem.alt =
                variacao.nome;

            imagem.dataset.nome =
                variacao.nome;

            imagem.dataset.especificacao =
                variacao.especificacao;

            imagem.onclick =
                function() {

                    trocarModeloPromocao(imagem);

                };

            area.appendChild(imagem);

        }
    );

    let primeiraImagem =
        area.querySelector("img");

    if (primeiraImagem) {

        trocarModeloPromocao(primeiraImagem);

    }
}

// ATUALIZAÇÃO 01/09 - TROCA O MODELO SELECIONADO
function trocarModeloPromocao(imagem) {

    document
        .getElementById("imagemPrincipal")
        .src =
        imagem.src;

    document
        .getElementById("nomeModelo")
        .textContent =
        imagem.dataset.nome;

    document
        .getElementById("especificacaoModelo")
        .textContent =
        imagem.dataset.especificacao;

    let miniaturas =
        document.querySelectorAll(
            ".miniaturas img"
        );

    miniaturas.forEach(function(item) {

        item.classList.remove(
            "selecionada"
        );

    });

    imagem.classList.add(
        "selecionada"
    );
}

// ATUALIZAÇÃO 01/09 - MOSTRA TAMANHOS SOMENTE QUANDO temTamanho FOR true
function configurarTamanhosPromocao() {

    let area =
        document.getElementById(
            "areaTamanhos"
        );

    let tamanhos =
        document.getElementById(
            "tamanhos"
        );

    tamanhos.innerHTML = "";

    if (produtoPromocao.temTamanho === true) {

        area.style.display =
            "block";

        produtoPromocao.tamanhos.forEach(
            function(tamanho) {

                let botao =
                    document.createElement(
                        "button"
                    );

                botao.textContent =
                    tamanho;

                botao.onclick =
                    function() {

                        selecionarTamanhoPromocao(
                            botao
                        );

                    };

                tamanhos.appendChild(
                    botao
                );

            }
        );

    } else {

        area.style.display =
            "none";

    }
}

// ATUALIZAÇÃO 01/09 - SELECIONA O TAMANHO
function selecionarTamanhoPromocao(botao) {

    let botoes =
        document.querySelectorAll(
            ".tamanhos button"
        );

    botoes.forEach(function(item) {

        item.classList.remove(
            "selecionado"
        );

    });

    botao.classList.add(
        "selecionado"
    );
}
