const produtos = {


    /* PRODUTO 1 - ROUPA */

    1: {

        tipo: "roupa",

        categoria: "ROUPAS",

        nome: "Camiseta Oversized",

        preco: "R$ 99,90",

        descricao:
            "Camiseta oversized confortável e com estilo urbano.",

        tamanhos: ["P", "M", "G", "GG"],

        variacoes: [

            {
                nome: "Modelo Preto",

                especificacao:
                    "Cor preta • 100% algodão",

                imagem:
                    "/Imagens/camiseta-preta.webp"
            },

            {
                nome: "Modelo Branco",

                especificacao:
                    "Cor branca • 100% algodão",

                imagem:
                    "/Imagens/camiseta-branca.webp"
            }

        ]

    },



    /* PRODUTO 2 - ROUPA */

    2: {

        tipo: "roupa",

        categoria: "ROUPAS",

        nome: "Moletom Street",

        preco: "R$ 159,90",

        descricao:
            "Moletom confortável com estilo urbano.",

        tamanhos: ["P", "M", "G", "GG"],

        variacoes: [

            {
                nome: "Preto",

                especificacao:
                    "Moletom preto",

                imagem:
                    "/Imagens/moletom-preto.webp"
            },

            {
                nome: "Cinza",

                especificacao:
                    "Moletom cinza",

                imagem:
                    "/Imagens/moletom-cinza.webp"
            }

        ]

    },



    /* PRODUTO 3 - ROUPA */

    3: {

        tipo: "roupa",

        categoria: "ROUPAS",

        nome: "Calça Cargo",

        preco: "R$ 129,90",

        descricao:
            "Calça cargo com bolsos laterais.",

        tamanhos: ["P", "M", "G", "GG"],

        variacoes: [

            {
                nome: "Preta",

                especificacao:
                    "Cor preta",

                imagem:
                    "/Imagens/calca-preta.webp"
            },

            {
                nome: "Bege",

                especificacao:
                    "Cor bege",

                imagem:
                    "/Imagens/calca-bege.webp"
            }

        ]

    },



    /* PRODUTO 4 */

    4: {

        tipo: "geral",

        categoria: "INFORMÁTICA",

        nome: "Mouse Gamer",

        preco: "R$ 149,90",

        descricao:
            "Mouse gamer ergonômico com iluminação RGB.",

        variacoes: [

            {
                nome: "Modelo Basic",

                especificacao:
                    "7200 DPI • 6 botões • RGB",

                imagem:
                    "/Imagens/mouse-basic.webp"
            },

            {
                nome: "Modelo Pro",

                especificacao:
                    "12000 DPI • 8 botões • RGB",

                imagem:
                    "/Imagens/mouse-pro.webp"
            }

        ]

    },



    /* PRODUTO 5 */

    5: {

        tipo: "geral",

        categoria: "INFORMÁTICA",

        nome: "Teclado Mecânico",

        preco: "R$ 249,90",

        descricao:
            "Teclado mecânico para jogos e produtividade.",

        variacoes: [

            {
                nome: "Switch Azul",

                especificacao:
                    "Switch Blue • RGB",

                imagem:
                    "/Imagens/teclado-azul.webp"
            },

            {
                nome: "Switch Vermelho",

                especificacao:
                    "Switch Red • RGB",

                imagem:
                    "/Imagens/teclado-vermelho.webp"
            }

        ]

    },



    /* PRODUTO 6 */

    6: {

        tipo: "geral",

        categoria: "INFORMÁTICA",

        nome: "Headset Gamer",

        preco: "R$ 189,90",

        descricao:
            "Headset com microfone integrado.",

        variacoes: [

            {
                nome: "Preto",

                especificacao:
                    "USB • Microfone",

                imagem:
                    "/Imagens/headset-preto.webp"
            },

            {
                nome: "Branco",

                especificacao:
                    "USB • Microfone",

                imagem:
                    "/Imagens/headset-branco.webp"
            }

        ]

    },



    /* PRODUTO 7 */

    7: {

        tipo: "geral",

        categoria: "ELETRÔNICOS",

        nome: "Smartphone",

        preco: "R$ 1.499,90",

        descricao:
            "Smartphone moderno para uso diário.",

        variacoes: [

            {
                nome: "128 GB",

                especificacao:
                    "128 GB • 6 GB RAM",

                imagem:
                    "/Imagens/celular-128.webp"
            },

            {
                nome: "256 GB",

                especificacao:
                    "256 GB • 8 GB RAM",

                imagem:
                    "/Imagens/celular-256.webp"
            }

        ]

    },



    /* PRODUTO 8 */

    8: {

        tipo: "geral",

        categoria: "PERFUMES",

        nome: "Perfume",

        preco: "R$ 179,90",

        descricao:
            "Fragrância marcante para diferentes ocasiões.",

        variacoes: [

            {
                nome: "50 ml",

                especificacao:
                    "Frasco de 50 ml",

                imagem:
                    "/Imagens/perfume-50.webp"
            },

            {
                nome: "100 ml",

                especificacao:
                    "Frasco de 100 ml",

                imagem:
                    "/Imagens/perfume-100.webp"
            }

        ]

    },



    /* PRODUTO 9 */

    9: {

        tipo: "geral",

        categoria: "ACESSÓRIOS",

        nome: "Mochila",

        preco: "R$ 119,90",

        descricao:
            "Mochila para escola, trabalho ou viagens.",

        variacoes: [

            {
                nome: "Compacta",

                especificacao:
                    "20 litros",

                imagem:
                    "/Imagens/mochila-pequena.webp"
            },

            {
                nome: "Grande",

                especificacao:
                    "35 litros",

                imagem:
                    "/Imagens/mochila-grande.webp"
            }

        ]

    },



    /* PRODUTO 10 */

    10: {

        tipo: "geral",

        categoria: "ACESSÓRIOS",

        nome: "Caneca Personalizada",

        preco: "R$ 39,90",

        descricao:
            "Caneca personalizada disponível em diferentes modelos.",

        variacoes: [

            {
                nome: "Preta",

                especificacao:
                    "350 ml • Cerâmica",

                imagem:
                    "/Imagens/caneca-preta.webp"
            },

            {
                nome: "Branca",

                especificacao:
                    "350 ml • Cerâmica",

                imagem:
                    "/Imagens/caneca-branca.webp"
            }

        ]

    }


};

