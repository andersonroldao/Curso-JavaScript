// Função que mostra os números primos até o número desejado.

/*
exibirNumerosPrimos(37);

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        let ehPrimo = true;

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            console.log(numero);
        }
    }
}
*/

// Outra Forma
exibirNumerosPrimos(35);

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (numeroPrimo(numero)) {
            console.log(numero);
        }
    }
}

function numeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}