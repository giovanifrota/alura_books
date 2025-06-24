const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', ordenarLivros);

function ordenarLivros(){
    const livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados);
}