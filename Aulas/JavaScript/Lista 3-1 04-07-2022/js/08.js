/*
8 - Crie uma função que retorne a soma de todas as quantidades exibidas no carrinho abaixo:
*/

let quantidades = (cesta) => {
    return cesta.reduce((resultado, produto, index, arr) => resultado + produto.quantidade, 0)
}

let produto1 = {
    descricao: 'jaqueta trucker jeans manga longa com forro de pelo azul médio g',
    valor: 249.99, valor_original: 249.99, empresa: 'C&A', quantidade: 1, imagem: 'link para foto'
}

let produto2 = {
    descricao: 'mochila média ever after high 17z',
    valor: 62.90, valor_original: 399.99, empresa: 'Mundo Bag', quantidade: 1, imagem: 'link para foto'
}

let produto3 = {
    descricao: 'óculos de sol aviador ace dourado único',
    valor: 69.99, valor_original: 69.99, empresa: 'C&A', quantidade: 2, imagem: 'link para foto'
}

let produto4 = {
    descricao: 'suéter de pelúcia sharpe com zíper bege m',
    valor: 199.99, valor_original: 199.99, empresa: 'C&A', quantidade: 1, imagem: 'link para foto'
}

let cesta = [produto1, produto2, produto3, produto4]

console.log(quantidades(cesta));