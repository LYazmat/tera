/*
2 - Crie uma nova função semelhante ao exercício anterior, porém agora ela deve retornar o texto que será usado por um console.log.
    Exemplo 1:
        Entrada:
            2
        Saída:
            identificaParOuImpar(2) // retorna "par"
            O número 2 é par // retorno do console.log que chama a função
*/

let identificaParOuImpar = (numero) => {
    return `O número ${numero} é ${numero % 2 === 0 ? 'par' : 'impar'}`;
}

console.log(identificaParOuImpar(2));