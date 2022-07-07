let mudar_valor = (produto, valor, desconto) => {
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

produto = mudar_valor(produto, 35.00, 10)