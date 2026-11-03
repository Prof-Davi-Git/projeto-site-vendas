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


// ATUALIZAÇÃO 03/11 - MOSTRA O FORMULÁRIO DE CADASTRO

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


// ATUALIZAÇÃO 03/11 - CADASTRO REALIZADO NO NAVEGADOR ATUAL

function fazerCadastro(event) {

    event.preventDefault();

    const nome =
        document.getElementById("nomeCadastro").value.trim();

    const email =
        document.getElementById("emailCadastro").value.trim();

    const senha =
        document.getElementById("senhaCadastro").value;

    let usuariosTemporarios =
        JSON.parse(
            localStorage.getItem("usuariosTemporarios")
        ) || [];

    const emailJaExisteNoCodigo =
        usuariosCadastrados.some(function(usuario) {

            return usuario.email === email;

        });

    const emailJaExisteNoNavegador =
        usuariosTemporarios.some(function(usuario) {

            return usuario.email === email;

        });

    if (
        emailJaExisteNoCodigo ||
        emailJaExisteNoNavegador
    ) {

        mostrarMensagem(
            "Este e-mail já está cadastrado. Faça o login."
        );

        return;
    }

    usuariosTemporarios.push({
        nome: nome,
        email: email,
        senha: senha
    });

    localStorage.setItem(
        "usuariosTemporarios",
        JSON.stringify(usuariosTemporarios)
    );

    document
        .getElementById("formCadastro")
        .reset();

    mostrarLogin();

    document
        .getElementById("emailLogin")
        .value = email;

    mostrarMensagem(
        "Cadastro realizado com sucesso! Agora digite sua senha e entre."
    );
}


// ATUALIZAÇÃO 03/11 - VERIFICA O LOGIN

function fazerLogin(event) {

    event.preventDefault();

    const email =
        document.getElementById("emailLogin").value.trim();

    const senha =
        document.getElementById("senhaLogin").value;

    // ATUALIZAÇÃO 03/11 - USUÁRIOS FIXOS QUE ACOMPANHAM O PROJETO
    const usuarioDoCodigo =
        usuariosCadastrados.find(function(usuario) {

            return (
                usuario.email === email &&
                usuario.senha === senha
            );

        });

    // ATUALIZAÇÃO 03/11 - USUÁRIOS CRIADOS NESTE NAVEGADOR
    const usuariosTemporarios =
        JSON.parse(
            localStorage.getItem("usuariosTemporarios")
        ) || [];

    const usuarioTemporario =
        usuariosTemporarios.find(function(usuario) {

            return (
                usuario.email === email &&
                usuario.senha === senha
            );

        });

    const usuarioEncontrado =
        usuarioDoCodigo || usuarioTemporario;

    if (!usuarioEncontrado) {

        mostrarMensagem(
            "E-mail ou senha não encontrados."
        );

        return;
    }

    // ATUALIZAÇÃO 03/11 - GUARDA QUEM ESTÁ LOGADO
    const usuarioLogado = {
        nome: usuarioEncontrado.nome,
        email: usuarioEncontrado.email
    };

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarioLogado)
    );

    // ATUALIZAÇÃO 03/11 - VOLTA PARA A PÁGINA ONDE O USUÁRIO ESTAVA
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
