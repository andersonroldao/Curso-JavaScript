const arr1 = ['Programador', 'a', 'Bordo'];
const arr2 = [3, 2, 1];
const user = [
    'Anderson',
    29,
    2022,
    'Brasileiro'
];

// Spread unifica os arrays
console.log([arr1, arr2]);
console.log([...arr1, ...arr2, ...['ciclano', 'beltrano']]);

var nome = user[0];
var idade = user[1];
var ano = user[3]
console.log(nome, idade, ano);

var [nome, idade, ano] = user;
console.log(nome, idade, ano);