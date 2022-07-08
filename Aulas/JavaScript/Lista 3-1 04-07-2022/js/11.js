/*
11 - Faça uma função que retorne todas as frutas que tenham a letra "o"
[ "Abacaxi", "Uva", "Maçã", "Goiaba", "Abacate", "Acerola"]
*/

let temO = (frutas) => {
    return frutas.filter((fruta) => fruta.toLowerCase().indexOf('o') > -1);
}

let frutas = ['Abacaxi', 'Uva', 'Maçã', 'Goiaba', 'Abacate', 'Acerola']

console.log(temO(frutas));