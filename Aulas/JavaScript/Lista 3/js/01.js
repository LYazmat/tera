/*
    1 - Crie uma função que escreva uma mensagem informando se um número é par ou ímpar.
        Exemplo 1:
            Entrada:
                2
            Saída:
                O número 2 é par
        Exemplo 2:
            Entrada: 
                77
            Saída:
                O número 77 é ímpar
*/

let parImpar = (numero) => {
    console.log(`O número ${numero} é`, numero % 2 === 0 ? 'par' : 'impar');
}

parImpar(2);
parImpar(77);