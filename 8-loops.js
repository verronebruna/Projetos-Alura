console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada;

console.log("\n Destinos possiveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log("O comprador é maior de idadade ou está acompanhado.");
  listaDeDestinos.splice(1, 1); //removendo item que a pessoa quer comprar
} else {
  console.log("Comprador não é maior de idade e não posso vender.");
}

console.log("Embarque: \n");
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Você não pode embarcar");
}
