console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada;
const destino = "Salvador";

console.log("\n Destinos possiveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe");
  } else {
    console.log("Destino não existe");
  }
  contador += 1;
}

// {
//     console.log("O comprador é maior de idadade ou está acompanhado.");
//     listaDeDestinos.splice(1, 1);
//     temPassagemComprada = true;
//   } else {
//     console.log("Comprador não é maior de idade e não posso vender.");
//     temPassagemComprada = true;
//   }
// console.log("Embarque: \n");
// if (idadeComprador >= 18 && temPassagemComprada) {
//   console.log("Boa viagem");
// } else {
//   console.log("Você não pode embarcar");
// }
