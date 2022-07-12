$(document).ready(function () {
    // Configurações iniciais
    let jogoVelha = [],
        marcador = 'X',
        ganhador = '';

    // Array com ID's
    let posicoes = [
        ['#v-1-1', '#v-1-2', '#v-1-3'],
        ['#v-2-1', '#v-2-2', '#v-2-3'],
        ['#v-3-1', '#v-3-2', '#v-3-3']
    ]

    // Mudar variável jogoVelha sempre que marcar
    let setVelha = () => {
        jogoVelha = posicoes.map((x) => x.map((y) => $(y).html()));
    };

    // Validar marcadoes => 3 marcacoes no array significa que ganhou
    let marcacoes = (arr) => {
        if (arr.length === 3) {
            ganhador = marcador;
            arr.forEach((x) => x.addClass('red'));
        }
    }

    let validarSituacao = () => {
        // Validar Diagonal 1
        let d1 = ['#v-1-1', '#v-2-2', '#v-3-3'];
        let d1_g = d1.map((x) => $(x)).filter((x) => x.html() === marcador);
        marcacoes(d1_g);

        // Validar Diagonal 2
        let d2 = ['#v-3-1', '#v-2-2', '#v-1-3'];
        let d2_g = d2.map((x) => $(x)).filter((x) => x.html() === marcador);
        marcacoes(d2_g);

        // Validar Verticais e Horizontais
        for (let i in posicoes) {
            let h = [],
                v = [];
            for (let j in posicoes) {
                if (jogoVelha[i][j] === marcador) h.push($(posicoes[i][j]));
                if (jogoVelha[j][i] === marcador) v.push($(posicoes[j][i]));
            }
            marcacoes(h);
            marcacoes(v);
        }

        // Verificar se houve ganhador
        if (ganhador === '') {
            // Se retornar undefined significa que não há mais posições para marcar
            let velha = jogoVelha.find(x => x.reduce((b, y) => {
                if (y === '') b = true
                return b
            }, false) === true);

            if (velha === undefined) {
                $('h2').html(`Deu velha!`);
                $('table').addClass('disabled-click');
            } else marcador = marcador === 'X' ? 'O' : 'X'; // <- Muda o marcador se o jogo continuar
        } else {
            $('h2').html(`O jogador ${marcador} ganhou!`);
            $('table').addClass('disabled-click');
        }

    };

    // Validar Local, Preencher e Validar Situação
    let jogar = (element) => {
        if ($(element).html() === '') {
            $(element).html(marcador);
            setVelha();
            validarSituacao();
        } else {
            alert('Já preenchido!')
        }
    };

    // Clicar
    $(".cedula").click(function () {
        jogar(this);
    });

    // Resetar jogo
    $('.botao').click(function () {
        $('table').removeClass('disabled-click');
        $('h2').html('');
        posicoes.forEach((x) => x.forEach((y) => {
            $(y).html('');
            $(y).removeClass('red');
        }));
        jogoVelha = [];
        marcador = 'X';
        ganhador = '';
    });

});