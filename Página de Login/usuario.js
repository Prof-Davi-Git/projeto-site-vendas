// ATUALIZAÇÃO 03/11 - CONTROLA O USUÁRIO LOGADO NAS TELAS DE COMPRA

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarUsuarioLogado();
        configurarBotaoCarrinho();

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

            // ATUALIZAÇÃO 03/11 - O CARRINHO SERÁ IMPLEMENTADO NA PRÓXIMA ETAPA
            alert(
                "Usuário identificado! O carrinho será implementado na próxima etapa."
            );

        }
    );
}


// ATUALIZAÇÃO 03/11 - PERMITE SAIR DA CONTA

function sairDaConta() {

    localStorage.removeItem("usuarioLogado");

    mostrarUsuarioLogado();
}