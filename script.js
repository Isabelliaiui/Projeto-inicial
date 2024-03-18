var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

function alertar(){
    //alert(nome.value + " " + "clicou no botão!!!");
    saida.innerText = "Nome: " + " " + nome.value +
    "\n E-mail: " + " " + email.value +
    "\n Telefone: " + " " + Telefone +
    "\n CEP: " + " " + CEP +
    "\n logradouro: " + " " +  logradouro +
    "\n número: " + " " + número +
    "\n complemento: " + " " + complemento +
    "\n bairro: " + " " + bairro +
    "\n cidade: " + " " +  cidade +
    "\n estado: " + " " + estado;
}