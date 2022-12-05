/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
} */

for (let i = 0; i < 3; i++) { // conta de 0 a 2
    console.log('Estou aprendendo!', i);
}

for (let i = 1; i <= 3; i++) { // conta de 1 a 3
    console.log('Estou aprendendo!', i);
}

for (let i = 1; i <= 5; i++) { // conta os números impares de 1 a 5
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (let i = 5; i >= 1; i--) { // conta os números impares de 5 a 1
    if (i % 2 !== 0) {
        console.log(i);
    }
}