var nomeHtml = document.getElementById("nome-no-html");
var nome = "Monkey D. Luffy";

var cargoHtml = document.getElementById("cargo-no-html");
var cargo = "King of Pirates";

var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function cliqueNoProjetos(){
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function cliqueNoSobre(){
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);

