## Resumo Lista 3 de Exercício Javascript - 04-07-2022

> ### 1 - Crie uma função que escreva uma mensagem informando se um número é par ou ímpar.
```
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
```

```
let parImpar = (numero) => {
    console.log(`O número ${numero} é`, numero % 2 === 0 ? 'par' : 'impar');
}

let numero = 10;
parImpar(numero);
```
> ### 2 - Crie uma nova função semelhante ao exercício anterior, porém agora ela deve retornar o texto que será usado por um console.log.
```
Exemplo 1:
    Entrada:
        2
    Saída:
        identificaParOuImpar(2) // retorna "par"
        O número 2 é par // retorno do console.log que chama a função
```

```
let identificaParOuImpar = (numero) => {
    return numero % 2 === 0 ? 'par' : 'impar';
}

let numero = 10;
console.log(`O número ${numero} é`, identificaParOuImpar(numero));
```

> ### 3 - Crie uma função que inverte a ordem dos itens de um array:
```
Exemplo 1:
    Entrada:
        ["Abacaxi", "Uva", "Banana", "Maçã", "Goiaba"]
    Saída:
        ["Goiaba", "Maçã", "Banana", "Uva", "Abacaxi"]

    Exemplo 2:
        Entrada:
            [10, 2, 45, 87, 99, 20, 1, 3]
        Saída:
            [3, 1, 20, 99, 87, 45, 2, 10]
```

```
let inverterArray = (arr) => {
    let arr2 = [];
    // A função shift adiciona o elemento no início do array, enquando a função push adiciona no final.
    for (let i in arr) arr2.unshift(arr[i])
    return arr2;
}

let arr = ['Abacaxi', 'Uva', 'Banana', 'Maçã', 'Goiaba'];
console.log(arr, '=>', inverterArray(arr));
```

> ### 4 - Crie uma função que retorne a soma entre dois números.
```
Exemplo 1:
    Entrada:
        soma(3, 4)
    Saída:
        3 + 4 = 7
```

```
let soma = (a, b) => {
    return a + b;
}

let a = 3, b = 4;
console.log(`${a} + ${b} = ${soma(a, b)}`);
```

> ### 5 - Faça uma função que irá receber um array de ingredientes e retornar um log com a mensagem de saída:
```
Exemplo 1:
    Entrada:
        ["Pão", "Carne", "ovo", "bacon", "Mussarela", "Presunto", "Alface", "Tomate", "Batata Palha"]
    Saída:
        Pão, Carne, ovo, bacon, Mussarela, Presunto, Alface, Tomate e Batata Palha
```

```
let mostraIngredientes = (ingredientes) => {
    let resultado = ingredientes.reduce((resultado, ingrediente, index, arr) => {
        // Perceba que o último item não é separado por vírgula, mas sim pela letra "e"
        if (index != arr.length - 1) return resultado + ', ' + ingrediente;
        else return resultado + ' e ' + ingrediente;
    });
    console.log(resultado);
}

let ingredientes = ['Pão', 'Carne', 'Ovo', 'Bacon', 'Mussarela', 'Presunto', 'Alface', 'Tomate', 'Batata Palha'];

mostraIngredientes(ingredientes);
```

> ### 6 - Complemente o exercício anterior com outra função que quando chamada irá adicionar o ingrediente informado como parâmetro ao array de ingredientes e escreve uma nova mensagem de saída:
```
Exemplo 1:
    Entrada: 
        array: ["Pão", "Carne", "ovo", "bacon", "Mussarela", "Presunto", "Alface", "Tomate", "Batata Palha"]
        adicionarIngrediente("Milho")
    Saída:
        Pão, Carne, ovo, bacon, Mussarela, Presunto, Alface, Tomate, Batata Palha e Milho
```

```
let mostraIngredientes = (ingredientes) => {
    let resultado = ingredientes.reduce((resultado, ingrediente, index, arr) => {
        if (index != arr.length - 1) return resultado + ', ' + ingrediente;
        else return resultado + ' e ' + ingrediente;
    });
    console.log(resultado);
}

let ingredientes = ['Pão', 'Carne', 'Ovo', 'Bacon', 'Mussarela', 'Presunto', 'Alface', 'Tomate', 'Batata Palha'];

let adicionarIngrediente = (ingrediente) => {
    ingredientes.push('Milho');
    mostraIngredientes(ingredientes);
}

adicionarIngrediente('Milho');



```

> ### 7 - Crie uma função que receba os dados: Nome, idade e endereço e retorne um objeto com essas propriedades.
```
Exemplo 1:
    Entrada: 
        preencherNome("Camila", 23, "Rua dos Andradas, 21")
    Saída:
        {
            nome: "Camila",
            idade: 23,
            endereco: "Rua dos Andradas, 21"
        }
```

```
let preencherNome = (nome, idade, endereco) => {
    return { nome: nome, idade: idade, endereco: endereco }
};

preencherNome('Camila', 23, 'Rua dos andradas, 21');
```














