
const numeros = [1, 2, 3, 4, 5, 6];

for (const numero of numeros) {
    console.log(numero);
}

// Novo método
numeros.forEach(function (numero, i) {
    console.log(numero, i);
})

// Novo metodo com function arrow
numeros.forEach((numero, i) => console.log(numero, i))