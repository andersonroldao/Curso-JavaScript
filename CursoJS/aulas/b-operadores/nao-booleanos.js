/*
São truthy os valores dos tipos Object, Symbol (introduzido no ES6), strings não vazias e números diferentes de 0.

São falsy os valores false, undefined, null, 0, strings vazias, e NaN (not a number).
*/

let corPersonalizada  = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); // Vermelho


let corPersonalizada1  = '';
let corPadrao1 = 'Azul';
let corPerfil1 = corPersonalizada1 || corPadrao1;

console.log(corPerfil1); // Azul