const user = {
    nome: 'Anderson',
    idade: 29
}

const extraInfo = {
    pais: 'Brasil',
    ano: 2022
}

// Object.assign unifica outros objetos em um novo.
const newObject = Object.assign({}, user, extraInfo);
console.log(newObject);