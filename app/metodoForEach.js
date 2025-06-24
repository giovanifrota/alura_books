const elementoParaInserirNaTela = document.getElementById('livros');

function exibirLivrosNaTela(listaDeLivros){
    elementoParaInserirNaTela.innerHTML = ''
    listaDeLivros.forEach(livros => {
        elementoParaInserirNaTela.innerHTML += `<div class="livro">
      <img class="livro__imagens" src="${livros.imagem}" alt="${livros.alt}" />
      <h2 class="livro__titulo">
        ${livros.titulo}
      </h2>
      <p class="livro__descricao">${livros.autor}</p>
      <p class="livro__preco" id="preco">R$${livros.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livros.categoria}</span>
        <span class="tag">${livros.categoria}</span>
      </div>
    </div>`
    })
}