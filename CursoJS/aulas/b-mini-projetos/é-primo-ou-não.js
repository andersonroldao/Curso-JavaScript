// Função que diz se o número inserido é primo ou não é primo.

exibirNumPrimo(37);
function exibirNumPrimo(numero) {
    if ((numero !== 7 && numero % 7 === 0) ||
        (numero !== 5 && numero % 5 === 0) ||
        (numero !== 3 && numero % 3 === 0) ||
        (numero !== 2 && numero % 2 === 0) ||
        (numero === 0 || numero === 1)) {
        console.log(`O número ${numero} não é primo!`);
    } else {
        console.log(`O número ${numero} é primo!`);
    }
}