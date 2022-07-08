/*
13 - Faça o somatório de todos os valores do array abaixo, utilizando reduce
[1, 2, 3, 4, 5, 6]
*/

let soma = (numeros) => {
    return numeros.reduce((total, x) => total + x, 0);
}

let numeros = [1, 2, 3, 4, 5, 6];
console.log(soma(numeros));