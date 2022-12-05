const pessoa = {
    nome: 'Maria',
    idade: 25
};

for (const key in pessoa) {
    console.log(key, pessoa[key]);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (const i in cores) {
    console.log(i, cores[i]);
}

const obj = {
    "column01": "Coluna 01",
    "column02": "Coluna 02"
};

for (const column in obj) {
    console.log(column, '=', obj[column]);
}