const pessoa = {
    nome: 'Anderson',
    idade: 25,
    estaAprovado: true,
    sobrenome: undefined
};

console.log(pessoa.nome, pessoa.idade, pessoa.estaAprovado, pessoa.sobrenome);

// Para exibir todas propiedades.
const propriedades = Object.keys(pessoa);
console.log(propriedades);

for (const key in pessoa) {
    console.log(pessoa[key]);
}