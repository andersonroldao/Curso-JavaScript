// Arrow Function
/* const soma = (a, b) => {
    return a + b;
} */

const soma = (a, b) => a + b

console.log(soma(5, 2));


// Arrow Function sem return
const retornaUsuario = cidade => ({
    nome: 'Anderson',
    idade: 27,
    cidade
})

console.log(retornaUsuario('Porto Alegre'));