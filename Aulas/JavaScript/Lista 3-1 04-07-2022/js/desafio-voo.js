/*
Busca por voo

Vamos construir um conjunto de funções que vai salvar os dados de entrada sobre voos que estão para acontecer e depois podemos buscar algumas informações sobre os dados armazenados.

Deve ser criada uma função que quando chamada seja passado os seguintes valores do voo como parâmetro: código, horário de partida, quantidade de passageiros, valor da passagem, origem e destino. Lembrete: qual a melhor estrutura para representar esses dados? Deve ser possível armazenar mais de um objeto. Sempre que a função for chamada, deve ser adicionado um item ao final,  com valores corretos.

Exemplo:
    Entrada:
        cadastrarVoo(1, "10:32", 120, 1220, "SP", "RE")

        Deve ser criada uma função que quando chamada deve retornar todos os voos disponíveis para a origem informada.
    Exemplo:
        Entrada: buscarVooOrigem("SP")

        Deve ser criada uma função que quando chamada deve retornar todos os voos disponíveis para o destino informado.
    Exemplo:
        Entrada: buscarVooDestino("SP")
*/

let voos = [];

let cadastrarVoo = (codigo, partida, passageiros, valor, origem, destino) => {
    voos.push({
        codigo: codigo, partida: partida, passageiros: passageiros,
        valor: valor, origem: origem, destino: destino
    });
}

let buscaVooOrigem = (origem) => voos.filter((voo) => voo.origem === origem);

let buscaVooDestino = (destino) => voos.filter((voo) => voo.destino === destino);

let buscaVooOrigemDestino = (origem, destino) => voos.filter((voo) => (voo.origem === origem && voo.destino === destino));

cadastrarVoo(1, '10:32', 120, 1220, 'SP', 'RJ');
cadastrarVoo(2, '07:41', 80, 990, 'SP', 'CE');
cadastrarVoo(3, '04:25', 120, 820, 'SP', 'MT');
cadastrarVoo(4, '03:36', 110, 700, 'RJ', 'SP');
cadastrarVoo(5, '17:07', 60, 1800, 'BA', 'RJ');
cadastrarVoo(6, '18:45', 85, 1150, 'SC', 'RJ');
cadastrarVoo(7, '22:18', 105, 1400, 'SC', 'SP');
cadastrarVoo(8, '00:14', 70, 1300, 'AC', 'RJ');
cadastrarVoo(9, '03:14', 40, 300, 'SP', 'SC');

console.log(buscaVooOrigem('RJ'));
console.log(buscaVooDestino('SP'));
console.log(buscaVooOrigemDestino('SP', 'SC'));


let arr = [1, 2, 3, 4]

console.log(arr.filter((x) => x === 1));

console.log(arr.filter((x) => {
    if (x === 1) return true
    // return x === 1
}));