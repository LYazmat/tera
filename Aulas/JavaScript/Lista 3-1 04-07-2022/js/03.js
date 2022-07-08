/*
3 - Crie uma função que inverte a ordem dos itens de um array:
    Exemplo 1:
        Entrada:
            ["Abacaxi", "Uva", "Banana", "Maçã", "Goiaba"]
        Saída:
            ["Goiaba", "Maçã", "Banana", "Uva", "Abacaxi"]

        Exemplo 2:
            Entrada:
                [10, 2, 45, 87, 99, 20, 1, 3]
            Saída:
                [3, 1, 20, 99, 87, 45, 2, 10]
*/

let inverterArray = (arr) => {
    let arr2 = [];
    // A função unshift adiciona o elemento no início do array, enquando a função push adiciona no final.
    for (let i in arr) arr2.unshift(arr[i])
    return arr2;
}

let arr = ['Abacaxi', 'Uva', 'Banana', 'Maçã', 'Goiaba'];
console.log(arr, '=>', inverterArray(arr));
