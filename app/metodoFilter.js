const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', livrosFiltrados));

function livrosFiltrados(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltados = livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltados)
}