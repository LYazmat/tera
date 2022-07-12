/*  Exemplo Classe e Herança */

class Animal {
    constructor(tamanho, cor) {
        this.tamanho = tamanho;
        this.cor = cor;
    }

    comer() {
        console.log('Animal comendo.')
    }

    beberAgua() {
        console.log('Animal bebendo água.')
    }
}

// Cachoro herda classe Animal
class Cachorro extends Animal {
    constructor(nome, raca, cor, tamanho) {
        super(tamanho, cor);
        this.nome = nome;
        this.raca = raca;
    }

    latir() {
        console.log('O cachorro está latindo!\n~Au au au')
    }
}

let cachorro = new Cachorro('Billy', 'Pitbull', 'Cinza e Marrom', 'Grande');
cachorro.latir();

// Gato herda classe Animal
class Gato extends Animal {
    constructor(nome, raca, cor, tamanho) {
        super(tamanho, cor);
        this.nome = nome;
        this.raca = raca;
    }

    miar() {
        console.log('O gato está miando!\n~Meaw')
    }
}

let gato = new Gato('Tico', 'Viralata', 'Preto', 'Pequeno');
gato.miar();