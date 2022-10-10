// Criar um objeto endereco que contenha: Rua, Cidade, CEP, exibirEndereco(endereco)

/* let endereco = {
    rua: 'Edinaldo Pereira Paiva',
    cidade: 'São José dos Judas',
    cep: 94494000
};

function exibirEndereco(endereco){
    for(const key in endereco)
    console.log(key, endereco[key]);
};

exibirEndereco(endereco); */

function exibirEndereco(rua, cidade, cep) {
    return {
        rua,
        cidade,
        cep
    };
};

const endereco = exibirEndereco('Edinaldo Pereira Paiva', 'São José dos Judas', 94494000);

for (const key in endereco) {
    console.log(key, endereco[key]);
}