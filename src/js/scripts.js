// Questão 1 - Declaração de variáveis
let vinhoTinto;  // undefined
let vinhoBranco = '';  // vazio
let vinhoNome = 'Vinho Branco Chardonnay meio-seco';  // valor atribuído
console.log('Questão 1')
console.log(vinhoTinto);  // undefined
console.log(vinhoBranco);  // vazio
console.log(vinhoNome);  // Vinho Branco Chardonnay meio-seco
console.log('--------------------------------------------')

//Questão 2 - Operadores !=, ==, >=

let garrafasVendidas = 60;
let garrafasNecessarias = 50;

console.log('Questão 2')
console.log(garrafasVendidas != garrafasNecessarias);  // vai exibir 'true'
console.log(garrafasVendidas == garrafasNecessarias);  // vai exibir 'false'
console.log(garrafasVendidas >= garrafasNecessarias); // vai exibir 'true'
console.log('--------------------------------------------')

//Questão 3 - Cálculo do IMC com Switch case
// Pergunta sobre o cliente
console.log("Questão 3- Cálculo do IMC com Switch case")
console.log("Será que o degustador da Vinharia Agnello está no peso ideal para apreciar nossos vinhos?");
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "abaixo";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "ideal";
    } else {
        classificacao = "acima";
    }

    switch (classificacao) {
        case "abaixo":
            console.log(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso`);
            break;
        case "ideal":
            console.log(`Seu IMC é ${imc.toFixed(2)}. Você está no peso ideal`);
            break;
        case "acima":
            console.log(`Seu IMC é ${imc.toFixed(2)}. Você está acima do peso`);
            break;
        default:
            console.log("Não foi possível calcular a categoria do IMC.");
    }
}

// Exemplo de uso:
calcularIMC(70, 1.75);
console.log('--------------------------------------------')

//Questão 4 - programa que faz repetição até 50 (usando for)
console.log("Questão 4")
console.log("Quantas garrafas da nossa edição especial 'Vinho Branco Chardonnay meio-seco' conseguimos embalar hoje?");
for (let i = 1; i <= 50; i++) {
    console.log("Embalando garrafa número: " + i);
}
console.log('--------------------------------------------')

// Questão 5 - Login de funcionário com base na vinharia.

console.log("Questão 5")
console.log("Apenas funcionários cadastrados podem acessar o sistema de controle dos vinhos. Qual seu login?");

let usuario = "admin";
let senha = "1234";

let usuarioDigitado = "admin"; 
let senhaDigitada = "1234";     

if (usuarioDigitado === usuario && senhaDigitada === senha) {
    console.log("Login realizado com sucesso! Bem-vindo ao sistema da Vinharia Agnello 🍷");
} else {
    console.log("Falha na autenticação! Usuário ou senha incorretos.");
}
console.log('--------------------------------------------')

// Questão 6 - Cálculo da média das notas no curso da vinharia
console.log('Questão 6')
console.log("Você participou do nosso curso de Sommeliers da Vinharia Agnello. Vamos calcular sua média final e ver se foi aprovado!");

let notas = [7, 8, 6, 5, 9, 6.5, 7];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log("Sua média foi: " + media.toFixed(2));

if (media >= 6) {
    console.log("Parabéns! Você foi aprovado e agora é um Sommelier certificado pela Vinharia Agnello! 🍷");
} else {
    console.log("Infelizmente você não alcançou a média. Recomendamos revisar os vinhos tintos e tentar novamente.");
}
console.log('--------------------------------------------')

