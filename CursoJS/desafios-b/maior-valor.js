// Maior valor entre dois números.

// eu fiz.
function maximoValor() {
    const a = 20
    const b = 10
    if (a > b) {
        console.log(a, 'é o maior valor');
    } else {
        console.log(b, 'é o maior valor');
    }
}
maximoValor()

// outra maneira.
let valorMaior = max(11, 21);
console.log(valorMaior);

function max(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

// forma mais eficiente.
let valorMaior1 = max(22, 12);
console.log(valorMaior1);

function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}