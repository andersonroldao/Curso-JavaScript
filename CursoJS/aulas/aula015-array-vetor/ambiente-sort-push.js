let num = [5, 8, 2, 9, 3] // num é o vetor e [5, 8, 2, 9, 3] são os valores do vetor.

num.sort() // .sort() ordena os números em um vetor em ordem crescente.
num.push(1) // .push() adiciona um valor à última posição em um vetor.

console.log(num); // mostra o vetor sem formatação.
console.log(`O vetor tem ${num.length} posições`); // .length mostra todos os valores no vetor.
console.log(`O primeiro valor do vetor é ${num[0]}`); // [0] é a posição do vetor.
console.log(`O número 9 está na posição ${num.indexOf(9)}`); // .indexOf() mostra a posição do vetor em que o número pesquisado está.
console.log(`O número 6 está na posição ${num.indexOf(6)}`); // Quando a poisição do vetor for -1 significa que não existe.

let pos = num.indexOf(6)

if (pos == -1) {
    console.log(`A posição do vetor não foi encontrada`);
} else {
    console.log(`A posição do vetor é ${pos}`);
}