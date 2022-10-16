const numeros = [1, 2, 3, 4, 5, 6];

// Adicionando elementos no início
const primeiro = numeros.shift();
console.log(numeros);
// Adicionando elementos no meio'
const meio = numeros.splice(1, 2);
console.log(numeros);
// Adicionando elementos no final
const final = numeros.pop();
console.log(numeros);