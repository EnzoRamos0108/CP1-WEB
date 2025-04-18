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
            console.log(Seu IMC é ${imc}. Você está abaixo do peso);
            break;
        case "ideal":
            console.log(Seu IMC é ${imc}. Você está no peso ideal);
            break;
        case "acima":
            console.log(Seu IMC é ${imc}. Você está acima do peso);
            break;
        default:
            console.log("Não foi possível calcular a categoria do IMC.");
    }
}

// Exemplo de uso:
calcularIMC(70, 1.75);
console.log('--------------------------------------------')