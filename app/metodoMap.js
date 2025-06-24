function aplicarDesconto(livro){
    const desconto = 0.3;
    const livrosComDesconto = livro.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}