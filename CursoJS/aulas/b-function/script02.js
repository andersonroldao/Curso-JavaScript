// Verbo + Substantivo

let tamanhoSite = "1080px";

function alteraTamanho(tamanho, zoom) {
    tamanhoSite = tamanho + ' ' + zoom;
}

console.log(tamanhoSite);
alteraTamanho("2440px", "2x");
console.log(tamanhoSite);