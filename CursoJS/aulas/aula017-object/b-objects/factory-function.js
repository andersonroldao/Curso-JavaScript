const celular = {
    marcaCelular: 'APPLE',
    tamanhoTela: {
        vertical: 150.9,
        horizontal: 75.7
    },
    capacidadeBateria: 3110,
    ligar: function () {
        console.log("Fazendo ligação...");
    }
}

// Factory Function
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        //marcaCelular: marcaCelular,
        //tamanhoTela: tamanhoTela,
        //capacidadeBateria: capacidadeBateria,
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...");
        }
    }
}

const celular1 = criarCelular('Samsung', 7.1, 5500);
console.log(celular1);