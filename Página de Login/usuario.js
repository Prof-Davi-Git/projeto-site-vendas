// ATUALIZAÇÃO 03/11 - CONTROLA O USUÁRIO LOGADO NAS TELAS DE COMPRA

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarUsuarioLogado();
        configurarBotaoCarrinho();
        configurarIconeCarrinho();
        atualizarContadorCarrinho();

    }
);


// ATUALIZAÇÃO 03/11 - EXIBE "BEM-VINDO" E O ÍCONE DO CARRINHO

function mostrarUsuarioLogado() {

    const areaUsuario =
        document.getElementById("areaUsuario");

    if (!areaUsuario) return;

    const usuario =
        JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario) {

        areaUsuario.style.display = "none";
        return;
    }

    document
        .getElementById("nomeUsuarioLogado")
        .textContent =
        "Bem-vindo, " + usuario.nome;

    areaUsuario.style.display = "flex";
}


// ATUALIZAÇÃO 03/11 - CRIA UMA CHAVE DE CARRINHO PARA CADA USUÁRIO

function chaveCarrinhoUsuario(usuario) {

    return "carrinho_" + usuario.email;
}


// ATUALIZAÇÃO 03/11 - AO CLICAR EM ADICIONAR AO CARRINHO, EXIGE LOGIN

function configurarBotaoCarrinho() {

    const botao =
        document.querySelector(".botao-carrinho");

    if (!botao) return;

    botao.addEventListener(
        "click",
        function() {

            const usuario =
                JSON.parse(
                    localStorage.getItem("usuarioLogado")
                );

            if (!usuario) {

                localStorage.setItem(
                    "paginaRetornoLogin",
                    window.location.href
                );

                window.location.href =
                    "../Página de Login/login.html";

                return;
            }

            adicionarProdutoAoCarrinho(usuario);

        }
    );
}


// ATUALIZAÇÃO 03/11 - SALVA O PRODUTO ESCOLHIDO NO CARRINHO

function adicionarProdutoAoCarrinho(usuario) {

    const nome =
        document
            .getElementById("nomeProduto")
            ?.textContent
            .trim();

    const precoElemento =
        document.getElementById("precoPromocionalProduto") ||
        document.getElementById("precoProduto");

    const modelo =
        document
            .getElementById("nomeModelo")
            ?.textContent
            .trim() || "Padrão";

    const imagemElemento =
        document.getElementById("imagemPrincipal");

    const areaTamanhos =
        document.getElementById("areaTamanhos");

    const tamanhoSelecionado =
        document.querySelector(
            ".tamanhos button.selecionado"
        );

    if (
        areaTamanhos &&
        window.getComputedStyle(areaTamanhos).display !== "none" &&
        !tamanhoSelecionado
    ) {

        alert(
            "Escolha um tamanho antes de adicionar ao carrinho."
        );

        return;
    }

    if (!nome || !precoElemento) {

        alert(
            "Não foi possível identificar o produto."
        );

        return;
    }

    const preco =
        converterPrecoParaNumero(
            precoElemento.textContent
        );

    const imagem =
        imagemElemento
            ? imagemElemento.getAttribute("src")
            : "../Imagens/Produto teste.webp";

    const tamanho =
        tamanhoSelecionado
            ? tamanhoSelecionado.textContent.trim()
            : "";

    const chave =
        chaveCarrinhoUsuario(usuario);

    const carrinho =
        JSON.parse(
            localStorage.getItem(chave)
        ) || [];

    const itemExistente =
        carrinho.find(
            function(item) {

                return (
                    item.nome === nome &&
                    item.modelo === modelo &&
                    item.tamanho === tamanho &&
                    item.preco === preco
                );
            }
        );

    if (itemExistente) {

        itemExistente.quantidade += 1;

    } else {

        carrinho.push({
            nome: nome,
            preco: preco,
            modelo: modelo,
            tamanho: tamanho,
            imagem: imagem,
            quantidade: 1
        });
    }

    localStorage.setItem(
        chave,
        JSON.stringify(carrinho)
    );

    atualizarContadorCarrinho();

    alert(
        "Produto adicionado ao carrinho!"
    );
}


// ATUALIZAÇÃO 03/11 - TRANSFORMA "R$ 100,00" EM NÚMERO

function converterPrecoParaNumero(texto) {

    const valor =
        texto
            .replace(/[^0-9,]/g, "")
            .replace(",", ".");

    return Number(valor) || 0;
}


// ATUALIZAÇÃO 03/11 - ABRE A NOVA PÁGINA DO CARRINHO

function configurarIconeCarrinho() {

    const icone =
        document.querySelector(".icone-carrinho");

    if (!icone) return;

    icone.addEventListener(
        "click",
        function() {

            const usuario =
                JSON.parse(
                    localStorage.getItem("usuarioLogado")
                );

            if (!usuario) {

                window.location.href =
                    "../Página de Login/login.html";

                return;
            }

            window.location.href =
                "../Página de Carrinho/carrinho.html";
        }
    );
}


// ATUALIZAÇÃO 03/11 - MOSTRA A QUANTIDADE DE ITENS NO ÍCONE

function atualizarContadorCarrinho() {

    const icone =
        document.querySelector(".icone-carrinho");

    if (!icone) return;

    const usuario =
        JSON.parse(
            localStorage.getItem("usuarioLogado")
        );

    if (!usuario) {

        icone.textContent = "🛒";
        return;
    }

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                chaveCarrinhoUsuario(usuario)
            )
        ) || [];

    const quantidade =
        carrinho.reduce(
            function(total, item) {

                return total + item.quantidade;
            },
            0
        );

    icone.textContent =
        quantidade > 0
            ? "🛒 " + quantidade
            : "🛒";
}


// ATUALIZAÇÃO 03/11 - PERMITE SAIR DA CONTA

function sairDaConta() {

    localStorage.removeItem("usuarioLogado");

    mostrarUsuarioLogado();
}
