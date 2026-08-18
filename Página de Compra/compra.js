function trocarModelo(imagem) {


    let imagemPrincipal =
        document.getElementById("imagemPrincipal");


    let nomeModelo =
        document.getElementById("nomeModelo");


    let especificacaoModelo =
        document.getElementById("especificacaoModelo");



    imagemPrincipal.src =
        imagem.src;


    nomeModelo.textContent =
        imagem.dataset.nome;


    especificacaoModelo.textContent =
        imagem.dataset.especificacao;


}

function selecionarTamanho(botao) {


    let botoes =
        document.querySelectorAll(".tamanhos button");


    botoes.forEach(function(item) {

        item.classList.remove("selecionado");

    });


    botao.classList.add("selecionado");


}