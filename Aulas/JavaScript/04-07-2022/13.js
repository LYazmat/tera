let soma = (numeros) => {
    return numeros.reduce((total, x) => total + x, 0);
}

let numeros = [1, 2, 3, 4, 5, 6];
soma(numeros);