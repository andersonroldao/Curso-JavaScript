var data = new Date();
var hora = data.getHours();
var relogio = data.toLocaleTimeString();

console.log(relogio);

if (hora >= 6 && hora < 12) {
    console.log('Bom dia! Agora são', hora, 'horas.');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde! Agora são', hora, 'horas.');
} else {
    console.log('Boa Noite! Agora são', hora, 'horas.');
}