var nome = "vania";
console.log(nome);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);

// Declarar uma variável com o seu nome
var nome = "vania";

// Declarar uma variável com a sua idade

var idade = 33;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor

var comidaFavorita;

// Atribuir valor a sua comida favorita

ComidaFavorita = "pizza";

// Declarar 5 variáveis diferentes sem valores

var comida, estudos, endereço, idade, cep;

console.log(nome, idade, ComidaFavorita)


var nome = "vania";
var idade = 33;
console.log(typeof idade);

var gols = 1000;
var frase = "Romário fez " + gols * 2 + " gols";
var frase = `Romário fez ${gols} gols`;

console.log(frase);


// Declare uma variável contendo uma string
var nome = "pedro";
console.log(nome);

// Declare uma variável contendo um número dentro de uma string
var ano = "2021";
console.log(ano);
// Declare uma variável com a sua idade
var idade = 33;
console.log(idade);
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = "vania";
var sobrenome = "mesquita";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);
// Coloque a seguinte frase em uma variável: It's time

var frase = "it's time";
console.log(frase);
// Verifique o tipo da variável que contém o seu nome

console.log(typeof nome);

var idade = 23
var exp = 2e10;
console.log (exp);


// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN

var expressao1 = "teste" / 2;
console.log(expressao1)

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;
console.log(soma)

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso);

/* EXERCICIO */

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 33;
var idadeMamis = 59;

if(minhaIdade > idadeMamis) {
  console.log("vania é mais velha");
}
else if(minhaIdade === idadeMamis) {
  console.log("é igual");
}
else{
  console.log("mamis é mais velha");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; 
console.log(!!nome);
var idade = 28; 
console.log(!!idade);
var possuiDoutorado = false; 
console.log(!!possuiDoutorado);
var empregoFuturo; 
console.log(!!empregoFuturo);
var dinheiroNaConta = 0; 
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil>china) {
  console.log("Brasil é maior");
}
  else {
  console.log("china é maior")
  }



// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} //gato cão