const parametros =
    new URLSearchParams(window.location.search);


const id =
    parametros.get("id");


const produto =
    produtos[id];



if (produto) {


    document.getElementById("categoriaProduto").textContent =
        produto.categoria;


    document.getElementById("nomeProduto").textContent =
        produto.nome;


    document.getElementById("precoProduto").textContent =
        produto.preco;


    document.getElementById("descricaoProduto").textContent =
        produto.descricao;


    document.getElementById("descricaoCompleta").textContent =
        produto.descricao;


    criarMiniaturas();


    selecionarVariacao(0);


    verificarTamanhos();


}

function criarMiniaturas() {


    let area =
        document.getElementById("miniaturas");


    produto.variacoes.forEach(
        function(variacao, indice) {


            let imagem =
                document.createElement("img");


            imagem.src =
                variacao.imagem;


            imagem.onclick =
                function() {


                    selecionarVariacao(indice);


                };


            area.appendChild(imagem);


        }
    );


}

function selecionarVariacao(indice) {


    let variacao =
        produto.variacoes[indice];


    document.getElementById("imagemPrincipal").src =
        variacao.imagem;


    document.getElementById("nomeVariacao").textContent =
        variacao.nome;


    document.getElementById("especificacaoVariacao").textContent =
        variacao.especificacao;



    let imagens =
        document.querySelectorAll(".miniaturas img");


    imagens.forEach(
        function(imagem) {


            imagem.classList.remove("selecionada");


        }
    );


    imagens[indice].classList.add("selecionada");


}


function verificarTamanhos() {


    let area =
        document.getElementById("areaTamanhos");


    if (produto.tipo === "roupa") {


        area.style.display = "block";


        document.getElementById("tituloVariacao").textContent =
            "Escolha o modelo:";


        criarTamanhos();


    } else {


        area.style.display = "none";


        document.getElementById("tituloVariacao").textContent =
            "Escolha uma opção:";


    }


}

function criarTamanhos() {


    let area =
        document.getElementById("tamanhos");


    produto.tamanhos.forEach(
        function(tamanho) {


            let botao =
                document.createElement("button");


            botao.textContent =
                tamanho;


            botao.onclick =
                function() {


                    selecionarTamanho(botao);


                };


            area.appendChild(botao);


        }
    );


}

function selecionarTamanho(botao) {


    let botoes =
        document.querySelectorAll("#tamanhos button");


    botoes.forEach(
        function(item) {


            item.classList.remove("selecionado");


        }
    );


    botao.classList.add("selecionado");


}