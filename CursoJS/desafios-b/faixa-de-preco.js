// Array de objetos de faixa de preço para que ela possa ser usado em um site.

// Primeira Opção
let faixas1 = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999 }
];

function faixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    faixaPreco('até R$700', 0, 700),
    faixaPreco('de R$700 até R$1000', 700, 1000),
    faixaPreco('R$1000 ou mais', 1000, 999999)
];

// Terceira opção
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
        this.minimo = minimo,
        this.maximo = maximo
}

let faixas3 = [
    new faixaPreco('até R$700', 0, 700),
    new faixaPreco('de R$700 até R$1000', 700, 1000),
    new faixaPreco('R$1000 ou mais', 1000, 999999)
];

console.log(faixas1, faixas2, faixas3);