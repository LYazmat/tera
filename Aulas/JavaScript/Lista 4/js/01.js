class Pessoa {

    constructor(nome, endereco) {
        this._nome = nome;
        this._endereco = endereco;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(novoEndereco) {
        this._endereco = novoEndereco;
    }
}

class Tripulacao extends Pessoa {

    constructor(nome, endereco, idTripulacao) {
        super(nome, endereco);
        this._idTripulacao = idTripulacao;
    }

    get idTripulacao() {
        return this._idTripulacao;
    }

    set idTripulacao(novoIdTripulacao) {
        this._idTripulacao = novoIdTripulacao;
    }

}


class Passageiro extends Pessoa {

    constructor(nome, endereco, numeroSmiles) {
        super(nome, endereco);
        this._numeroSmiles = numeroSmiles;
    }

    get numeroSmiles() {
        return this._numeroSmiles;
    }

    set numeroSmiles(novoNumeroSmiles) {
        this._numeroSmiles = novoNumeroSmiles;
    }

}

class Agente extends Pessoa {

    constructor(nome, endereco, idAgente) {
        super(nome, endereco);
        this._idAgente = idAgente;
    }

    get idAgente() {
        return this._idAgente;
    }

    set idAgente(novoIdAgente) {
        this._idAgente = novoIdAgente;
    }

}

let tripulante = new Tripulacao("Marcus", "Rua X", 12);
console.log(tripulante);

let passageiro = new Passageiro("Ana", "Rua Z", 100);
console.log(passageiro);

let agente = new Agente("Ricardo", "Rua H", 7);
console.log(agente);