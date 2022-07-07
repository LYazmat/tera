let idades = (arr) => {
    return arr.map((pessoa) => pessoa.age);
}

let arr = [
    { name: 'Camila', age: 17 },
    { name: 'Jorge', age: 13 },
    { name: 'Barbara', age: 24 },
    { name: 'Natan', age: 67 },
    { name: 'Pablo', age: 65 }
]

idades(arr);