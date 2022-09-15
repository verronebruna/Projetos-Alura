console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

// Breakpoint = um ponto de parada na execução do código.
// Clicaremos sobre "Debug with Node.js", e feito isso não é interessante fazermos novas alterações no código, porque ele está debugado.
// Teremos as variáveis separadas em dois contextos: local e global. As variáveis locais são as que foram criadas por nós, e as globais são parte do JavaScript, de um escopo maior.
//Array, por exemplo, é uma variável global, e podemos acessá-lo em qualquer parte do código.

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possiveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
// o while é um dos mais simples que existem e tranquilos de trabalhar, pois uma vez que determinada condição for verdadeira, um bloco de código específico será executado:
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}
console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa viagem!");
} else {
  console.log("Desculpe tivemos um erro!");
}

//Outro laço muito comum que encontraremos bastante no dia a dia da programação é o for. A ideia é a mesma: será executado em looping alguma operação, mas ele apresenta um formato de escrita mais complexo.
//O for é bastante popular e comum no universo da programação, inclusive, utilizamos a variável cont, mas o mais comum para este tipo de operação é utilizar o nome i como auxiliar do for:

for (let cont = 0; cont < 3; cont++) {
  //o ; dentro do For funciona como um divisor e o ++ funciona como +1
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
  }
}
