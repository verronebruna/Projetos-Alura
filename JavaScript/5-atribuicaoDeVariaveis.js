console.log("Trabalhando com atribuição de variavéis: ");

let nome = "Bruna";
const primeiroNome = "Bruna";
const sobrenome = "Verrone";

//console.log(nome + sobrenome); - dessa forma o nome é impresso no console como "Bruna Verrone", ele as duas strings em uma só frase.
console.log(nome, sobrenome); //pode-de obter o mesmo resultado usando a "," no lugar do "+".
console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + sobrenome; //aqui ele sobrescreve o que foi definido na váriavel nome anteriomente
//se eu tentar sobrescrever uma variável 'const' ira apresentar um erro, pois uma constante não muda.
//para poder sobrescrever devemos usar 'let'.
//O JavaScript permite que mudemos o tipo das variáveis livremente, mas essa não é uma boa prática, o correto é a atribuição seja mais constante, uma vez que a mudança de estados na programação é algo complexo que pode desencadiar em muitos erros.
console.log(nome);

//É interessante também fazermos como que as variáveis sejam o mais descritivas o possível, para facilitar a compreensão dos desenvolvedores. Em nosso caso, poderemos escrever :
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

//essa é uma boa prática do uso de 'let':
let contador = 0;
contador = contador + 1;
console.log(contador);

//O que aprendemos? variaveis const e let:
//var const = variáveis que  nunca mudam
//var let = são variáveis que são realmente variáveis

let idade; // declarando variável
idade = 22; // atribuindo valor
idade = idade + 1;
console.log(idade);
