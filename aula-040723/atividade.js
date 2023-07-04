//Escreva um programa que verifique se um número é par ou ímpar.
let num1 = 12;
let condicao = (num1 % 2 == 0);
let mensagem = (condicao) ? "Par" : "Impar";
console.log(mensagem);

//Faça um programa que calcule a média aritmética de três números.

let nota1 = 4;
let nota2 = 10;
let nota3 = 6;
let media = (nota1 + nota2 + nota3) / 3;
 console.log("A média é igual a");
 console.log(media);

//Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.

let num2 = 22;
let condicao2 = (num2 % 3 == 0) && (num2 % 5 == 0);
let mensagem2 = condicao2 ? "é divisivel por 3 e 5." : "Não é divisivel por 3 e 5";
console.log(mensagem2);

//Faça um programa que calcule a área de um triângulo com base e altura.

let base= 10;
let altura= 20;
let area = (base * altura) / 2;
console.log("A área do triang. com base 4 e altura 8 é");
console.log(area);

//Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.
let tempcelsius = 36
let tempfahrenheit = tempcelsius * 1.8 + 32;
console.log("Celsius");
console.log(tempcelsius);
console.log("Fahrenheit");
console.log(tempfahrenheit);

//Faça um programa que calcule o delta das funções de segundo grau
//b^2 -4 * a * c

let a = 2
let b = 3
let c = 1
let delta = b**2 - 4 * a * c;
console.log("O valor de Delta é")
console.log(delta);

//Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).

let idade = 24;
let mensagem3 = (idade >= 18) ? "Pode dirigir" : "Não pode Dirigir"; 
console.log(mensagem3);

