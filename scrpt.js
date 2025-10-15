// Variaveis
let num = 1;  // number
let texto = "Textinho"; 
let lista = ['Item 1', 'Item 2', 'Item 3'];
let objeto = {
    parametro1: "Valor 1",
    parametro2: "Valor 2"
}
let verificar = true; // boolean
// Exibir variaveis no console
function Hello(Nome){
    console.log(`Olá, muito bom dia senhor(a) ${Nome}`);
}
Hello('João');
Hello('Maria');
Hello('Pedro');
Hello('Ana');
// Função de soma   
let soma = (num1, num2) => { // arrow function
    num1 = Number(num1);
    num2 = Number(num2);
    console.log("A soma dos valores é: " + (num1 + num2));
}
soma(5,3);


let subtrair = (num1, num2) => { // arrow function
    let resultado = num1 - num2;
    console.log("A subtração dos valores é: " + resultado);
}
subtrair(5,3); // 
 
function verificarIdade(idade, Nome) { // maior ou menor de idade
    idade = Number(idade);
    if (idade > 20) {
        console.log(`Olá ${Nome}, você é maior de idade.`);
    } else {
        console.log(`Olá ${Nome}, você é menor de idade.`);
    }
}
verificarIdade(20, 'João');  // maior de idade


// verificacões / ou opracões
// = recebe
// == igual
// === identico
// != diferente
// !== não identico
// > maior
// < menor
// >= maior ou igual
// <= menor ou igual
// && e
// || ou
// ! negação
// ? ternario
// ++ incremento
// -- decremento
 
if (!true) { // negação
    console.log('Caiu no if');
} else {
    console.log('Caiu no else');
}

 