/* A variável "let" permite a reatribuição de valores. */
let valorIngresso = 20
valorIngresso = 30 /* neste caso o valor foi reatribuído de "20" para "30" */
console.log(valorIngresso);


/* A variável "const" não permite a reatribuição de valores. */
const valorIngressoInteira = 20
valorIngresso = 30 /* neste caso  o valor "30" não foi atribuído por se tratar de uma variável constante */
console.log(valorIngressoInteira);

/* É uma boa prática usar preferencialmente "const", a variável "let" deve ser usada somente quando precisar modificar o valor de uma variável */