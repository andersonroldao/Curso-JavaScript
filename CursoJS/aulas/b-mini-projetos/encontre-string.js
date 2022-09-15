/* Criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto */

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropiedades(filme);

function exibirPropiedades(obj) { // Exibe propriedades do tipo String.
    for (const propriedades in filme) {
        if (typeof obj[propriedades] === 'string') {
            console.log(`${propriedades}: ${obj[propriedades]}`);
        } else {
            console.log(`${propriedades}: não é uma propriedades do tipo String!`);
        }
    }
}