const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Se o array for um objeto ele irá copiar a referência
const arrayObj = [{ letra: 'a' }];
arrayObj[0].letra = 'b';

// Combinar
const combinado = array1.concat(array2,arrayObj);
console.log(combinado);

// Dividir
const cortado1 = combinado.slice(0, 4);
const cortado2 = combinado.slice(4)
console.log(cortado1, cortado2);