const date = new Date();
const date1 = new Date('Oct 11 2022 11:57');
const date2 = new Date(2022, 09, 10, 12, 05);
date2.setFullYear(2030);

console.log(`${date}
${date1}
${date2}`);

// data para string
console.log(date2.toDateString());
// data para string com informação de zona
console.log(date2.toTimeString());
// data para string formato em banco de dados
console.log(date2.toISOString());