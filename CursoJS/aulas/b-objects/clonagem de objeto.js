const celular = {
    marcaCelular: 'APPLE',
    tamanhoTela: {
        vertical: 150.9,
        horizontal: 75.7
    },
    ligar: function () {
        console.log("Fazendo ligação...");
    }
}

const novoObjeto = Object.assign({
    capacidadeBateria: 3110
}, celular);
console.log(novoObjeto);

const objeto2 = {
    ...celular
}
console.log(objeto2);