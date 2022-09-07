for (let i = 5; i >= 1; i--) { // conta os números impares de 5 a 1
    if (i % 2 !== 0) {
        console.log(i);
    }
}

let i = 5;
while (i >= 1) { // conta os números impares de 5 a 1
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

// executa pelo menos uma vez antes de verificar a condição
let index = 1;

do { // conta de 1 a 10 com o testo "digitando..."
    console.log('digitando...', index);
    index++;
} while (index <= 10);
