// Definindo cliente tipo premium ou comum, requisito ter 100 ou mais pontos

let pontos = 100;
let tipo = pontos >= 100 ? 'Premium' : 'Comum'; // comparação ? verdadeiro : falso
console.log(tipo);