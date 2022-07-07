let voos = [];

let cadastrarVoo = (codigo, partida, passageiros, valor, origem, destino) => {
    voos.push({
        codigo: codigo, partida: partida, passageiros: passageiros,
        valor: valor, origem: origem, destino: destino
    });
}

let buscaVooOrigem = (origem) => voos.reduce((resultado, voo) => {
    if (voo.origem === origem) resultado.push(voo)
    return resultado
}, []);

let buscaVooDestino = (destino) => voos.reduce((resultado, voo) => {
    if (voo.destino === destino) resultado.push(voo)
    return resultado
}, []);

cadastrarVoo(1, '10:32', 120, 1220, 'SP', 'RJ');
cadastrarVoo(2, '07:41', 80, 990, 'SP', 'CE');
cadastrarVoo(3, '04:25', 120, 820, 'SP', 'MT');
cadastrarVoo(4, '03:36', 110, 700, 'RJ', 'SP');
cadastrarVoo(5, '17:07', 60, 1800, 'BA', 'RJ');
cadastrarVoo(6, '18:45', 85, 1150, 'SC', 'RJ');
cadastrarVoo(7, '22:18', 105, 1400, 'SC', 'SP');
cadastrarVoo(8, '24:14', 70, 1300, 'AC', 'RJ');

buscaVooOrigem('RJ');
buscaVooDestino('SP');