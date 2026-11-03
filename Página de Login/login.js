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


// ATUALIZAÇÃO 03/11 - REALIZA UM CADASTRO SIMPLES NO NAVEGADOR

function fazerCadastro(event) {

    event.preventDefault();

    const nome =
        document.getElementById("nomeCadastro").value.trim();

    const email =
        document.getElementById("emailCadastro").value.trim();

    const senha =
        document.getElementById("senhaCadastro").value;

    let usuarios =
        JSON.parse(localStorage.getItem("usuariosLoja")) || [];

    const emailJaExiste =
        usuarios.some(function(usuario) {
            return usuario.email === email;
        });

    if (emailJaExiste) {

        mostrarMensagem(
            "Este e-mail já foi cadastrado. Faça o login."
        );

        return;
    }

    usuarios.push({
        nome: nome,
        email: email,
        senha: senha
    });

    localStorage.setItem(
        "usuariosLoja",
        JSON.stringify(usuarios)
    );

    document
        .getElementById("formCadastro")
        .reset();

    mostrarLogin();

    document
        .getElementById("emailLogin")
        .value = email;

    mostrarMensagem(
        "Cadastro realizado! Agora digite sua senha e entre."
    );
}


// ATUALIZAÇÃO 03/11 - VERIFICA OS DADOS INFORMADOS NO LOGIN

function fazerLogin(event) {

    event.preventDefault();

    const email =
        document.getElementById("emailLogin").value.trim();

    const senha =
        document.getElementById("senhaLogin").value;

    const usuarios =
        JSON.parse(localStorage.getItem("usuariosLoja")) || [];

    const usuarioEncontrado =
        usuarios.find(function(usuario) {

            return (
                usuario.email === email &&
                usuario.senha === senha
            );

        });

    if (!usuarioEncontrado) {

        mostrarMensagem(
            "E-mail ou senha não encontrados."
        );

        return;
    }

    // ATUALIZAÇÃO 03/11 - GUARDA SOMENTE OS DADOS NECESSÁRIOS DO USUÁRIO LOGADO
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