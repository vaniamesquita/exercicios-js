function imc (peso, altura) {
  var imc = peso / (altura * altura);
return imc;
}
console.log(imc(68, 1.68));

function corFavorita(cor){
  if(cor === "azul") {
    return "eu gosto do ceu";
     } else if (cor === "verde") {
       return "eu gosto de mato";
     } else {
       return "não gosto de cores";
     }
}



addEventListener("click", function(){  })


function terceiraIdade (idade) {
   if(typeof idade !== "number") {
    return "por favor digite sua idade";
  } else if(idade >= 60){
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("oi"))


function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `falta visitar ${totalPaises - paisesVisitados} paises`
}




// Crie uma função para verificar se um valor é Truthy
function isTruthy (idade) {
  return !!idade;
}
  

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado (lado) {
  return lado * 4;
  }

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function MeuNomeCompleto (nome, sobrenome) {
  return nome + " " + sobrenome;

}

// Crie uma função que verifica se um número é par

function isEven (numero) {
  var modulo = numero % 2;
if(modulo !== 0) {
  return "impar";
}else {
  return "par";
}
}

function numeroPar(numero){
  var modulo = numero % 2;
if(modulo === 0) {
  return "par";
}else {
  return "impar";
}
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado){
return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener ('click', function (){
  console.log('vania mesquita');
  });

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20); 
