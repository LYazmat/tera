// https://api.nasa.gov/planetary/apod?api_key=521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03
// 521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03

function mostraImagemDaNasa() {
    fetch(
            `https://api.nasa.gov/planetary/apod?api_key=521rEK1dghO2zF4gOTNi7dvo6P7EKvqCEahBUv03`
        )
        .then((resp) => resp.json())
        .then((dados) => console.log({ dados }));
}

mostraImagemDaNasa();