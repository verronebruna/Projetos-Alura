//Pensando ainda no nosso sistema de venda de passagem, teremos uma nova regra de negócio a ser implementada: queremos vender pacotes de viagem apenas para pessoas maiores de 18 anos de idade.

console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador é maior de idade.");
//   listaDeDestinos.splice(1, 1); (removendo item que a pessoa quer comprar)
// } else if (estaAcompanhada) {
//   console.log("Comprador é maior de idade.");
//   listaDeDestinos.splice(1, 1); (removendo item) - evite ter código duplicado!
// } else {
//   console.log("Comprador não é maior de idade e não posso vender.");
// }

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log("O comprador é maior de idadade ou está acompanhado.");
  listaDeDestinos.splice(1, 1); //removendo item que a pessoa quer comprar
} else {
  console.log("Comprador não é maior de idade e não posso vender.");
}

console.log("Embarque: \n");
//O \n é um caractere especial que possibilita que pulemos uma linha no momento de imprimir a mensagem de texto.
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Você não pode embarcar");
}

//Utilizamos os operadores lógicos:
// Maior que >18
// Menor que <18
// Maior que ou igual >=18
// Menor que ou igual <=18
// Igualdade/Comparação ==18
// Atribuição de valor =

//Os operadores lógicos devem ter no lado esquerdo e direito uma expressão booleana, ex: if (idade > 18 && idade < 65)
//O operador lógico "AND" é representado pelos caracteres "&&" e o "OR" pelo "||".
