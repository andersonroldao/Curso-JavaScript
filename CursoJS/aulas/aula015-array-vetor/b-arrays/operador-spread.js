// Nova maneira de concatenar e dividir arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Substitui o concat
const combinado = [...array1, ...array2];
console.log(combinado);

// Substitui o slice
const cortado = [...array2];
console.log(cortado);