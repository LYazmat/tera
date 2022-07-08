/*
Jogo da Velha:
Vamos construir um jogo da velha, mas para isso algumas funções devem ser criadas. Siga cada exercício dessa etapa, para concluir o desafio

Para cada jogada feita o programa deve ser capaz de escrever como está a visão do tabuleiro. Crie uma função que irá "desenhar" o jogo da velha sempre que for chamada.

Exemplo:
    Entrada:
        jogoVelha = [['', '', ''], ['', '', ''], ['', '', '']]
        desenhaJogoVelha()
    Saída:
        <img>
        Exemplo 2:
    Entrada:
        jogoVelha = [['X', '', 'O'], ['', '', ''], ['', 'X', 'O']]
        desenhaJogoVelha()
    Saída:
        <img>

● Faça uma função chamada jogar, que deve receber como parametro o número da linha (1 a 3), o número da coluna (1 a 3) e qual vai ser a jogada no momento ("X" ou "O"). Toda vez que essa função for chamada, a matriz jogoDaVelha deve ser preenchida corretamente, e o jogo da velha deve ser "desenhado" no console.

● Faça uma função que retorne uma mensagem de erro com o texto "Jogada Inválida" sempre que a função jogar for chamada descumprindo alguma das regras abaixo:
    ○ Número da linha com valor diferente de 1, 2 ou 3
    ○ Número da coluna com valor diferente de 1, 2 ou 3
    ○ Valor da jogada diferente de "X" ou "O"
    ○ Informar uma posição que não esteja vazia.

● Faça funções que identifiquem ao final de uma jogada qual a situação do Jogo:
    ○ "Jogo em Andamento!"
    ○ "O Jogador X ganhou"
    ○ "O Jogador O ganhou"
    ○ "O jogo deu Velha"
*/


let jogoVelha = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

let desenhaJogoVelha = () => {
    console.log('   1   2   3  ');
    console.log(`1  ${jogoVelha[0][0] || ' '} | ${jogoVelha[0][1] || ' '} | ${jogoVelha[0][2] || ' '} `);
    console.log('  ___|___|___');
    console.log(`2  ${jogoVelha[1][0] || ' '} | ${jogoVelha[1][1] || ' '} | ${jogoVelha[1][2] || ' '} `);
    console.log('  ___|___|___');
    console.log(`3  ${jogoVelha[2][0] || ' '} | ${jogoVelha[2][1] || ' '} | ${jogoVelha[2][2] || ' '} `);
    console.log('     |   |   ');
}

let verificarErro = (linha, coluna, marcado) => {
    let msg = [], posicoes = [1, 2, 3], macadores = 'XO';
    if (posicoes.indexOf(linha) === -1) {
        msg.push('O número da linha deve estar entre 1 e 3, incluindo os mesmos.');
    }
    if (posicoes.indexOf(coluna) === -1) {
        msg.push('O número da coluna deve estar entre 1 e 3, incluindo os mesmos.');
    }
    if (macadores.indexOf(marcado) === -1) {
        msg.push('O valor deve ser X ou O.')
    }
    if (posicoes.indexOf(linha) > -1 && posicoes.indexOf(coluna) > -1 && jogoVelha[linha - 1][coluna - 1] !== null) {
        msg.push('Posição já preenchida.')
    }
    if (msg.length === 0) return true;
    else {
        console.log(msg.reduce((result, m) => result + '\n' + m), '');
        return false;
    }
}

let validarSituacao = (linha, coluna, marcador) => {
    let h = 0, v = 0, blank = 0;
    let d1 = [jogoVelha[0][0], jogoVelha[1][1], jogoVelha[2][2]].filter((x) => x === marcador);
    let d2 = [jogoVelha[0][2], jogoVelha[1][1], jogoVelha[2][0]].filter((x) => x === marcador);
    let velha = jogoVelha.find(x => x.reduce((b, y) => {
        if (y === null) b = true
        return b
    }, false) === true);
    for (i in [1, 2, 3]) {
        if (jogoVelha[linha - 1][i] === marcador) h += 1;
        if (jogoVelha[i][coluna - 1] === marcador) v += 1;
    }
    if (d1.length === 3 || d2.length === 3 || h === 3 || v === 3) console.log(`O jogador ${marcador} ganhou!`);
    else if (velha === undefined) console.log('O jogo deu velha!');
    else console.log('Jogo em andamento!');
}

let jogar = (linha, coluna, marcador) => {
    marcador = marcador.toUpperCase();
    if (verificarErro(linha, coluna, marcador)) {
        jogoVelha[linha - 1][coluna - 1] = marcador;
        validarSituacao(linha, coluna, marcador);
    }
    desenhaJogoVelha();
}

desenhaJogoVelha();