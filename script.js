var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var Telefone = document.getElementById("Telefone");

var CEP = document.getElementById("CEP");

var logradouro = document.getElementById("logradouro");

var número = document.getElementById("número");

var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var cidade = document.getElementById("cidade");

var estado = document.getElementById("estado");

function alertar(){

        //buscar o endereço pelo cep
        const url =`https://viacep.com.br/ws/${cep.value}/json`;

        fetch(url)
        .then(resposta=>resposta.json())
        .then(data => {
            logradouro.value = data.logradouro;
            bairro.value = data.bairro;
            cidade.value = data.cidade;
            bairro.value = data.bairro;
            bairro.value = data.bairro;

            saida.innerText = "Nome: " + " " + nome.value +
            "\n E-mail: " + " " + email.value + nome.value +
            "\n Telefone: " + " " + Telefone + nome.value +
            "\n CEP: " + " " + CEP + nome.value + 
            "\n logradouro: " + " " +  logradouro + nome.value +
            "\n número: " + " " + número + nome.value +
            "\n complemento: " + " " + complemento + nome.value +
            "\n bairro: " + " " + bairro + nome.value +
            "\n cidade: " + " " +  cidade + nome.value +
            "\n estado: " + " " + estado + nome.value;
        })
        .catch(error=>alert(error))

    //alert(nome.value + " " + "clicou no botão!!!");

}