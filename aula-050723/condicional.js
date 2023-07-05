//Estruturas condicionais
// Condição -> Calculo Lógico
// if - se

const altura = 1.59;
if(altura >= 1.60)
    console.log("Entrou no brinquedo!");
else
   console.log("Não entrou no brinquedo!");

let nivelIngles = 7
if(nivelIngles == 1) {
    console.log("Nível Iniciante");
}

else if(nivelIngles == 2) {
    console.log("Nivel Basico");
}

else if(nivelIngles == 3) {
    console.log("Nivel Intermediario");
}

else if(nivelIngles == 4) {
    console.log("Nivel avançado");
}

else if(nivelIngles == 5) {
    console.log("Nivel Fluente");
}
else {
    console.log("Nivel de inglês desconhecido");
}
    

let saldo = 1050; 
if(saldo > 100)
    console.log("Compar um livro");

else if(saldo > 200)
    console.log("Comprar um Tênis");

else if(saldo > 1000)
    console.log("Comprar uma bolsa");

    // {} -> Indica escopo
    // Escopo -> Bloco de código (agrupamento de instruções)

    let conseguiuFazerCompra = false;
    let saldo1 = 2500;
    if(saldo1 > 200) {
        console.log("Fez a compra do tenis");
        conseguiuFazerCompra = true;
    }
    else {
        console.log("Sem grana suficiente");
        conseguiuFazerCompra = false;
    }

    if(conseguiuFazerCompra){
        console.log("Conseguiu fazer a compra!");
    }




let num1 = 150, num2 = 120, num3 = 300;
if(num1 == num2 || num2 == num3 || num1 == num3) {
    console.log("Os numeros não podem ser iguais.");
}
else if(num1 > num2 && num1 > num3) {
    if(num2 > num3) {
        console.log(num1 + " > " + num2 + " > " + num3); // num1 > num2 > num3
    }
    else {
        console.log(num1 + " > " + num3 + " > " + num2); // num1 > num3 > num2
    }
}
else if(num2 > num1 && num2 > num3) {
    if(num1 > num3) {
        console.log(num2 + " > " + num1 + " > " + num3); // num2 > num1 > num3
    }
    else {
        console.log(num2 + " > " + num3 + " > " + num1); // num2 > num3 > mum1
    }
}
else {
    if(num1 > num2) {
        console.log(num3 + " > " + num1 + " > " + num2); // num3 > num1 > mum2
    }
    else {
        console.log(num3 + " > " + num2 + " > " + num1); // num3 > num2 > mum1
    }
}


switch(4) {
    case 1:
        console.log("Janeiro");
        break; // Para o fluxo do switch
    case 2:
        console.log("Feveiero");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Este mês não existe.");
}