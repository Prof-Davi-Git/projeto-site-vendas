function abrirProduto(id) {

    window.location.href =
        "../Página de Compra/compra.html?id=" + id;

}



function abrirCategorias() {

    let menu =
        document.getElementById("menuCategorias");


    if (menu.style.display === "flex") {

        menu.style.display =
            "none";

    } else {

        menu.style.display =
            "flex";

    }

}



function filtrarCategoria(categoria) {

    let produtos =
        document.querySelectorAll(".produto");


    produtos.forEach(function(produto) {

        if (
            categoria === "todos" ||
            produto.dataset.categoria === categoria
        ) {

            produto.style.display =
                "block";

        } else {

            produto.style.display =
                "none";

        }

    });

}



function filtrarProdutos() {

    let pesquisa =
        document
            .getElementById("pesquisa")
            .value
            .toLowerCase();


    let produtos =
        document.querySelectorAll(".produto");


    produtos.forEach(function(produto) {

        let texto =
            produto.innerText.toLowerCase();


        if (texto.includes(pesquisa)) {

            produto.style.display =
                "block";

        } else {

            produto.style.display =
                "none";

        }

    });

}