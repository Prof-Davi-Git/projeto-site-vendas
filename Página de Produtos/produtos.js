
function comprar(produto) {
    alert("Você comprou: " + produto);
}

function abrirCategorias() {

    let menu = document.getElementById("menuCategorias");

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

    }

}

function filtrarCategoria(categoria) {

    let produtos = document.querySelectorAll(".produto");

    produtos.forEach(function(produto) {

        if (
            categoria === "todos" ||
            produto.dataset.categoria === categoria
        ) {

            produto.style.display = "block";

        } else {

            produto.style.display = "none";

        }

    });

}