const elementoParaInserirNaTela = document.getElementById('livros');

function exibirLivrosNaTela(listaDeLivros){
    elementoParaInserirNaTela.innerHTML = ''
    listaDeLivros.forEach(livros => {
        const disponibilidade = livros.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
        elementoParaInserirNaTela.innerHTML += `<div class="livro">
      <img class="${disponibilidade}" src="${livros.imagem}" alt="${livros.alt}" />
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