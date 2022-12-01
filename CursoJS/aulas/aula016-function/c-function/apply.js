function personagem(p1, p2, p3) {
    console.log('personagem this', this);
    console.log(p1, p2, p3);
}

const personagemThis = {
    nome: 'Anderson'
}

// Método aply
personagem.apply(personagemThis, ['1 parametro', ['Isso é um array', 2], 257]);