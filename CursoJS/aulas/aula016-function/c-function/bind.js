function personagem(p1, p2, p3) {
    console.log('personagem this', this);
    console.log(p1, p2, p3);
}

const personagemThis = {
    nome: 'Anderson'
}

const bind1 = personagem.bind(personagemThis, 'param2', 123, ['array1', 0, 1, 3]);
bind1();