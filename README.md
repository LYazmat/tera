Resumo Lista 3 de Exercício Javascript - 04-07-2022

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

let par_impar = (numero) => {
    console.log(`O número ${numero} é`, numero % 2 === 0 ? 'par' : 'impar');
}

let numero = 10;
par_impar(numero);