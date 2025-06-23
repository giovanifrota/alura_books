const elementoParaInserirNaTela = document.getElementById('livros');


function exibirLivrosNaTela(listaDeLivros){
    elementoParaInserirNaTela.innerHTML = ''
    listaDeLivros.forEach(livro => {
        elementoParaInserirNaTela.innerHTML += ` <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    })
}