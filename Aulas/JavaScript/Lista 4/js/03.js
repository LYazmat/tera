class Item {
    constructor(codigo, nome, quantidade, valor) {
        this.codigo = codigo;
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    aumentarQuantidade() {
        this.quantidade++;
    }

    diminuirQuantidade() {
        this.quantidade--;
    }
}

class Pedido {
    constructor(codigo, itens) {
        this.codigo = codigo;
        this.itens = itens;
        this.desconto = 0;
    }

    aplicarDesconto(desconto) {
        // Em percentual %
        this.desconto = desconto;
    }

    calcularTotal() {
        return this.itens.reduce((total, i) => total + i.quantidade * i.valor, 0, 0) * (1 - this.desconto / 100);
    }

    aumentarQuantidade(item) {
        item.aumentarQuantidade();
    }

    diminuirQuantidade(item) {
        item.diminuirQuantidade();
    }

    adicionarItem(novoItem) {
        this.itens.push(novoItem);
    }

    descricaoItens() {
        // Método para retornar a descricao dos itens, quantidade, valor e valor total de todos os itens em uma string
        return this.itens.map((i) => `${i.nome} - ${i.quantidade} x ${i.valor} = ${i.quantidade * i.valor}`).join('\n');
    }

}

let item0 = new Item(1, 'Camisa', 3, 30.00);
let item1 = new Item(2, 'Calça', 2, 120.00);
let pedido = new Pedido(1, [item0, item1]);

console.log('Pedido:');
console.log(pedido.descricaoItens());
console.log('Desconto:', pedido.desconto + '%');
console.log('Total', pedido.calcularTotal());

// Fazendo alterações no Pedido

// Diminuindo a quantidade do item1
pedido.diminuirQuantidade(item1);

// Adicionando novo item
let item2 = new Item(3, 'Sapato', 1, 290.00);
pedido.adicionarItem(item2);

// Aplicar desconto de 50%
pedido.aplicarDesconto(50);

console.log('Pedido Alterado:');
console.log(pedido.descricaoItens());
console.log('Desconto:', pedido.desconto + '%');
console.log('Total final:', pedido.calcularTotal());