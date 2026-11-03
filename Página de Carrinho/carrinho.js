// ATUALIZAÇÃO 03/11 - CONTROLA A PÁGINA DO CARRINHO

let freteAtual = null;
let distanciaAtual = null;
let prazoAtual = null;
let formaPagamento = "";

const usuarioCarrinho =
    JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioCarrinho) {

    localStorage.setItem(
        "paginaRetornoLogin",
        window.location.href
    );

    window.location.href =
        "../Página de Login/login.html";
}


// ATUALIZAÇÃO 03/11 - CADA USUÁRIO POSSUI SEU PRÓPRIO CARRINHO

function chaveCarrinho() {

    return "carrinho_" + usuarioCarrinho.email;
}


function obterCarrinho() {

    return JSON.parse(
        localStorage.getItem(chaveCarrinho())
    ) || [];
}


function salvarCarrinho(carrinho) {

    localStorage.setItem(
        chaveCarrinho(),
        JSON.stringify(carrinho)
    );
}


// ATUALIZAÇÃO 03/11 - FORMATA VALORES PARA REAIS

function formatarPreco(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


// ATUALIZAÇÃO 03/11 - MOSTRA OS PRODUTOS SALVOS

function carregarCarrinho() {

    const carrinho =
        obterCarrinho();

    const lista =
        document.getElementById("listaCarrinho");

    const vazio =
        document.getElementById("carrinhoVazio");

    lista.innerHTML = "";

    if (carrinho.length === 0) {

        vazio.style.display = "block";

        // ATUALIZAÇÃO 03/11 - SEM PRODUTOS, O FRETE VOLTA A SER CALCULADO DEPOIS
        freteAtual = null;
        distanciaAtual = null;
        prazoAtual = null;

    } else {

        vazio.style.display = "none";
    }

    carrinho.forEach(
        function(item, indice) {

            const artigo =
                document.createElement("article");

            artigo.className =
                "item-carrinho";

            const tamanhoTexto =
                item.tamanho
                    ? "<p>Tamanho: " + item.tamanho + "</p>"
                    : "";

            artigo.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">

                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <p>Modelo: ${item.modelo}</p>
                    ${tamanhoTexto}
                    <p class="item-preco">${formatarPreco(item.preco)}</p>
                </div>

                <div class="controles-item">
                    <div class="quantidade">
                        <button
                            type="button"
                            onclick="alterarQuantidade(${indice}, -1)"
                        >
                            −
                        </button>

                        <span>${item.quantidade}</span>

                        <button
                            type="button"
                            onclick="alterarQuantidade(${indice}, 1)"
                        >
                            +
                        </button>
                    </div>

                    <button
                        type="button"
                        class="remover"
                        onclick="removerItem(${indice})"
                    >
                        REMOVER
                    </button>
                </div>
            `;

            lista.appendChild(artigo);
        }
    );

    atualizarResumo();
}


// ATUALIZAÇÃO 03/11 - MUDA A QUANTIDADE

function alterarQuantidade(indice, valor) {

    const carrinho =
        obterCarrinho();

    carrinho[indice].quantidade += valor;

    if (carrinho[indice].quantidade <= 0) {

        carrinho.splice(indice, 1);
    }

    salvarCarrinho(carrinho);
    carregarCarrinho();
}


// ATUALIZAÇÃO 03/11 - REMOVE UM PRODUTO

function removerItem(indice) {

    const carrinho =
        obterCarrinho();

    carrinho.splice(indice, 1);

    salvarCarrinho(carrinho);
    carregarCarrinho();
}


// ATUALIZAÇÃO 03/11 - SOMA OS PRODUTOS E O FRETE

function calcularSubtotal() {

    return obterCarrinho().reduce(
        function(total, item) {

            return total +
                item.preco * item.quantidade;
        },
        0
    );
}


function atualizarResumo() {

    const carrinho =
        obterCarrinho();

    const quantidade =
        carrinho.reduce(
            function(total, item) {

                return total + item.quantidade;
            },
            0
        );

    const subtotal =
        calcularSubtotal();

    const total =
        subtotal + (freteAtual || 0);

    document
        .getElementById("quantidadeItens")
        .textContent =
        quantidade === 1
            ? "1 item"
            : quantidade + " itens";

    document
        .getElementById("subtotalCompra")
        .textContent =
        formatarPreco(subtotal);

    document
        .getElementById("freteCompra")
        .textContent =
        freteAtual === null
            ? "A calcular"
            : formatarPreco(freteAtual);

    document
        .getElementById("totalCompra")
        .textContent =
        formatarPreco(total);

    document
        .getElementById("totalFinal")
        .textContent =
        formatarPreco(total);
}


// ATUALIZAÇÃO 03/11 - CALCULA UMA ESTIMATIVA PELO CEP
//
// A LOJA FÍSICA ESTÁ EM SÃO PAULO.
// PARA ESTE PROJETO ESCOLAR, O PRIMEIRO NÚMERO DO CEP
// É USADO PARA GERAR UMA DISTÂNCIA APROXIMADA.

function calcularFrete() {

    const cep =
        document
            .getElementById("cep")
            .value
            .replace(/\D/g, "");

    const endereco =
        document.getElementById("endereco").value.trim();

    const numero =
        document.getElementById("numero").value.trim();

    const cidade =
        document.getElementById("cidade").value.trim();

    const estado =
        document.getElementById("estado").value.trim();

    const resultado =
        document.getElementById("resultadoFrete");

    if (
        cep.length !== 8 ||
        !endereco ||
        !numero ||
        !cidade ||
        estado.length !== 2
    ) {

        resultado.textContent =
            "Preencha CEP, endereço, número, cidade e UF para calcular o frete.";

        return;
    }

    const primeiroNumero =
        Number(cep.charAt(0));

    const distancias = {
        0: 25,
        1: 220,
        2: 450,
        3: 590,
        4: 1500,
        5: 2100,
        6: 2500,
        7: 1000,
        8: 650,
        9: 1100
    };

    distanciaAtual =
        distancias[primeiroNumero] || 500;

    freteAtual =
        9.90 + distanciaAtual * 0.04;

    freteAtual =
        Math.min(freteAtual, 109.90);

    if (distanciaAtual <= 100) {

        prazoAtual = "1 a 2 dias úteis";

    } else if (distanciaAtual <= 500) {

        prazoAtual = "3 a 4 dias úteis";

    } else if (distanciaAtual <= 1000) {

        prazoAtual = "4 a 6 dias úteis";

    } else {

        prazoAtual = "6 a 9 dias úteis";
    }

    resultado.innerHTML =
        "<strong>Frete calculado:</strong> " +
        formatarPreco(freteAtual) +
        "<br>Distância aproximada da loja: " +
        distanciaAtual +
        " km" +
        "<br>Prazo estimado: " +
        prazoAtual;

    atualizarResumo();
}


// ATUALIZAÇÃO 03/11 - MOSTRA OS CAMPOS DE CADA PAGAMENTO

function selecionarPagamento(tipo) {

    formaPagamento = tipo;

    const areaPix =
        document.getElementById("areaPix");

    const areaCartao =
        document.getElementById("areaCartao");

    const areaParcelas =
        document.getElementById("areaParcelas");

    areaPix.classList.add("escondido");
    areaCartao.classList.add("escondido");
    areaParcelas.classList.add("escondido");

    if (tipo === "PIX") {

        areaPix.classList.remove("escondido");
        return;
    }

    areaCartao.classList.remove("escondido");

    if (tipo === "CRÉDITO") {

        areaParcelas.classList.remove("escondido");
    }
}


// ATUALIZAÇÃO 03/11 - FINALIZA A COMPRA

function finalizarCompra() {

    const mensagem =
        document.getElementById("mensagemFinalizacao");

    mensagem.textContent = "";

    const carrinho =
        obterCarrinho();

    if (carrinho.length === 0) {

        mensagem.textContent =
            "Adicione pelo menos um produto ao carrinho.";

        return;
    }

    if (freteAtual === null) {

        mensagem.textContent =
            "Calcule o frete antes de finalizar.";

        return;
    }

    if (!formaPagamento) {

        mensagem.textContent =
            "Escolha uma forma de pagamento.";

        return;
    }

    if (
        formaPagamento === "CRÉDITO" ||
        formaPagamento === "DÉBITO"
    ) {

        const numeroCartao =
            document.getElementById("numeroCartao").value.trim();

        const nomeCartao =
            document.getElementById("nomeCartao").value.trim();

        const validadeCartao =
            document.getElementById("validadeCartao").value.trim();

        const cvvCartao =
            document.getElementById("cvvCartao").value.trim();

        if (
            !numeroCartao ||
            !nomeCartao ||
            !validadeCartao ||
            !cvvCartao
        ) {

            mensagem.textContent =
                "Preencha os dados do cartão para continuar.";

            return;
        }
    }

    const total =
        calcularSubtotal() + freteAtual;

    localStorage.removeItem(chaveCarrinho());

    document
        .getElementById("conteudoCompra")
        .classList.add("escondido");

    document
        .getElementById("confirmacaoCompra")
        .classList.remove("escondido");

    document
        .getElementById("textoConfirmacao")
        .textContent =
        "Obrigado, " +
        usuarioCarrinho.nome +
        "! Os detalhes da compra e a nota foram enviados para " +
        usuarioCarrinho.email +
        ".";

    document
        .getElementById("totalConfirmacao")
        .textContent =
        formatarPreco(total);
}


// ATUALIZAÇÃO 03/11 - INICIA A PÁGINA

document.addEventListener(
    "DOMContentLoaded",
    function() {

        carregarCarrinho();

        const campoCep =
            document.getElementById("cep");

        campoCep.addEventListener(
            "input",
            function() {

                let valor =
                    campoCep.value.replace(/\D/g, "");

                if (valor.length > 5) {

                    valor =
                        valor.slice(0, 5) +
                        "-" +
                        valor.slice(5, 8);
                }

                campoCep.value = valor;
            }
        );
    }
);