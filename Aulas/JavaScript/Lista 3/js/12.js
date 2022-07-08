/*
12 - Faça uma função que retorne a primeira fruta que tenha a letra "o"
[ "Abacaxi", "Uva", "Maçã", "Goiaba", "Abacate", "Acerola"]
*/

let primeiraO = (frutas) => {
    return frutas.find((fruta) => fruta.toLowerCase().indexOf('o') > -1);
}

let frutas = ['Abacaxi', 'Uva', 'Maçã', 'Goiaba', 'Abacate', 'Acerola']

console.log(primeiraO(frutas));
