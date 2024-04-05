var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var telefone = document.getElementById("telefone");

var cep = document.getElementById("cep");

var logradouro = document.getElementById("logradouro");

var numero = document.getElementById("numero");

var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var cidade = document.getElementById("cidade");

var estado = document.getElementById("estado");

function alertar(){

        // formatação dos dados
        cep.value = cep.value.replace('-','');

        // validação de dados
        if(cep.value.length < 8){
            alert("Entre com um CEP válido!");
            return;
        }

        //buscar o endereço pelo cep
    
        const url =`https://viacep.com.br/ws/${cep.value}/json`;

        fetch(url)
        .then(resposta=>resposta.json())
        .then(data => {
            logradouro.value = data.logradouro;
            bairro.value = data.bairro;
            cidade.value = data.cidade;
            estado.value = data.estado;;
            complemento.value = data.complemento;

            saidaDeDados(); //chamada da função

        })
        .catch(error=>alert(error=>alert(error.message())))

    //alert(nome.value + " " + "clicou no botão!!!");

}


function saidaDeDados(){

    saida.innerText = "Nome: " + " " + nome.value +
            "\n E-mail: " + " " + email.value +
            "\n Telefone: " + " " + telefone +
            "\n CEP: " + " " + cep.value + 
            "\n logradouro: " + " " +  logradouro.value +
            "\n número: " + " " + numero.value +
            "\n complemento: " + " " + complemento.value +
            "\n bairro: " + " " + bairro.value +
            "\n cidade: " + " " +  cidade.value +
            "\n estado: " + " " + estado.value; 

}