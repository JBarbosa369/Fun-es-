// Variaveis
let num = 1; 
let texto = "Textinho"; 
let lista = ['Item 1', 'Item 2', 'Item 3'];
let objeto = {
    parametro1: "Valor 1",
    parametro2: "Valor 2"
}
let verificar = true;
// Exibir variaveis no console
function Hello(Nome){
    console.log(`Olá, muito bom dia senhor(a) ${Nome}`);
}
Hello('João');
Hello('Maria');
Hello('Pedro');
Hello('Ana');
// Função de soma   
let soma = (num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    console.log("A soma dos valores é: " + (num1 + num2));
}
soma(5,3);

// Função de subtração 
let subtrair = (num1, num2) => {
    let resultado = num1 - num2;
    console.log("A subtração dos valores é: " + resultado);
}
subtrair(5,3);

function verificarIdade(idade, Nome) {
    idade = Number(idade);
    if (idade > 20) {
        console.log(`Olá ${Nome}, você é maior de idade.`);
    } else {
        console.log(`Olá ${Nome}, você é menor de idade.`);
    }
}
verificarIdade(20, 'João');
      