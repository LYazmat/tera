/*
16.2 - Crie uma função que crie um novo objeto alterando apenas as propriedades abaixo:
produto: {
    nome: "X-Tudo",
    ingredientes: ["Pão", "Carne", "ovo", "bacon", "Mussarela", "Presunto", "Alface", "Tomate", "Batata Palha"],
    servePessoas: 1,
    valor: 24.98,
    valorPromocional: 16.98,
    maisVendido: true
}
Alterar o valor do produto para 35.00 e o valor promocional deve ser o valor do produto com 10% de desconto.
*/

let mudarValor = (produto, valor, desconto) => {
    return Object.assign({}, produto, {
        valor: valor,
        valorPromocional: valor * (1 - desconto / 100)
    });
}

let produto = {
    nome: 'X-tudo',
    ingredientes: ['Pão', 'Carne', 'ovo', 'bacon', 'Mussarela', 'Presunto', 'Alface', 'Tomate', 'Batata Palha'],
    servePessoas: 1,
    valor: 24.98,
    valorPromocional: 16.98,
    maisVendido: true
}

produto = mudarValor(produto, 35.00, 10);

console.log(produto);