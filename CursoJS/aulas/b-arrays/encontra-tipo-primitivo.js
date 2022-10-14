const numero = [1, 2, 3, 1, 4];

// Retorna 1 se o número estiver no array
console.log(numero.indexOf(2));
// Retorna -1 se o número não estiver no array
console.log(numero.indexOf(5));

// Retorna true se o número estiver no array
console.log(numero.indexOf(2) !== -1);
// Retorna false se o número não estiver no array
console.log(numero.indexOf(5) !== -1);

// Forma mais fácil de saber se o número existe no array
console.log(numero.includes(2));

// Busca se existe o número, se existir mostra a última posição em que ele está no array
console.log(numero.lastIndexOf(1));