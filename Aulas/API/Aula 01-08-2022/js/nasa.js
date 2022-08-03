// https://api.nasa.gov/planetary/apod?api_key=521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03
// 521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03

function twoDigits(numero) {
    return numero <= 9 ? '0' + numero : numero;
}

function convertDate(date) {
    return `${hoje.getFullYear()}-${twoDigits(hoje.getMonth())}-${twoDigits(hoje.getDay())}`
}

var start = document.getElementById("inicio");
var end = document.getElementById("fim");
const lista = document.querySelector(".lista-imagem")
var hoje = new Date();

start.setAttribute('max', convertDate(hoje))
end.setAttribute('max', convertDate(hoje))

/*
function mostraImagemDaNasa() {
    if (start.value && end.value) {
        console.log(start.value)
        console.log(end.value)
        fetch(
                `https://api.nasa.gov/planetary/apod?api_key=521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03&date=${start.value}`
            )
            .then((resp) => resp.json())
            .then((dados) => {
                console.log({ dados });
                document.querySelector(
                    ".lista-imagem"
                ).innerHTML = `
                <div class="col-sm-6">
                    <p class="fs-1">${dados.title} (${dados.date})</p>
                    <p class="fs-6">${dados.explanation}</p>
                    <img class="w-100" src="${dados.url}" title="${dados.title}"/>
                </div>`;
            });
    }
}
*/

function mostraImagemDaNasa() {
    if (start.value && end.value) {
        fetch(
                `https://api.nasa.gov/planetary/apod?api_key=521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03&start_date=${start.value}&end_date=${end.value}`
            )
            .then((resp) => resp.json())
            .then((dados) => {
                console.log({ dados });

                lista.innerHTML = "";
                dados.forEach(element => {
                    lista.innerHTML += `
                    <div class="col-sm-6 p-3">
                        <div class="p-3 border border-muted rounded-3 h-100">
                            <p class="fs-2">${element.title} (${element.date})</p>
                            <p class="fs-6">${element.explanation}</p>
                            <img class="w-100 mt-5" src="${element.url}" title="${element.title}"/>
                        </div>
                    </div>`;
                });
            });
    }
}

mostraImagemDaNasa();


start.addEventListener("change", mostraImagemDaNasa, false);
end.addEventListener("change", mostraImagemDaNasa, false);