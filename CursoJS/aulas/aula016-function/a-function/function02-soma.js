function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(5, 7));

function soma(n1=0, n2=7) { // Parâmetros opcionais
    return n1 + n2
}
console.log(soma(5));