function escreva() {
    console.log('Olá, Seja muito Bem-vindo!');
}

escreva();


const msg = escrevaMensagem('Hello, World!');
const msg1 = escrevaMensagem('Tudo numa boa?');

function escrevaMensagem(mensagem) {
    return mensagem;
}

console.log(`${msg}
${msg1}`);


const resultadoSoma = soma(5, 7);

function soma(a, b) {
    return a + b;
}

console.log(resultadoSoma);


const arrayNumeros = [1, 2, 4, 5, 7, 9, 11];
const resultado = somaTudo(arrayNumeros);

function somaTudo(numeros) {
    let total = 0;

    for (const num of numeros) {
        total = total + num;
    }
    return total;
}

console.log(resultado);