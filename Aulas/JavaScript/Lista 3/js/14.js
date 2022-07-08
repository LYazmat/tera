/*
14 - Faça uma função que retorne apenas as idades das pessoas, dado o objeto abaixo:
    [
        { name: 'Camila', age: 17 },
        { name: 'Jorge', age: 13 },
        { name: 'Marcia', age: 56 },
        { name: 'Barbara', age: 24 },
        { name: 'Natan', age: 67 },
        { name: 'Pablo', age: 65 }
    ];
*/

let idades = (arr) => {
    return arr.map((pessoa) => pessoa.age);
}

let arr = [
    { name: 'Camila', age: 17 },
    { name: 'Jorge', age: 13 },
    { name: 'Marcia', age: 56 },
    { name: 'Barbara', age: 24 },
    { name: 'Natan', age: 67 },
    { name: 'Pablo', age: 65 }
]

console.log(idades(arr));