//Escreva um programa que imprima os números de 1 a 20 usando um loop for.
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

//Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.


let p = 0; // Número de termos a serem exibidos
let u = 1;
let i = 0;
while (i < 10) {
  console.log(p);
  let soma = p + u;
  p = u;
  u = soma;
  i++;
}

//Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.


for (let i = 1; i <= 10; i++) {
    let resultado = numero + i;
    console.log(`${numero} + ${i} = ${resultado}`);
  }


let numero = 7; // Altere aqui o número desejado
exibirTabuada(numero);

//Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.


