const numeros = [1, 2, 3];

// Adicionando elementos no início
numeros.unshift(0);
console.log(numeros);
// Adicionando elementos no meio
numeros.splice(2, 0, 'n');
console.log(numeros);
// Adicionando elementos no final
numeros.push(numeros.length);
console.log(numeros);