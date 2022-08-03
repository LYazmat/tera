/*
function carregaScript(url_do_javascript) {
  console.log({ url_do_javascript });

  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");

    script.src = url_do_javascript;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("O endereço/URL está errado"));

    document.head.append(script);
  })
    .then(() => console.log("sucesso!"))
    .catch((error) => console.log("Deu ruim: " + error));
}

carregaScript("https://code.jquery.com/jquery-3.6.0.min.js");

carregaScript("https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js");
*/

function carregaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .catch((error) =>
            console.log(
                `Deu erro! O Cep informado '${cep}' não foi encontrado na API`
            )
        )
        .then((resposta) => resposta.json())
        .then((dados) => {
            //console.log(dados);

            document.querySelector("#uf").value = dados.uf;
            document.querySelector("#cidade").value = dados.localidade;
            document.querySelector("#bairro").value = dados.bairro;
            document.querySelector("#endereco").value = dados.logradouro;
            document.querySelector("#nr_end").focus();
        });
}

function listarUsuarios() {

    fetch("https://reqres.in/api/users")
        .then((resp) => resp.json())
        .then((dadosDaApi) => {
            //console.log(dadosDaApi.data);

            const dados = dadosDaApi.data;

            dados.map((usuario) => {
                document.querySelector(
                    ".container_lista"
                ).innerHTML += `<p>O nome do usuário é <strong>${usuario.first_name}</strong> foto: <img src="${usuario.avatar}" /></p>`;
            });
        });
}

function dadosDoUsuario(id_usuario) {
    fetch(`https://reqres.in/api/users/${id_usuario}`)
        .then((resp) => resp.json())
        .then((dadosDaApi) => {
            //console.log(dadosDaApi.data);

            const dados = dadosDaApi.data;

            console.log(dados);

            document.querySelector(".container_unico").innerHTML = `
          <p>
            <strong>${dados.first_name}</strong>  <br />
            <a href='mailto:${dados.email}'>${dados.email}</a> <br />
            <img src='${dados.avatar}' />
          </p>
        `;
        });
}

function criarUsuario(primeiro_nome, sobre_nome, e_mail) {
    const usuario = {
        first_name: primeiro_nome,
        last_name: sobre_nome,
        email: e_mail
    };

    const configuracoes_do_request = {
        method: "POST", //GET (método http padrão, quando nenhum outro método é informado), PUT, PATCH, DELETE
        body: JSON.stringify(usuario), //o corpo da requisição não precisa ser enviado no GET e no DELETE, para POST, PATCH e PUT é obrigatório.
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`https://reqres.in/api/users`, configuracoes_do_request)
        .then((resp) => resp.json())
        .then((dados) => console.log({ dados }));
}

function alterarUsuario(id_usuario, primeiro_nome, sobre_nome, e_mail) {
    const usuario = {
        first_name: primeiro_nome,
        last_name: sobre_nome,
        email: e_mail
    };

    const configuracoes_do_request = {
        method: "PUT", //GET (método http padrão, quando nenhum outro método é informado), POST, PUT, PATCH, DELETE
        body: JSON.stringify(usuario), //o corpo da requisição não precisa ser enviado no GET e no DELETE, para POST, PATCH e PUT é obrigatório.
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`https://reqres.in/api/users/${id_usuario}`, configuracoes_do_request)
        .then((resp) => resp.json())
        .then((dados) => console.log({ dados }));
}

function excluirUsuario(id_usuario) {
    const configuracoes_do_request = {
        method: "DELETE" //GET (método http padrão, quando nenhum outro método é informado), POST, PUT, PATCH, DELETE
            //o corpo da requisição não precisa ser enviado no GET e no DELETE, para POST, PATCH e PUT é obrigatório.
    };

    fetch(
        `https://reqres.in/api/users/${id_usuario}`,
        configuracoes_do_request
    ).then((resp) => console.log(resp.status));
}

function atualizaParcialmenteUsuario(id_usuario, e_mail) {
    const usuario = {
        email: e_mail
    };

    const configuracoes_do_request = {
        method: "PATCH", //GET (método http padrão, quando nenhum outro método é informado), POST, PUT, PATCH, DELETE
        body: JSON.stringify(usuario), //o corpo da requisição não precisa ser enviado no GET e no DELETE, para POST, PATCH e PUT é obrigatório.
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`https://reqres.in/api/users/${id_usuario}`, configuracoes_do_request)
        .then((resp) => resp.json())
        .then((dados) => console.log({ dados }));
}

listarUsuarios();

dadosDoUsuario(12);

criarUsuario("Michael", "Jackson", "michael@jackson5.com");

alterarUsuario(2, "Steve", "Jobs", "steve.jobs@apple.com");

excluirUsuario(5);

atualizaParcialmenteUsuario(4, "email@teste.com");