//EXERCICIOS MANIPULAÇÃO DO DOM

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);


// Retorne a linguagem do navegador
const linguagemComputador = window.navigator.language;
console.log(linguagemComputador);

if (linguagemComputador == "pt-BR") 
console.log("portugues");
else console.log(linguagemComputador);

// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log(larguraJanela);
