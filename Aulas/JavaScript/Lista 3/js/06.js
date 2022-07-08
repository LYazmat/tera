/*
6 - Complemente o exercício anterior com outra função que quando chamada irá adicionar o ingrediente informado como parâmetro ao array de ingredientes e escreve uma nova mensagem de saída:
Exemplo 1:
    Entrada: 
        array: ["Pão", "Carne", "ovo", "bacon", "Mussarela", "Presunto", "Alface", "Tomate", "Batata Palha"]
        adicionarIngrediente("Milho")
    Saída:
        Pão, Carne, ovo, bacon, Mussarela, Presunto, Alface, Tomate, Batata Palha e Milho
*/

let mostraIngredientes = (ingredientes) => {
    let resultado = ingredientes.reduce((resultado, ingrediente, index, arr) => {
        if (index != arr.length - 1) return resultado + ', ' + ingrediente;
        else return resultado + ' e ' + ingrediente;
    });
    console.log(resultado);
}

let ingredientes = ['Pão', 'Carne', 'Ovo', 'Bacon', 'Mussarela', 'Presunto', 'Alface', 'Tomate', 'Batata Palha'];

let adicionarIngrediente = (ingrediente) => {
    ingredientes.push('Milho');
    mostraIngredientes(ingredientes);
}

adicionarIngrediente('Milho');