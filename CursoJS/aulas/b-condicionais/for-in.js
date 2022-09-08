const pessoa = {
    nome: 'Maria',
    idade: 25
};

for (const key in pessoa) {
    console.log(key, pessoa.nome);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (const i in cores) {
    console.log(i, cores[i]);
}