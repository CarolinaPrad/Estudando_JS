//Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.

let numero = 8; 
if(numero > 0)
    console.log("o Numero é Positivo");
else if(numero < 0)
    console.log("O Número é negativo");
else 
    console.log("O Número é zero");


    //Crie um programa que solicite a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.

    let idade = 15
    if( idade >= 18)
       console.log("Você é maior de idade")
    else if(idade < 18)
       console.log("Você é menor de idade.")

    //Escreva um programa que receba dois números e determine qual deles é o maior.

    let a = 1;
    let b = 10;
    let c = 50;
    if(a > b && a > c) {
        console.log(" Maior número é: " + a);
    }
    else if(b > a && b > c) {
        console.log(" Maior número é: " + b);
    }
    else if(c > a && c > b) {
        console.log("Maior número é: " + c);
    }
    else {
        console.log("O maior número está duplicado");
    }
    

    //Crie um programa que receba dois números e verifique se ele é par ou ímpar.

    let numero1 = 60
    if(numero1 % 2 == 0)
    console.log("O número é par");
    else 
    console.log("O número é impar");

    //Escreva um programa que solicite o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.

    switch("domingo") {
        case "segunda-feira":
            console.log("Hoje é dia útil")
        break;
        case "terça-feira":
            console.log("Hoje é dia útil")
        break;
        case "quarta-feira":
            console.log("Hoje é dia útil")
        break;
        case "quinta-feira":
            console.log("Hoje é dia útil")
        break;
        case "sexta-feira":
            console.log("Hoje é dia útil")
        break;
        case "sabado":
            console.log("Hoje é final de semana")
        break;
        case "domingo":
            console.log("Hoje é final de semana")
        
    }

    //Faça um programa que solicite um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).

    switch(7) {
        case 1:
            console.log("Domingo")
        break;
        case 2:
            console.log("Segunda")
        break;
        case 3:
            console.log("Terça")
        break;
        case 4:
            console.log("Quarta")
        break;
        case 5:
            console.log("Quinta")
        break;
        case 6:
            console.log("Sexta")
        break;
        case 7:
            console.log("Sábado")
        break;
        default:
            console.log("Numero inválido. O número deve ser de 1 - 7");
        
    }
