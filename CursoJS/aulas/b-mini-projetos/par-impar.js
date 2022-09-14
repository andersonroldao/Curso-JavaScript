// Receber uma quantidade de valores para avaliar.
// Função exibe se cada número é par ou ímpar.

exibirTipo(5);

function exibirTipo(parImpar) {
    for (let i = 0; i <= parImpar; i++) {
        if (typeof parImpar !== 'number') {
            console.log('Digite um número');
        } else if (i % 2 === 0) {
            console.log(i, 'Par');
        } else {
            console.log(i, 'Impar');
        }
    }
}