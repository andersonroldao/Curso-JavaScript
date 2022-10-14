const numeros = [1, 2, 3];

// Início
numeros.unshift(0);
console.log(numeros);
// Meio
numeros.splice(2, 0, 'n');
console.log(numeros);
// Final
numeros.push(numeros.length);
console.log(numeros);