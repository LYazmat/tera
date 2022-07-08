/*
16 - Crie uma função que una os objetos abaixo em um outro objeto chamado pessoa
    primeiroNome: { nome: 'João' }
    sobrenome: { sobrenome: 'da Silva' }
*/


let unirNome = (nome, sobrenome) => Object.assign({}, primeiroNome, sobrenome);

let primeiroNome = { nome: 'João' }, sobrenome = { sobrenome: 'da Silva' };

let pessoa = unirNome(primeiroNome, sobrenome);

console.log(pessoa);