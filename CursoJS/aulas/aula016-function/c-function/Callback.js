// Callback Function
function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b);
}

const multiplica = function (total) {
    return total * 2;
}

console.log(somaCallback(10, 3, multiplica));
console.log(somaCallback(5, 2, function (total) {
    return total + 20;
}));