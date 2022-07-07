let primeira_o = (frutas) => {
    return frutas.find((fruta) => fruta.toLowerCase().indexOf('o') > -1);
}

let frutas = ['Abacaxi', 'Uva', 'Maçã', 'Goiaba', 'Abacate', 'Acerola']

primeira_o(frutas);
