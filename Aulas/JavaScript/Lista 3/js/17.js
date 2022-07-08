/*
17 - Faça uma função que retorne o primeiro produto com valor entre 50 e 60 reais.
*/

let filtroPreco = (cesta) => cesta.find((produto) => produto.preco >= 50 && produto.preco <= 60)

let cesta = [
    { quantidade: 1, descricao: 'Desafios e Enigmas ...', vendido: 'Amazon', preco: 47.20 },
    { quantidade: 1, descricao: 'Mulheres que correm ...', vendido: 'Amazon', preco: 37.90 },
    { quantidade: 1, descricao: 'O oráculo da noite ...', vendido: 'Amazon', preco: 66.31 },
    { quantidade: 1, descricao: 'Seja homem: ...', vendido: 'Amazon', preco: 53.71 },
    { quantidade: 1, descricao: 'Mulheres incríveis ...', vendido: 'Amazon', preco: 14.37 },
    { quantidade: 1, descricao: 'A ciranda das mulheres ...', vendido: 'Amazon', preco: 13.90 },
    { quantidade: 1, descricao: 'Sociedade do cansaço', vendido: 'Amazon', preco: 23.20 },
    { quantidade: 1, descricao: 'Como o racismo ...', vendido: 'Amazon', preco: 24.99 }
]

console.log(filtroPreco(cesta));