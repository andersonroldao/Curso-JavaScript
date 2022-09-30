// Cria uma função em que a cada linha aparece mais um "*".
exibirAsterisco(10);

/*
function exibirAsterisco(qtdLinhas) {
    let vazio = "";
    for (let linha = 1; linha <= qtdLinhas; linha++) {
        vazio += "*";
        console.log(vazio);
    }
}
*/

// Outra forma, um loop dentro de outro, "Loop Nested".
function exibirAsterisco(qtdLinhas) {
    for (let linha = 1; linha <= qtdLinhas; linha++) {
        let vazio = "";
        for (let i = 0; i < linha; i++) {
            vazio += "*";
        }
        console.log(vazio);
    }
}