[![linkedin](https://img.shields.io/badge/Linkedin-FFFFFF?style=flat&logo=linkedin&logoColor=blue)](https://www.linkedin.com/in/marcus-vinicius-de-miranda)
[![linkedin](https://img.shields.io/badge/Instagram-FFFFFF?style=flat&logo=instagram&logoColor=orange)](https://www.instagram.com/marcusmiran/)

## Lista 4 de Exercício Javascript

> ### 1 - Criar classes para as entidades abaixo:

<p align="center">
  <img src='img/pessoa.jpg' style='width: 60%'>
</p>

```javascript
class Pessoa {
    constructor(nome, endereco) {
        this.nomePessoa = nome;
        this.enderecoPessoa = endereco;
    }

    get nome() {
        return this.nomePessoa;
    }

    set nome(nome) {
        this.nomePessoa = nome;
    }

    get endereco() {
        return this.enderecoPessoa;
    }

    set endereco(endereco) {
        this.enderecoPessoa = endereco;
    }
}

class Tripulacao extends Pessoa {
    constructor(nome, endereco, id) {
        super(nome, endereco);
        this.id = id;
    }

    get idTripulacao() {
        return this.id;
    }

    set idTripulacao(id) {
        this.id = id;
    }
}


class Passageiro extends Pessoa {
    constructor(nome, endereco, smiles) {
        super(nome, endereco);
        this.smiles = smiles;
    }

    get numeroSmiles() {
        return this.smiles;
    }

    set numeroSmiles(smiles) {
        this.smiles = smiles;
    }
}

class Agente extends Pessoa {
    constructor(nome, endereco, id) {
        super(nome, endereco);
        this.id = id;
    }

    get idAgente() {
        return this.id;
    }

    set idAgente(id) {
        this.id = id;
    }
}

let tripulante = new Tripulacao("Marcus", "Rua X", 12);
console.log(tripulante);

let passageiro = new Passageiro("Ana", "Rua Z", 100);
console.log(passageiro);

let agente = new Agente("Ricardo", "Rua H", 7);
console.log(agente);
```
<br>

> ### 2 - Crie as classes que representam o diagrama abaixo:

```
Adicione atributos que façam sentido.
```

<p align="center">
  <img src='img/veiculo.jpg' style='width: 60%'>
</p>

```javascript
class Veiculo {
    constructor(cor, peso, descricao) {
        this.cor = cor;
        this.peso = peso;
        this.descricao = descricao;
    }
    calibrarPneus() {}
}

class Aviao extends Veiculo {
    constructor(cor, peso, descricao, quantidadePassageiros) {
        super(cor, peso, descricao);
        this.quantidadePassageiros = quantidadePassageiros;
    }
    aterrisar() {}
}

class Bicicleta extends Veiculo {
    constructor(cor, peso, descricao, tipo) {
        super(cor, peso, descricao);
        this.tipo = tipo;
    }
    pedalar() {}
}

class Carro extends Veiculo {
    constructor(cor, peso, descricao, placa) {
        super(cor, peso, descricao);
        this.placa = placa;
    }
    dirigir() {}
}

class Conversivel extends Carro {
    constructor(cor, peso, descricao, placa, quantidadeAssentos) {
        super(cor, peso, descricao, placa);
        this.quantidadeAssentos = quantidadeAssentos;
    }
    abrirCapota() {}
}

class Pickup extends Carro {
    constructor(cor, peso, descricao, placa, combustivel) {
        super(cor, peso, descricao, placa);
        this.combustivel = combustivel;
    }
    carregar() {}
}
```