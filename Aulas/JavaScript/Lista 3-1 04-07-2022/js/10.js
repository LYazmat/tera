/*
10 - Faça uma função que retorne o dobre dos números do array abaixo.
[ 0, 2, 98, 75, 23, 18, 31, 7, 1 ]
*/

let dobro = (arr) => {
    return arr.map((x) => x * 2);
}

let numeros = [0, 2, 98, 75, 23, 18, 31, 7, 1]

console.log(dobro(numeros));