/* Criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto */

const filme = {
    titulo: 'Avengers',
    ano: 2019,
    diretor: 'Shaolin Matador de Porco',
    personagem: 'Dorime'
}

exibirPropiedades(filme);

function exibirPropiedades(obj) { // Exibe propriedades do tipo String.
    for (propriedades in obj) {
        if (typeof obj[propriedades] === 'string') {
            console.log(`${propriedades}: ${obj[propriedades]}`);
        } /* else {
            console.log(`${propriedades}: Não é uma propriedades do tipo String!`);
        } */
    }
}