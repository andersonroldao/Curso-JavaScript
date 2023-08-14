const user = {
    nome: 'Anderson',
    idade: 26,
    ano: 2022,
    'ultimo-nome': 'Silva',
    digaOi(name) {
        return `Olá ${name}`;
    }
}

console.log(user.digaOi(user.nome));