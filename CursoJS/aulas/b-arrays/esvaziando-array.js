//const numeros = [1, 2, 3, 4, 5, 6];

// Solução 1, não apaga referências
let numeros1 = [1, 2, 3, 4, 5, 6];
let outros1 = numeros1

numeros1 = [];
console.log(numeros1, outros1);

// Solução 2, apaga todas as referências - melhor método
let numeros2 = [1, 2, 3, 4, 5, 6];
let outros2 = numeros2

numeros2.length = 0;
console.log(numeros2, outros2);

// Solução 3, método splice
let numeros3 = [1, 2, 3, 4, 5, 6];
let outros3 = numeros3

numeros3.splice(0, numeros3.length);
console.log(numeros3, outros3);

// Solução 4, método pop, custo de processamento alto
let numeros4 = [1, 2, 3, 4, 5, 6];
let outros4 = numeros4

while (numeros4.length > 0) {
    numeros4.pop();
}
console.log(numeros4);