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