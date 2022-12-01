function usuario() {
    this.nome = 'Anderson';
    this.idade = 27;
    this.soma = function (a, b) {
        return a + b;
    }
}

// Método Call
function personagem(p1, p2, p3) {
    console.log('personagem this', this);
    console.log(p1, p2, p3);
}

const personagemThis = {
    nome: 'Anderson'
}

personagem.call(personagemThis, 'param1', 123, ['array', 1, 3]);