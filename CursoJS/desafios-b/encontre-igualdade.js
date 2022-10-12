console.log(saoIguais(endereco1, endereco2));
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));

function Endereco(rua, cidade, cep) {
    return {
        rua,
        cidade,
        cep,
    }
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');

function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep;
}

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2;
}