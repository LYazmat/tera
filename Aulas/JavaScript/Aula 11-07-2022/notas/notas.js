$(function() {

    $('#calcular').click(function() {
        let nome = $('#nome').val(),
            pTrim = $('#p-trim').val(),
            sTrim = $('#s-trim').val(),
            tTrim = $('#t-trim').val();
        if ([nome, pTrim, sTrim, tTrim].every(x => x !== '')) {
            let media = +pTrim + +sTrim + +tTrim;
            let status = media < 60 ?
                '<span class="reprovado">Reprovado</span>' :
                '<span class="aprovado">Aprovado</span>';
            let linha = `<tr>
                            <td>${nome}</td>
                            <td>${pTrim}</td>
                            <td>${sTrim}</td>
                            <td>${tTrim}</td>
                            <td>${status}</td>
                        </tr>`;
            $('#tabela tbody tr:last').after(linha);
            $('input').val('');
        } else alert('Informe os valores!');
    });

});