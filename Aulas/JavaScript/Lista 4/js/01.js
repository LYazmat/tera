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