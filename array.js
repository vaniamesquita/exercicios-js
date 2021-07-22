var videoGames = ["ps4", "ps5" , "xbox", "nintendo"];

for (var numero = 0; numero < 4; numero++) {
  //inicio, condição e incremento
  //cuidado com o loop infinito, esquecer de colocar o incremento
console.log(numero)
}

//array + loops
//codigo muito comum
//usamos.lenght para saber a quantidade de itens no array automaticamente
var videoGames = ["ps4", "ps5" , "xbox", "nintendo"];
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}

//break (quebra o loop depois de uma condição)
var diasSemana = ["segunda" , "terça", "quarta", "quinta", "sexta", "sabado", "domingo"];
for (var i = 0; i < diasSemana.length; i++) {
  console.log(diasSemana[i]);
  if (diasSemana[i] === "quarta") {
    break;
  }
}


//forEach
//tambem muito usado
//metodo que executa uma função para cada item do array
//podemos passar os seguintes parametros: item, index e array

diasSemana.forEach(function(item, index) {
  console.log(item, index);
})

//EXERCICIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilVenceuCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(var i = 0; i < brasilVenceuCopa.length; i++ ) {
  console.log("o Brasil venceu a copa de " + brasilVenceuCopa[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === "Pera"){
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length -1];