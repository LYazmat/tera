![codesize](https://img.shields.io/github/languages/code-size/badges/shields.svg)
![languages](https://img.shields.io/github/languages/count/badges/shields.svg)
![toplanguage](https://img.shields.io/github/languages/top/badges/shields.svg)

[![linkedin](https://img.shields.io/badge/Linkedin-FFFFFF?style=flat&logo=linkedin&logoColor=blue)](https://www.linkedin.com/in/marcus-vinicius-de-miranda)
[![linkedin](https://img.shields.io/badge/Instagram-FFFFFF?style=flat&logo=instagram&logoColor=orange)](https://www.instagram.com/marcusmiran/)

> ### 1 - Resolva os exercícios abaixo utilizando arrays e objetos:

<p align="center">
  <img src='img/safra.jpg' style='width: 30%'>
</p>

```javascript
let safra = {
    mes: 'Fevereiro',
    frutas: ['abacate', 'ameixa', 'carambola', 'goiaba', 'jaca', 'limão', 'maça', 'mamão', 'manga', 'melancia', 'pera', 'uva'],
    legumes: ['abóbora', 'abobrinha', 'beringela', 'beterrada', 'milho verde', 'quiabo', 'tomate'],
    verduras: ['acelga', 'alface', 'chicória', 'escarola', 'espinafre', 'salsa']
}
```
<br>

<p align="center">
  <img src='img/voo.jpg' style='width: 100%'>
</p>

```javascript
let voo = {
    partida: '20:30',
    chegada: '21:35',
    origem: 'Rio de Janeiro (SDU)',
    destino: 'São Paulo (GRU)',
    empresa: 'GOL Linhas Aereas S.A.',
    valor: 1255,
    tipo: 'ida e volta',
    escala: false
}
```
<br>

<p align="center">
  <img src='img/cesta.jpg' style='width: 60%'>
</p>

```javascript
let cesta = [
    {
        codigo: 1,
        descricao: 'BABY FLYER',
        produto: '117.099000-000091',
        cor: 'CAFE',
        quantidade: 24,
        valor: 56.29
    },
    {
        codigo: 2,
        descricao: 'BABY FLYER',
        produto: '117.100000-000002',
        cor: 'PRETO',
        quantidade: 12,
        valor: 48.40
    },
    {
        codigo: 3,
        descricao: 'BABY FLYER',
        produto: '117.100000-007703',
        cor: 'MOSTARDA/PRETO',
        quantidade: 24,
        valor: 48.40
    }
]
```
<br>

<p align="center">
  <img src='img/livro.jpg' style='width: 60%'>
</p>

```javascript
let livro = {
    titulo: 'Para Educar Crianças Feministas',
    autor: 'Chimamanda Ngozi Adichie',
    imagem: 'https://images-na.ssl-images-amazon.com/images/I/51HNpcIQoTL._SX342_BO1,204,203,200_.jpg',
    tipo: 'seminovo/usado',
    editora: 'Companhia das Letras',
    ano: 2019,
    estante: 'Sociologia',
    peso: 93,
    isbn: 9788535928518,
    idioma: 'Português',
    cadastrado: '05/16/2022',
    descricao: 'SKU 26742287. Acabamento: Brochura. Dimensão: 14 x 21 cm. Livro em bom estado de conservação. Possui vários grifos a lápis. Páginas: 96.'
}
```
<br>

> ### 2 - Faça um código em JS que realize a operação desejada entre os números 33 e 5, conforme um operador informado.
```
Ex: 
    O operador informado é "-" (símbolo de subtração)
    Mensagem no console: O resultado da operação de 33 - 5 é 28.

    O operador informado é o "*" ( símbolo de multiplicação)
    Mensagem no console: O resultado da operação de 33 * 5 é 165.

    Operadores possíveis: +, -, /, *, %
    Mensagens possíveis:

Deve ser informada apenas a mensagem referente ao valor do operador desejado.
```

```javascript
function operacao(operador) {
    let resultado=0;
    switch (operador) {
        case '+':
            resultado = 33 + 5
            break;
        case '-':
            resultado = 33 - 5
            break;
        case '/':
            resultado = 33 / 5
            break;
        case '*':
            resultado = 33 * 5
            break;
        case '%':
            resultado = 33 % 5
            break;
        default:
            resultado = null;
    }
    if (resultado === null) console.log('Operador não encontrado.');
    else console.log(`O resultado da operação 33 ${operador} 5 é ${resultado}.`);
}

operacao('+');
```