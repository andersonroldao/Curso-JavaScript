// Natureza dinâmica de Objetos

const mouse = {
    cor: 'white',
    marca: 'logitech'
}

mouse.velocidade = 15000;
mouse.trocarDPI = function () {
    console.log('mudando DPI ');
}

delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);