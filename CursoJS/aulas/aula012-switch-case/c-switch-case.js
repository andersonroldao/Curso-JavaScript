const cor = '';

switch (cor) {
    case 'azul':
        console.log('Cor azul');
        break;
    case 'amarelo':
        console.log('Cor amaralo');
        break
    case 'vermelho':
        console.log('Cor vermelho');
    default:
        console.log('Cor rosa');
        break;
}


// Multi Case
switch (cor) {
    case 'vermelho':
    case 'laranja':
    case 'amarelo':
        console.log('Cor quente');
        break;

    case 'verde':
    case 'azul':
    case 'roxo':
        console.log('Cor fria');
        break;

    default:
        console.log('Cor não identificada');
        break;
}