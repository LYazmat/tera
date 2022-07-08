/*
7 - Crie uma função que receba os dados: Nome, idade e endereço e retorne um objeto com essas propriedades.
Exemplo 1:
    Entrada: 
        preencherNome("Camila", 23, "Rua dos Andradas, 21")
    Saída:
        {
            nome: "Camila",
            idade: 23,
            endereco: "Rua dos Andradas, 21"
        }
*/

let preencherNome = (nome, idade, endereco) => {
    return { nome: nome, idade: idade, endereco: endereco }
};

console.log(preencherNome('Camila', 23, 'Rua dos andradas, 21'));