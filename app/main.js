let livros = [];

const endoPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const resposta = await fetch(endoPointDaAPI);
    livros = await resposta.json();
    console.table(livros);
    const livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}
