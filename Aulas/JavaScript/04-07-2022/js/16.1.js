
let unir_nome = (nome, sobrenome) => Object.assign({}, primeiroNome, sobrenome);

let primeiroNome = { nome: 'João' }, sobrenome = { sobrenome: 'da Silva' };

let pessoa = unir_nome(primeiroNome, sobrenome);