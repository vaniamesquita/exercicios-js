// atribuição
var numero = 20;
var numero2 = 10;

//numero += 10; // numero = numero + 10
numero += numero2; //ou

console.log(numero)

// operador ternário
var idade = 15;
var naoPossuiDiabete = true;
var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabete)  ? "pode beber" : "não pode beber";

console.log(podeBeber);

// If abreviado

var possuiFaculdade = false;

if(possuiFaculdade)
console.log ("sim possui");
else 
console.log("não possui");

//EXERCICIO

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? "possui carro e casa" : "não possui";
// não é necessário colocar === true, pois já retorna um valor booleano na verificação q esta entre parenteses

console.log(darCredito);
