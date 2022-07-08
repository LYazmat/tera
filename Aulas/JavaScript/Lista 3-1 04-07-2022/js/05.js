/*
5 - Faça uma função que irá receber um array de ingredientes e retornar um log com a mensagem de saída:
    Exemplo 1:
        Entrada:
            ["Pão", "Carne", "ovo", "bacon", "Mussarela", "Presunto", "Alface", "Tomate", "Batata Palha"]
        Saída:
            Pão, Carne, ovo, bacon, Mussarela, Presunto, Alface, Tomate e Batata Palha
*/

let mostraIngredientes = (ingredientes) => {
    let resultado = ingredientes.reduce((resultado, ingrediente, index, arr) => {
        // Perceba que o último item não é separado por vírgula, mas sim pela letra "e"
        if (index != arr.length - 1) return resultado + ', ' + ingrediente;
        else return resultado + ' e ' + ingrediente;
    });
    console.log(resultado);
}

let ingredientes = ['Pão', 'Carne', 'Ovo', 'Bacon', 'Mussarela', 'Presunto', 'Alface', 'Tomate', 'Batata Palha'];

mostraIngredientes(ingredientes);