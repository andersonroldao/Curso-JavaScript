const produtos = [
    { id: 1, nome: 'Shampoo' },
    { id: 2, nome: 'Condicionador' }
];

/* const produto = produtos.find(function(produto) {
    return produto.id === 1;
}); */

// Arrow function
const produto = produtos.find(produto => produto.id === 1);

console.log(produto);