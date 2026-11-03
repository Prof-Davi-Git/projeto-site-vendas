// ATUALIZAÇÃO 03/11 - CONTROLA A TELA DE LOGIN E CADASTRO

function mostrarLogin() {

    document
        .getElementById("formLogin")
        .classList.remove("escondido");

    document
        .getElementById("formCadastro")
        .classList.add("escondido");

    document
        .getElementById("abaLogin")
        .classList.add("ativa");

    document
        .getElementById("abaCadastro")
        .classList.remove("ativa");

    limparMensagem();
}


// ATUALIZAÇÃO 03/11 - MOSTRA A ORIENTAÇÃO DE CADASTRO

function mostrarCadastro() {

    document
        .getElementById("formCadastro")
        .classList.remove("escondido");

    document
        .getElementById("formLogin")
        .classList.add("escondido");

    document
        .getElementById("abaCadastro")
        .classList.add("ativa");

    document
        .getElementById("abaLogin")
        .classList.remove("ativa");

    limparMensagem();
}


// ATUALIZAÇÃO 03/11 - VERIFICA O LOGIN USANDO O ARQUIVO usuarios.js

function fazerLogin(event) {

    event.preventDefault();

    const email =
        document.getElementById("emailLogin").value.trim();

    const senha =
        document.getElementById("senhaLogin").value;

    // ATUALIZAÇÃO 03/11 - PROCURA O USUÁRIO NA LISTA FIXA DO PROJETO
    const usuarioEncontrado =
        usuariosCadastrados.find(function(usuario) {

            return (
                usuario.email === email &&
                usuario.senha === senha
            );

        });

    if (!usuarioEncontrado) {

        mostrarMensagem(
            "E-mail ou senha não encontrados no cadastro do projeto."
        );

        return;
    }

    // ATUALIZAÇÃO 03/11 - GUARDA QUEM ESTÁ LOGADO NESTE NAVEGADOR
    const usuarioLogado = {
        nome: usuarioEncontrado.nome,
        email: usuarioEncontrado.email
    };

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarioLogado)
    );

    // ATUALIZAÇÃO 03/11 - VOLTA PARA A PÁGINA ONDE O USUÁRIO CLICOU EM ADICIONAR AO CARRINHO
    const paginaRetorno =
        localStorage.getItem("paginaRetornoLogin") ||
        "../Página de Início/inicio.html";

    localStorage.removeItem("paginaRetornoLogin");

    window.location.href = paginaRetorno;
}


// ATUALIZAÇÃO 03/11 - MOSTRA MENSAGENS NA TELA

function mostrarMensagem(texto) {

    document
        .getElementById("mensagemAcesso")
        .textContent = texto;
}


// ATUALIZAÇÃO 03/11 - LIMPA A MENSAGEM DA TELA

function limparMensagem() {

    document
        .getElementById("mensagemAcesso")
        .textContent = "";
}
