// PascalCase - UmDoisTresQuatro
function Celular(marcaCelular, modeloCelular, tamanhoTela, CapacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.modeloCelular = modeloCelular,
        this.tamanhoTela = tamanhoTela,
        this.CapacidadeBateria = CapacidadeBateria
    this.ligar = function ligar() {
        console.log("Fazendo ligação...");
    }
}

const celular = new Celular('Apple', 11, 6.1, 3110);
console.log(celular);