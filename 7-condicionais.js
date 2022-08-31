//Pensando ainda no nosso sistema de venda de passagem, teremos uma nova regra de negócio a ser implementada: queremos vender pacotes de viagem apenas para pessoas maiores de 18 anos de idade.

console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 14;
console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador é maior de idade.");
} else {
  console.log("Comprador não é maior de idade e não posso vender.");
}

console.log(listaDeDestinos);

//Utilizamos os operadores lógicos:
// Maior que >18
// Menor que <18
// Maior que ou igual >=18
// Menor que ou igual <=18
// Igualdade/Comparação ==18
// Atribuição de valor =
