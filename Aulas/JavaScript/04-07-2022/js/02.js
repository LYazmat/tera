let par_impar = (numero) => {
    return numero % 2 === 0 ? 'par' : 'impar';
}

let numero = 10;
console.log(`O número ${numero} é`, par_impar(numero));