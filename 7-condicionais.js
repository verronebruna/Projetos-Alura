//Pensando ainda no nosso sistema de venda de passagem, teremos uma nova regra de negócio a ser implementada: queremos vender pacotes de viagem apenas para pessoas maiores de 18 anos de idade.

console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  listaDeDestinos.splice(1, 1);
}

console.log(listaDeDestinos);
