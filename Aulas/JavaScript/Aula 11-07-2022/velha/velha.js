$(document).ready(function () {

    // Validar marcadoes => 3 marcacoes no array significa que ganhou
    let marcacoes = (arr) => {
        if (arr.length === 3) {
            ganhador = marcador;
            arr.forEach((x) => x.addClass('red'));
        }
    }

    /* 
    Configurações iniciais
    A ideia principal é atribuir a cada elemento da velha o respectivo
    elemento (em jQuery) da tabela do DOM
    */
    let marcador = 'X',
        ganhador = '',
        posicoes = [
            [$('#v-1-1'), $('#v-1-2'), $('#v-1-3')],
            [$('#v-2-1'), $('#v-2-2'), $('#v-2-3')],
            [$('#v-3-1'), $('#v-3-2'), $('#v-3-3')]
        ];

    // d1 - diagonal principal, d2 - diagonal secundaria
    let d1 = [$('#v-1-1'), $('#v-2-2'), $('#v-3-3')];
    let d2 = [$('#v-3-1'), $('#v-2-2'), $('#v-1-3')];

    // Adicionar método change para cada elemento
    posicoes.forEach((p, linha) => p.forEach((x, coluna) => {
        x.change(function () {

            // Altera o elemento no DOM com a marcação
            x.html(marcador);

            // Arrays que conterão a quantidde marcada para cada situação
            // d1_g e d2_g são verificações nas diagonais, h e v para a linha e coluna
            let d1_g = [], d2_g = [], h = [], v = [];

            // Verificar se é diagonal principal
            if (linha === coluna) d1_g = d1.filter((x) => x.html() === marcador);

            // Verificar se é diagonal secundária
            if (linha + coluna === 2) d2_g = d2.filter((x) => x.html() === marcador);

            // Verifica os elementos da linha e da coluna
            [0, 1, 2].forEach((i) => {
                if (posicoes[linha][i].html() === marcador) h.push(posicoes[linha][i]);
                if (posicoes[i][coluna].html() === marcador) v.push(posicoes[i][coluna]);
            });

            // Verificar se houve ganhador e alterar o style
            [d1_g, d2_g, h, v].forEach((arr) => marcacoes(arr));

            // Senão houve ganhador verificar se deu velha ou se o jogo continua
            if (ganhador === '') {
                // Se retornar undefined significa que não há mais posições para marcar
                let velha = posicoes.find(x => x.reduce((b, y) => {
                    if (y.html() === '') b = true
                    return b
                }, false) === true);

                if (velha === undefined) {
                    // Se deu velha, exibe que deu velha e bloqueia o jogo
                    $('h2').html(`Deu velha!`);
                    $('table').addClass('disabled-click');
                } else marcador = marcador === 'X' ? 'O' : 'X'; // <- Muda o marcador se o jogo continuar
            } else {
                // Se houve ganhador, exibe quem ganhou e bloqueia o jogo
                $('h2').html(`O jogador ${marcador} ganhou!`);
                $('table').addClass('disabled-click');
            }
        });
    }))

    // Função que chama a função change ao clicar
    $(".cedula").click(function () {
        if ($(this).html() === '') {
            $(this).change();
        } else {
            alert('Já preenchido!')
        }
    });

    // Resetar jogo
    $('.botao').click(function () {
        $('table').removeClass('disabled-click');
        $('h2').html('');
        posicoes.forEach((x) => x.forEach((y) => {
            y.html('');
            y.removeClass('red');
        }));
        marcador = 'X';
        ganhador = '';
    });

});