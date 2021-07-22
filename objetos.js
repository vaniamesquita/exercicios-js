var pessoa = {
  nome: "vania",
  idade: 33,
}

var quadrado = {
  lados: 4,
  area: function(lado) { //abreviação fica area(lado) {}
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

console.log(Math.random())

var menu ={
  width: 800,
  height: 50,
  backgroundColor: "#CCC",
}

var bg = menu.backgroundColor;

//EXERCICIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "vania",
  sobrenome: "mesquita",
  idade: 33,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: "10 anos",
  latir(pessoa) {
    if(pessoa === "homem") {
      return "latir"
    } else {
      return "nada";
    }

  }
}


var nome = "vania";

nome.length;
nome.charAt(3);
nome.replace("va", "ta");
nome


//EXERCICIO 2
// nomeie 3 propriedades ou métodos de strings
nome.length
nome.replace
nome.slice
nome.toUpperCase

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector(".botao");
btn.className


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

